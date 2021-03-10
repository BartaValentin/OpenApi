package openapi.patient.controller;

import com.openapi.api.PatientsApi;
import com.openapi.models.*;
import openapi.patient.service.PatientService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@RestController
public class PatientController implements PatientsApi {

    private final PatientService patientService;

    public PatientController(PatientService patientService) {
        this.patientService = patientService;
    }

    @Override
    public ResponseEntity<List<PatientDetails>> patientsGet() {
        var patients = patientService.getPatients();
        return ResponseEntity.ok(patients);
    }

    @Override
    public ResponseEntity<String> patientsPost(@Valid PatientDetails body) {
        patientService.createPatient(body);
        return new ResponseEntity<>("Success! New Patient Created!", HttpStatus.CREATED);
    }

    @Override
    public ResponseEntity<Examination> patientsSecNumberExaminationsEyeGet(String secNumber, EyeSide eye) {
        return null;
    }

    @Override
    public ResponseEntity<String> patientsSecNumberExaminationsEyePut(@Valid Examination body, String secNumber, EyeSide eye) {
        return null;
    }

    @Override
    public ResponseEntity<List<Examination>> patientsSecNumberExaminationsGet(String secNumber) {
        return null;
    }

    @Override
    public ResponseEntity<String> patientsSecNumberExaminationsPost(@Valid Examination body, String secNumber) {
        return null;
    }

    @Override
    public ResponseEntity<PatientDetails> patientsSecNumberGet(String secNumber) {
        var patient = patientService.getPatientDetailsBySecNumber(secNumber);
        return ResponseEntity.ok(patient);
    }

    @Override
    public ResponseEntity<PatientDetails> patientsSecNumberPut(@Valid PatientDetails body, String secNumber) {
        return null;
    }


}
