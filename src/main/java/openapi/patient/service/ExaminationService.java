package openapi.patient.service;

import com.openapi.models.Examination;
import com.openapi.models.EyeSide;
import openapi.patient.models.ExaminationDo;
import openapi.patient.models.Laterality;
import openapi.patient.models.PatientDo;
import openapi.patient.repository.ExaminationRepository;
import openapi.patient.repository.PatientRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class ExaminationService {

    private final ExaminationRepository examinationRepository;
    private final PatientRepository patientRepository;

    public ExaminationService(ExaminationRepository examinationRepository, PatientRepository patientRepository) {
        this.examinationRepository = examinationRepository;
        this.patientRepository = patientRepository;
    }

    public ArrayList<Examination> getPatientExaminations() {
        return null;
    }

    public void createExamination(Examination examination, String secNumber) {
        var patient = getPatientBySecNumber(secNumber);
        var examinationDo = toExaminationDo(examination,patient.getPatientId());
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

}
