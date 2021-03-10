package openapi.patient.models;

public final class Patient {
    private final Long patientId;
    private final String secNumber;
    private final String name;
    private final String eyeColor;
    private final String hairColor;
    private final String birthDate;

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
