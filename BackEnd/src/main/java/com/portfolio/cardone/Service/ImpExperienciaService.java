package com.portfolio.cardone.Service;

import com.portfolio.cardone.Entity.Experiencia;
import com.portfolio.cardone.Interface.IExperienciaService;
import com.portfolio.cardone.Repository.IExperienciaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class ImpExperienciaService implements IExperienciaService {
    
    @Autowired IExperienciaRepository iExperienciaRepository;
    
    @Override
    public List<Experiencia> getExperiencia() {
        List<Experiencia> experiencia = iExperienciaRepository.findAll();
        return experiencia;
    }

    @Override
   public void saveExperiencia(Experiencia experiencia) {
        iExperienciaRepository.save(experiencia);
    }

    @Override
     public void deleteExperiencia(Long id) {
        iExperienciaRepository.deleteById(id);
    }

    @Override
    public Experiencia findExperiencia(Long id) {
        Experiencia experiencia = iExperienciaRepository.findById(id).orElse(null);
        return experiencia;
    }
    
}
