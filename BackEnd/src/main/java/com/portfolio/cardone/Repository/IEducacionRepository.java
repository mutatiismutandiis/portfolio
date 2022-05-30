package com.portfolio.cardone.Repository;

import com.portfolio.cardone.Entity.Educacion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface IEducacionRepository extends JpaRepository<Educacion, Long>{
    
}
