package com.olisaude.desafiobackend.controllers;


import com.olisaude.desafiobackend.dtos.HealthProblemDTO;
import com.olisaude.desafiobackend.dtos.ResponseHealthProblemDTO;
import com.olisaude.desafiobackend.entities.HealthProblem;
import com.olisaude.desafiobackend.services.HealthProblemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("health-problem")
public class HealthProblemController {


    @Autowired
    private HealthProblemService service;


    @PostMapping("/save")
    public ResponseEntity<ResponseHealthProblemDTO> create(@RequestBody @Validated HealthProblemDTO dto){
        HealthProblem healthProblem = service.saveHealthProblem(dto);
        ResponseHealthProblemDTO response = new ResponseHealthProblemDTO(healthProblem);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);

    }
}
