package com.rafaeldvl.reefmanager.models;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Invert  {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false,length = 40)
    private String nome;
    @Column(nullable = false, length = 8)
    private String dificuldade;
    @Column(nullable = false, length = 20)
    private String alimentacao;
    @Column(nullable = false, length = 40)
    private String comportamento;
    @Column(nullable = false)
    private Long aquariomin;
    @Column(nullable = false)
    private String urlimage;
    @Column(name = "descricao",nullable = false, length = 500)
    private String description;
}
