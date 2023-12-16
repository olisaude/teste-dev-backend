package com.olisaude.desafiobackend.entities;

import com.olisaude.desafiobackend.dtos.HealthProblemDTO;
import jakarta.persistence.*;
import lombok.*;

@Entity(name = "health_problem")
@Table(name = "health_problem")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class HealthProblem {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    @Column(name = "health_problem_active")
    private boolean active;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "client_id")
    private Client client;
    private Integer degree;

    public HealthProblem(HealthProblemDTO dto){
        this.name = dto.name();
        this.degree = dto.degree();
        this.setActive(true);
    }

}
