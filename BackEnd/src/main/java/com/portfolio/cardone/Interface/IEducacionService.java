package com.portfolio.cardone.Interface;

import com.portfolio.cardone.Entity.Educacion;
import com.portfolio.cardone.Entity.Persona;
import java.util.List;

public interface IEducacionService {
    //Traer una lista de educaciones
    public List<Educacion> getEducacion();
    
    //Guardar un objeto de tipo educacion
    public void saveEducacion(Educacion educacion);
    
    //Eliminar una educacion
    public void deleteEducacion(Long id);
    
    //Buscar una educacion
    public Educacion findEducacion(Long id);
}
