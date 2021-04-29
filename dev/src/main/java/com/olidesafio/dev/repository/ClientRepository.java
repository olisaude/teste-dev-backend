package com.olidesafio.dev.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.olidesafio.dev.model.Client;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {
	
	public List<Client>findAllByNameContainingIgnoreCase(String name);
}
