package com.olisaude.desafiobackend.dtos;

import com.olisaude.desafiobackend.entities.Client;
import com.olisaude.desafiobackend.entities.HealthProblem;
import jakarta.validation.constraints.NotBlank;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.util.List;


public record ClientDTO(@NotBlank String name,
                        @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate dateBirth,
                        @NotBlank String gender) {

}
