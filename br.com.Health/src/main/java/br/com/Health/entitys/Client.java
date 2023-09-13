package br.com.Health.entitys;

import java.io.Serializable;
import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@Document(collection="client")
public class Client implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	private String id;
	
	private String name;
	private LocalDate birthDate;
	private char gender;
	private LocalDate creationDate;
	private LocalDate updateDate;
	
	@Autowired
	private HealthInssue healthInssue;
}
