package com.olidesafio.dev.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.olidesafio.dev.model.HeathProblem;

public interface HeathProblemRepository extends JpaRepository<HeathProblem, Long> {
	public List<HeathProblem>findAllByNameDiseaseContainingIgnoreCase(String nameDisease);
}
