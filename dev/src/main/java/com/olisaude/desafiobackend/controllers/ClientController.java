package com.olisaude.desafiobackend.controllers;

import com.olisaude.desafiobackend.dtos.RequestClientDTO;
import com.olisaude.desafiobackend.dtos.ResponseClientDTO;
import com.olisaude.desafiobackend.entities.Client;
import com.olisaude.desafiobackend.services.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping(value = "/api/client")
public class ClientController {


    @Autowired
    private ClientService clientService;


    @GetMapping
    public ResponseEntity<List<ResponseClientDTO>> getAll(){
        List<ResponseClientDTO> responseClientDTO = clientService.getAll().stream()
                .map(ResponseClientDTO::new).toList();
        return ResponseEntity.status(HttpStatus.OK).body(responseClientDTO);
    }

    @PostMapping(value = "/create", produces = "application/json")
    public ResponseEntity<ResponseClientDTO> createClient(@RequestBody RequestClientDTO clientDTO){
        Client client = clientService.save(clientDTO);
        ResponseClientDTO responseClientDTO = new ResponseClientDTO(client);
        return ResponseEntity.status(HttpStatus.CREATED).body(responseClientDTO);
    }
}
