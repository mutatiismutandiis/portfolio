package com.portfolio.cardone.Controller;

import com.portfolio.cardone.Entity.Educacion;
import com.portfolio.cardone.Interface.IEducacionService;
import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class EducacionController {

    @Autowired IEducacionService iEducacionService; 
    
    @GetMapping("/educaciones/traer")
    public List<Educacion> getEducacion(){
        return iEducacionService.getEducacion();
    }
    
    @PostMapping("/educaciones/crear")
    public String createEducacion(@RequestBody Educacion educacion){
        iEducacionService.saveEducacion(educacion);
        return "La educación fue creada correctamente";
    }
    
    @DeleteMapping("/educaciones/borrar/{id}")
    public String deleteEducacion(@PathVariable Long id){
        iEducacionService.deleteEducacion(id);
        return "La educación fue eliminada correctamente";
    }
    
    //URL:PUERTO/personas/editar/id/nombre & apellido & img
    @PutMapping("/educaciones/editar/{id}")
    public Educacion editEducacion(@PathVariable Long id,
                               @RequestParam("nombre") String nuevoNombre,
                               @RequestParam("lugar") String nuevoLugar,
                               @RequestParam("fecha de inicio") Date nuevoFechaInicio,
                               @RequestParam("fecha de fin") Date nuevoFechaFin){
    Educacion educacion = iEducacionService.findEducacion(id);
    
    educacion.setNombre(nuevoNombre);
    educacion.setLugar(nuevoLugar);
    educacion.setFechaInicio(nuevoFechaInicio);
    educacion.setFechaFin(nuevoFechaFin);
    
    iEducacionService.saveEducacion(educacion);
    return educacion;
    }
}
