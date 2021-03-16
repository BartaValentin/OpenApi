package openapi.patient.repository;

import openapi.patient.models.ExaminationDo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExaminationRepository extends JpaRepository<ExaminationDo, Long> {

}
