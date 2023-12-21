package com.olisaude.desafiobackend.dtos;

import com.olisaude.desafiobackend.entities.Client;
import com.olisaude.desafiobackend.entities.HealthProblem;
import jakarta.validation.constraints.NotBlank;

import java.util.List;

public record ResponseUpdateClientDTO(@NotBlank String name,
                                      @NotBlank String gender) {


    public ResponseUpdateClientDTO(Client client){
        this(client.getName(),
            client.getGender());
    }
}
