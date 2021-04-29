package com.olidesafio.dev.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.olidesafio.dev.model.Client;
import com.olidesafio.dev.repository.ClientRepository;

@RestController
@RequestMapping("/patients")
@CrossOrigin("*")
public class ClientController {
	
	@Autowired
	private ClientRepository repository;
	
	@GetMapping
	public ResponseEntity<List<Client>> getAll(){
		return ResponseEntity.ok(repository.findAll());
	}
	
	@GetMapping("/id")
	public ResponseEntity<Client> getById (@PathVariable long id){
		return repository.findById(id).map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());	
	}
	
	@PostMapping
	public ResponseEntity<Client> postClient (@RequestBody Client client){
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(client));
	}
	
	@PutMapping
	public ResponseEntity<Client> putClient (@RequestBody Client client){
		return ResponseEntity.status(HttpStatus.OK).body(repository.save(client));
	}
	
	
}
