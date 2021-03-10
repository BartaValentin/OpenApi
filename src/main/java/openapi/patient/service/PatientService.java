package openapi.patient.service;

import com.openapi.models.PatientDetails;
import openapi.patient.models.Patient;
import openapi.patient.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;

@Service
public class PatientService {

    @Autowired
    private PatientRepository patientRepository;

    public void createPatient(PatientDetails patientDetails) {
        var patient = toPatient(patientDetails);
        patientRepository.save(patient);
    }

    public void updatePatient(PatientDetails patientDetails) {
        var patient = getPatient(patientDetails.getSecNumber());
        patientRepository.delete(patient);
        createPatient(patientDetails);
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

    private Patient getPatient(String secNumber) {
        return patientRepository.findAll().stream().filter(t -> t.getSecNumber().equals(secNumber)).findFirst().get();
    }

    private Patient toPatient(PatientDetails patientDetails) {
        return new Patient(
            patientDetails.getSecNumber(),
            patientDetails.getName(),
            patientDetails.getEyeColor(),
            patientDetails.getHairColor(),
            patientDetails.getBirthDate()
        );
    }

    private PatientDetails toPatientDetails(Patient patient) {
        var patientDetails = new PatientDetails();
        patientDetails.setSecNumber(patient.getSecNumber());
        patientDetails.setName(patient.getName());
        patientDetails.setEyeColor(patient.getEyeColor());
        patientDetails.setHairColor(patient.getHairColor());
        patientDetails.setBirthDate(patient.getBirthDate());
        return  patientDetails;
    }

}
