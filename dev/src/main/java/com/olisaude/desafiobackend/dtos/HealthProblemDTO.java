package com.olisaude.desafiobackend.dtos;

import com.olisaude.desafiobackend.entities.HealthProblem;
import jakarta.validation.constraints.NotBlank;

public record HealthProblemDTO(@NotBlank String name,
                               Integer degree) {


}

