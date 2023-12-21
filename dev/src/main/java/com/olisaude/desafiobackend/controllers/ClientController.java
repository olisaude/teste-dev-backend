package com.olisaude.desafiobackend.controllers;

import com.olisaude.desafiobackend.dtos.RequestClientDTO;
import com.olisaude.desafiobackend.dtos.ResponseClientDTO;
import com.olisaude.desafiobackend.dtos.ResponseUpdateClientDTO;
import com.olisaude.desafiobackend.entities.Client;
import com.olisaude.desafiobackend.services.ClientService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping(value = "/api/client")
public class ClientController {

    private ClientService clientService;

    public ClientController(ClientService clientService){
        this.clientService = clientService;
    }

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

    @GetMapping(value = "/risk")
    public ResponseEntity<List<ResponseClientDTO>> getBiggestRiskClient(){
        List<ResponseClientDTO> response = clientService.getBiggestRisk().stream()
                .map(client -> new ResponseClientDTO(client)).toList();

        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<ResponseClientDTO> updateClient(@RequestBody ResponseUpdateClientDTO request,
                                                                @PathVariable Long id){

        Client client = clientService.updateClient(id,request);

        ResponseClientDTO responseClientDTO = new ResponseClientDTO(client);

        return ResponseEntity.status(HttpStatus.OK).body(responseClientDTO);

    }
}
