package com.olisaude.desafiobackend.services;


import com.olisaude.desafiobackend.entities.HealthProblem;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientRiskCalculator {

    public static Double getBiggestRisk(Integer sd){
        return  (1 / (1 + Math.exp(-((-2.8 + sd)))+ 100));
    }

    public static int getSd(List<HealthProblem> healthProblems){

        return (healthProblems.stream()
                .mapToInt(healthProblem ->{
                    try {
                        return healthProblem.getDegree();
                    }catch (NullPointerException e){
                        return 1;
                    }
                }).sum());
    }
}
