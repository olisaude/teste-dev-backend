package com.olisaude.desafiobackend.dtos;
import com.olisaude.desafiobackend.entities.Client;
import com.olisaude.desafiobackend.entities.HealthProblem;

import java.time.LocalDate;
import java.util.List;


public record ResponseClientDTO(String name,
                                LocalDate birthDate,
                                String gender,
                                List<ResponseHealthProblemDTO> healthProblems) {

    public ResponseClientDTO(String name, LocalDate birthDate, String gender,
                             List<ResponseHealthProblemDTO> healthProblems) {
        this.name = name;
        this.birthDate = birthDate;
        this.gender = gender;
        this.healthProblems = healthProblems;

    }

    public ResponseClientDTO(Client client) {
        this(   client.getName(),
                client.getDateBirth(),
                client.getGender(),
                client.getHealthProblem().stream()
                        .map(ResponseHealthProblemDTO::new).toList());
    }
}
