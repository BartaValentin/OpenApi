package openapi.patient.models;

import javax.persistence.*;

@Entity
public class ExaminationDo {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long ExaminationId;

    private Double eyeAxis;
    private Double cylinder;
    private Double sphere;
    private Laterality laterality;
    private Long patientId;

    public ExaminationDo(Double eyeAxis, Double cylinder, Double sphere, Laterality laterality, Long patientId) {
        this.eyeAxis = eyeAxis;
        this.cylinder = cylinder;
        this.sphere = sphere;
        this.laterality = laterality;
        this.patientId = patientId;
    }

    public ExaminationDo() {

    }

    public Long getExaminationId() {
        return ExaminationId;
    }

    public Double getEyeAxis() {
        return eyeAxis;
    }

    public Double getCylinder() {
        return cylinder;
    }

    public Double getSphere() {
        return sphere;
    }

    public Laterality getLaterality() {  return laterality; }

    public Long getPatientId() { return patientId; }
}
