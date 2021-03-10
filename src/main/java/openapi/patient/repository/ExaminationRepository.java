package openapi.patient.repository;

import com.openapi.models.Examination;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExaminationRepository extends JpaRepository<Examination, Long> {
}
