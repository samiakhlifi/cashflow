package com.cashflow.demo.model;


import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name="cashflow")
public class Cashflow {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;


    @Column(name="resultat_net")
    private float ResultatNet;

    @Column(name="dotationsnettes_provisions")
    private float dotationsnettesProvisions;

    @Column(name="plusvalues_cession")
    private float plusaluesCession;

    @Column(name="moinsvalues_cession")
    private float moinsvaluesCession;

    @Column(name="variationbesoin_roulement")
    private float variationRoulement;

    @Column(name="cashflow")
    private float cashFlow;



}
