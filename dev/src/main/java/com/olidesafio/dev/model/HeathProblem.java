package com.olidesafio.dev.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class HeathProblem {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	
	@NotNull
	private String nameDisease;
	
	@NotNull
	private int degreeDisease;
	
	@OneToMany (mappedBy = "heathProblem",cascade = CascadeType.ALL)
	@JsonIgnoreProperties ("heathProblem")
	private List<Client> client;

	public List<Client> getClient() {
		return client;
	}

	public void setClient(List<Client> client) {
		this.client = client;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNameDisease() {
		return nameDisease;
	}

	public void setNameDisease(String nameDisease) {
		this.nameDisease = nameDisease;
	}

	public int getDegreeDisease() {
		return degreeDisease;
	}

	public void setDegreeDisease(int degreeDisease) {
		this.degreeDisease = degreeDisease;
	}
	
	

}
