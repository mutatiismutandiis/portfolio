package com.portfolio.cardone.Interface;

import com.portfolio.cardone.Entity.Persona;
import java.util.List;

public interface IPersonaService {
   //Traer una lista de personas
    public List<Persona> getPersona();
    
    //Guardar un objeto de tipo persona
    public void savePersona(Persona persona);
    
    //Eliminar un usuario
    public void deletePersona(Long id);
    
    //Buscar un usuario
    public Persona findPersona(Long id);
}
