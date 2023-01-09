package com.rafaeldvl.reefmanager.models;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Corals {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(length = 5,nullable = false)
    private String tipo;
    @Column(length = 40,nullable = false)
    private String nome;
    @Column(length = 30,nullable = false)
    private String dificuldade;
    @Column(length = 10,nullable = false)
    private String iluminacao;
    @Column(length = 10,nullable = false)
    private String circulacao;
    @Column(length = 70,nullable = false)
    private String agressividade;
    @Column(nullable = false)
    private String urlimage;
    @Column(name = "descricao",length = 400,nullable = false)
    private String description;
}
