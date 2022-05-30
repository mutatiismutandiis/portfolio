package com.portfolio.cardone.Controller;

import com.portfolio.cardone.Entity.Experiencia;
import com.portfolio.cardone.Interface.IExperienciaService;
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

public class ExperienciaController {

    @Autowired IExperienciaService iExperienciaService;
    
    @GetMapping("/experiencias/traer")
    public List<Experiencia> getExperiencia(){
        return iExperienciaService.getExperiencia();
    }
    
    @PostMapping("/experiencias/crear")
    public String createExperiencia(@RequestBody Experiencia experiencia){
        iExperienciaService.saveExperiencia(experiencia);
        return "La experiencia fue creada correctamente";
    }
    
    @DeleteMapping("/experiencias/borrar/{id}")
    public String deleteExperiencia(@PathVariable Long id){
        iExperienciaService.deleteExperiencia(id);
        return "La experiencia fue eliminada correctamente";
    }
    
    @PutMapping("/experiencias/editar/{id}")
    public Experiencia editExperiencia(@PathVariable Long id,
                               @RequestParam("nombre") String nuevoNombre,
                               @RequestParam("lugar") String nuevoLugar,
                               @RequestParam("fecha de inicio") Date nuevoFechaInicio,
                               @RequestParam("fecha de fin") Date nuevoFechaFin){
    Experiencia experiencia = iExperienciaService.findExperiencia(id);
    
    experiencia.setNombre(nuevoNombre);
    experiencia.setLugar(nuevoLugar);
    experiencia.setFechaInicio(nuevoFechaInicio);
    experiencia.setFechaFin(nuevoFechaFin);
    
    iExperienciaService.saveExperiencia(experiencia);
    return experiencia;
    }
}
