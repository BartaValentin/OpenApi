package openapi.patient.repository;

import openapi.patient.models.PatientDo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientRepository extends JpaRepository<PatientDo, Long> {

}
