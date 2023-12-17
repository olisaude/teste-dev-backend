package com.olisaude.desafiobackend.entities;

import com.olisaude.desafiobackend.dtos.ClientDTO;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity(name = "clients")
@Table(name = "clients")
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode(of = "id")
@ToString
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;
    @Column(name = "client_name")
    private String name;
    @Column(name = "date_birth")
    private LocalDate dateBirth;
    @Column(name = "client_active")
    private boolean active;
    private String gender;
    @OneToMany(cascade = CascadeType.ALL,
            fetch = FetchType.LAZY, orphanRemoval = true)
    @JoinColumn(name = "client_id")
    private List<HealthProblem> healthProblem;
    @Column(name = "creation_date")
    private LocalDate creationDate;
    @Column(name = "update_date")
    private LocalDate updateDate;

    public Client(){}

    public Client(ClientDTO clientDTO){
        this.healthProblem = new ArrayList<>(clientDTO.healthProblems());
        this.name = clientDTO.name();
        this.dateBirth = clientDTO.dateBirth();
        this.gender = clientDTO.gender();
        this.creationDate = LocalDate.now();
        this.setActive(true);
    }
}
