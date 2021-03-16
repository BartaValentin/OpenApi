package openapi.patient.service;

import com.openapi.models.Examination;
import com.openapi.models.EyeSide;
import openapi.patient.models.ExaminationDo;
import openapi.patient.models.Laterality;
import openapi.patient.models.PatientDo;
import openapi.patient.repository.ExaminationRepository;
import openapi.patient.repository.PatientRepository;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Arrays;

@Service
public class ExaminationService {

    private final ExaminationRepository examinationRepository;
    private final PatientRepository patientRepository;

    public ExaminationService(ExaminationRepository examinationRepository, PatientRepository patientRepository) {
        this.examinationRepository = examinationRepository;
        this.patientRepository = patientRepository;
    }

    public Examination updateEyamination(String secNumber, EyeSide eyeSide, Examination updatedExamination) {
        var examination = getPatientExamination(secNumber, eyeSide);
        var oldExamination = toExaminationDo(examination, examination.getPatientId().longValue());
        examinationRepository.delete(oldExamination);
        createExamination(updatedExamination, secNumber);
        return updatedExamination;
    }

    public ArrayList<Examination> getPatientExaminations(String secNumber) {
        var patientDo = getPatientBySecNumber(secNumber);
        var examinationDo = examinationRepository.findAll().stream().filter(t -> t.getPatientId() == patientDo.getPatientId()).toArray();

        ArrayList<Examination> examinations = new ArrayList<Examination>();

        for (var examination : examinationDo) {
            examinations.add(toExamination((ExaminationDo) examination));
        }

        return examinations;
    }

    public Examination getPatientExamination(String secNumber, EyeSide eyeSide) {
        var patientDo = getPatientBySecNumber(secNumber);

        var laterality = eyeSide == EyeSide.RIGHT ? Laterality.RIGHT : Laterality.LEFT;

        var examinationDo = examinationRepository
                .findAll()
                .stream()
                .filter(t -> t.getPatientId().equals(patientDo.getPatientId()) && t.getLaterality().equals(laterality))
                .findFirst()
                .get();
        return toExamination(examinationDo);
    }

    public void createExamination(Examination examination, String secNumber) {
        var patient = getPatientBySecNumber(secNumber);
        var examinationDo = toExaminationDo(examination, patient.getPatientId());
        examinationRepository.save(examinationDo);
    }

    private PatientDo getPatientBySecNumber(String secNumber) {
        return patientRepository.findAll().stream().filter(t -> t.getSecNumber().equals(secNumber)).findFirst().get();
    }

    private ExaminationDo toExaminationDo(Examination examination, Long patientId) {
        return new ExaminationDo(
                examination.getEyeAxis().doubleValue(),
                examination.getCylinder().doubleValue(),
                examination.getSphere().doubleValue(),
                examination.getEyeSide() == EyeSide.RIGHT ? Laterality.RIGHT : Laterality.LEFT,
                patientId
        );
    }

    private Examination toExamination(ExaminationDo examinationDo) {

        EyeSide eyeSide = examinationDo.getLaterality() == Laterality.RIGHT ? EyeSide.RIGHT : EyeSide.LEFT;

        var examination = new Examination();

        examination.setPatientId(examinationDo.getPatientId().intValue());
        examination.setEyeAxis(new BigDecimal(examinationDo.getEyeAxis()));
        examination.setCylinder(new BigDecimal(examinationDo.getCylinder()));
        examination.setSphere(new BigDecimal(examinationDo.getSphere()));
        examination.setEyeSide(eyeSide);

        return examination;
    }
}