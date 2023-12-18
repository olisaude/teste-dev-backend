package com.olisaude.desafiobackend.dtos;


import jakarta.validation.constraints.NotBlank;


public record RequestHealthProblemDTO(@NotBlank String name,
                                      Integer degree) {
}

