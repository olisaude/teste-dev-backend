package com.olisaude.desafiobackend.repositories;


import com.olisaude.desafiobackend.entities.HealthProblem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HealthProblemRepository extends JpaRepository<HealthProblem, Long> {
}
