package com.olidesafio.dev.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;



@Entity
public class Cliente {
	
	@Id
	@GeneratedValue
	private long id;
	
	@NotNull
	private String nome;
	
	@NotNull
	private long nascDia;
	
	@NotNull
	private long nascMes;
	
	@NotNull
	private long nascAno;
	
	@NotNull
	private String sexo;
	
	@Temporal(TemporalType.TIMESTAMP)
	private Date date = new java.sql.Date(System.currentTimeMillis());

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public long getNascDia() {
		return nascDia;
	}

	public void setNascDia(long nascDia) {
		this.nascDia = nascDia;
	}

	public long getNascMes() {
		return nascMes;
	}

	public void setNascMes(long nascMes) {
		this.nascMes = nascMes;
	}

	public long getNascAno() {
		return nascAno;
	}

	public void setNascAno(long nascAno) {
		this.nascAno = nascAno;
	}

	public String getSexo() {
		return sexo;
	}

	public void setSexo(String sexo) {
		this.sexo = sexo;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

}
