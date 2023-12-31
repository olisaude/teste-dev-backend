package com.olisaude.desafiobackend.dtos;

import com.olisaude.desafiobackend.entities.HealthProblem;

public record ResponseHealthProblemDTO(String name, Integer degree) {



    public ResponseHealthProblemDTO(HealthProblem healthProblem){
        this(healthProblem.getName(),
            healthProblem.getDegree());
    }
}
