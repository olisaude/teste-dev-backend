package com.olidesafio.dev.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.olidesafio.dev.model.HeathProblem;
import com.olidesafio.dev.repository.HeathProblemRepository;

@RestController
@RequestMapping("/disease")
@CrossOrigin(origins="*")
public class HeathProblemController {
	
	@Autowired
	private HeathProblemRepository repository;
	
	@GetMapping
	public ResponseEntity<List<HeathProblem>> getAll(){
		return ResponseEntity.ok(repository.findAll());
	}
	
/*	@GetMapping ("/diseases")
		public ResponseEntity<HeathProblem> getByScore (@PathVariable long score){
			
		}*/
	
	
	
}
