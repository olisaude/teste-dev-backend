package com.olisaude.desafiobackend.controllers;

import com.olisaude.desafiobackend.dtos.ClientDTO;
import com.olisaude.desafiobackend.dtos.ResponseClientDTO;
import com.olisaude.desafiobackend.entities.Client;
import com.olisaude.desafiobackend.services.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/client")
public class ClientController {


    @Autowired
    private ClientService clientService;


    @PostMapping(value = "/create", produces = "application/json")
    public ResponseEntity<ResponseClientDTO> createClient(@RequestBody ClientDTO clientDTO){
        Client client = clientService.save(clientDTO);
        ResponseClientDTO responseClientDTO = new ResponseClientDTO(client);
        return ResponseEntity.status(HttpStatus.CREATED).body(responseClientDTO);
    }

}
