package com.olisaude.desafiobackend.dtos;
import com.olisaude.desafiobackend.entities.Client;

import java.time.LocalDate;


public record ResponseClientDTO(String name,
        LocalDate birthDate,
        String gender) {

    public ResponseClientDTO(String name, LocalDate birthDate, String gender ) {
        this.name = name;
        this.birthDate = birthDate;
        this.gender = gender;

    }

    public ResponseClientDTO(Client client) {
        this(   client.getName(),
                client.getDateBirth(),
                client.getGender());
    }
}
