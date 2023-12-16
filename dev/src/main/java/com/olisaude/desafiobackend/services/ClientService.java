package com.olisaude.desafiobackend.services;

import com.olisaude.desafiobackend.dtos.ClientDTO;
import com.olisaude.desafiobackend.entities.Client;
import com.olisaude.desafiobackend.repositories.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;



@Service
public class ClientService {

    @Autowired
    private ClientRepository clientRepository;

    @Transactional
    public Client save(ClientDTO clientDTO){
        if (clientDTO != null) {
            Client client = new Client(clientDTO);
            return clientRepository.save(client);
        }else{
            throw new RuntimeException("Error to create Client!");
        }
    }
}
