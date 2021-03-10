package openapi.patient.models;

public class Examination {

    private Long ExaminationId;
    private int eyeAxis;
    private int cylinder;
    private double sphere;
    private Long patientId;
    private EyeSide eyeSide;

    public Examination(Long examinationId, int eyeAxis, int cylinder, double sphere, Long patientId, EyeSide eyeSide) {
        ExaminationId = examinationId;
        this.eyeAxis = eyeAxis;
        this.cylinder = cylinder;
        this.sphere = sphere;
        this.patientId = patientId;
        this.eyeSide = eyeSide;
    }

    public Long getExaminationId() {
        return ExaminationId;
    }

    public int getEyeAxis() {
        return eyeAxis;
    }

    public int getCylinder() {
        return cylinder;
    }

    public double getSphere() {
        return sphere;
    }

    public Long getPatientId() {
        return patientId;
    }

    public EyeSide getEyeSide() {
        return eyeSide;
    }
}
