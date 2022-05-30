package com.portfolio.cardone.Repository;

import com.portfolio.cardone.Entity.Experiencia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface IExperienciaRepository extends JpaRepository<Experiencia, Long>{
    
}
