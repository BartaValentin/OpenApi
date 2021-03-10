package openapi.patient.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Patient {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long patientId;

    private String secNumber;
    private String name;
    private String eyeColor;
    private String hairColor;
    private String birthDate;

    public Patient(String secNumber, String name, String eyeColor, String hairColor, String birthDate) {
        this.secNumber = secNumber;
        this.name = name;
        this.eyeColor = eyeColor;
        this.hairColor = hairColor;
        this.birthDate = birthDate;
    }

    public Patient() {

    }

    public Long getPatientId() {
        return patientId;
    }

    public String getSecNumber() {
        return secNumber;
    }

    public String getName() {
        return name;
    }

    public String getEyeColor() {
        return eyeColor;
    }

    public String getHairColor() {
        return hairColor;
    }

    public String getBirthDate() {
        return birthDate;
    }

}
