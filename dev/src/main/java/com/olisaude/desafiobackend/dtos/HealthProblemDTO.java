package com.olisaude.desafiobackend.dtos;


import jakarta.validation.constraints.NotBlank;


public record HealthProblemDTO(@NotBlank String name,
                               Integer degree) {
}

