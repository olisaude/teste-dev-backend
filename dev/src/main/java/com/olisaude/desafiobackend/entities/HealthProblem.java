package com.olisaude.desafiobackend.entities;

import com.olisaude.desafiobackend.dtos.RequestHealthProblemDTO;
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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @Column(name = "active")
    private boolean active;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "client_id")
    private Client client;
    private Integer degree;

    public HealthProblem(RequestHealthProblemDTO dto){
        this.name = dto.name();
        this.degree = dto.degree();
        this.active = true;
    }

}
