package com.portfolio.cardone.Interface;

import com.portfolio.cardone.Entity.Experiencia;
import java.util.List;


public interface IExperienciaService {
    //Traer una lista de eexperiencia
    public List<Experiencia> getExperiencia();
    
    //Guardar un objeto de tipo experiencia
    public void saveExperiencia(Experiencia educacion);
    
    //Eliminar una experiencia
    public void deleteExperiencia(Long id);
    
    //Buscar una experiencia
    public Experiencia findExperiencia(Long id);    
}
