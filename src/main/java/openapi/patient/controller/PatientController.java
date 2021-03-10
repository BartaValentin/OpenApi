package openapi.patient.controller;

import com.openapi.api.PatientsApi;
import com.openapi.models.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@RestController
public class PatientController implements PatientsApi {


    @Override
    public ResponseEntity<List<PatientDetails>> patientsGet() {
        return null;
    }

    @Override
    public ResponseEntity<Void> patientsPost(@Valid PatientDetails body) {
        return null;
    }

    @Override
    public ResponseEntity<Examination> patientsSecNumberExaminationsEyeGet(String secNumber, EyeSide eye) {
        return null;
    }

    @Override
    public ResponseEntity<Void> patientsSecNumberExaminationsEyePut(@Valid Examination body, String secNumber, EyeSide eye) {
        return null;
    }

    @Override
    public ResponseEntity<List<Examination>> patientsSecNumberExaminationsGet(String secNumber) {
        return null;
    }

    @Override
    public ResponseEntity<Void> patientsSecNumberExaminationsPost(@Valid Examination body, String secNumber) {
        return null;
    }

    @Override
    public ResponseEntity<PatientDetails> patientsSecNumberGet(String secNumber) {
        return null;
    }

    @Override
    public ResponseEntity<Void> patientsSecNumberPut(@Valid UpdatePatient body, String secNumber) {
        return null;
    }
}
