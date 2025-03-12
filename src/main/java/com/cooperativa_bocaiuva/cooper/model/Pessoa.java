package com.cooperativa_bocaiuva.cooper.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table
public class Pessoa {
    private Integer id;
    @Column(name="Nome")
    private String nome;
    @Column(name="CPF")
    private String cpf;
    @Column(name="Identidade")
    private String identidade;
    @Column(name="Email")
    private String email;
    private String endereco;
}
