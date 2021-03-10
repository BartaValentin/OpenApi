package openapi.patient.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Entity
public class Examination {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long ExaminationId;

    private int eyeAxis;
    private int cylinder;
    private double sphere;
    private EyeSide eyeSide;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private Patient patient;

    public Examination(int eyeAxis, int cylinder, double sphere, EyeSide eyeSide, Patient patient) {
        this.eyeAxis = eyeAxis;
        this.cylinder = cylinder;
        this.sphere = sphere;
        this.eyeSide = eyeSide;
        this.patient = patient;
    }

    public Examination() {

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

    public EyeSide getEyeSide() {
        return eyeSide;
    }

}
