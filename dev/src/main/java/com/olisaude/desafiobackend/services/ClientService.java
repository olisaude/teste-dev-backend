package com.olisaude.desafiobackend.services;

import com.olisaude.desafiobackend.dtos.RequestClientDTO;
import com.olisaude.desafiobackend.dtos.ResponseUpdateClientDTO;
import com.olisaude.desafiobackend.entities.Client;
import com.olisaude.desafiobackend.repositories.ClientRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;


@Service
public class ClientService {


    private ClientRepository clientRepository;

    public ClientService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    @Transactional
    public List<Client> getAll(){
        return clientRepository.findAll();
    }

    @Transactional
    public Client save(RequestClientDTO clientDTO){
        if (clientDTO != null) {
            Client client = new Client(clientDTO);
            return clientRepository.save(client);
        }else{
            throw new RuntimeException("Error to create Client!");
        }
    }

    public List<Client> getBiggestRisk(){
        return clientRepository.findTop10ByOrderByScoreRiskDesc();
    }

    public Client updateClient(Long id, ResponseUpdateClientDTO request){
        Optional<Client> optionalClient = clientRepository.findById(id);

        if (!optionalClient.isEmpty()){
            Client client = optionalClient.get();
            BeanUtils.copyProperties(request,client);
            client.setUpdateDate(LocalDate.now());
            return clientRepository.save(client);
        }else {
            throw new RuntimeException("Client not found");
        }
    }


    public Client getClientById(Long id){
        Optional<Client> optionalClient = clientRepository.findById(id);

        if (!optionalClient.isEmpty()){
            Client client = optionalClient.get();
            return client;
        }else{
            throw new RuntimeException("Client not found");
        }
    }
}
