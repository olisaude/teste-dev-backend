package com.olisaude.desafiobackend.repositories;

import com.olisaude.desafiobackend.entities.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ClientRepository extends JpaRepository<Client,Long> {

    Optional<Client> findById(Long id);

    List<Client> findTop10ByOrderByScoreRiskDesc();

}
