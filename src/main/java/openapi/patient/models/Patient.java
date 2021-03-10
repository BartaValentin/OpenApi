package openapi.patient.models;

public class Patient {
    private Long patientId;
    private String secNumber;
    private String name;
    private String eyeColor;
    private String hairColor;
    private String birthDate;

    public Patient(Long patientId, String secNumber, String name, String eyeColor, String hairColor, String birthDate) {
        this.patientId = patientId;
        this.secNumber = secNumber;
        this.name = name;
        this.eyeColor = eyeColor;
        this.hairColor = hairColor;
        this.birthDate = birthDate;
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
