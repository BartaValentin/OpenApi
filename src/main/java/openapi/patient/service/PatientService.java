package openapi.patient.service;

import com.openapi.models.PatientDetails;
import openapi.patient.models.PatientDo;
import openapi.patient.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;

@Service
public class PatientService {

    private final PatientRepository patientRepository;

    public PatientService(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    public void createPatient(PatientDetails patientDetails) {
        var patient = toPatient(patientDetails);
        patientRepository.save(patient);
    }

    public PatientDetails updatePatient(PatientDetails patientDetails, String secNumber) {
        var patient = getPatient(secNumber);
        patientRepository.delete(patient);
        createPatient(patientDetails);
        return patientDetails;
    }

    public ArrayList<PatientDetails> getPatients() {
        var patients = patientRepository.findAll();
        var patientDetails = new ArrayList<PatientDetails>();

        for(var patient : patients) {
            patientDetails.add(toPatientDetails(patient));
        }

        return patientDetails;
    }

    public PatientDetails getPatientDetailsBySecNumber(String secNumber) {
       var patient = getPatient(secNumber);
       return toPatientDetails(patient);
    }

    private PatientDo getPatient(String secNumber) {
        return patientRepository.findAll().stream().filter(t -> t.getSecNumber().equals(secNumber)).findFirst().get();
    }

    private PatientDo toPatient(PatientDetails patientDetails) {
        return new PatientDo(
            patientDetails.getSecNumber(),
            patientDetails.getName(),
            patientDetails.getEyeColor(),
            patientDetails.getHairColor(),
            patientDetails.getBirthDate()
        );
    }

    private PatientDetails toPatientDetails(PatientDo patient) {
        var patientDetails = new PatientDetails();
        patientDetails.setSecNumber(patient.getSecNumber());
        patientDetails.setName(patient.getName());
        patientDetails.setEyeColor(patient.getEyeColor());
        patientDetails.setHairColor(patient.getHairColor());
        patientDetails.setBirthDate(patient.getBirthDate());
        return  patientDetails;
    }

}
