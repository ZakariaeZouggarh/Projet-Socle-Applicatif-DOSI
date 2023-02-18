package com.example.demo.entities;

import jakarta.persistence.*;

import java.io.Serializable;

@Entity
@Table(name = "USERS")
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Integer id;

    @Column(name = "NOM")
    private  String nom;

    @Column(name = "PRENOM")
    private  String prenom;

    @Column(name = "EMAIL")
    private String email;

    @Column(name = "VILLE")
    private String ville;

    @Column(name = "AGE")
    private Integer age;

    public User() {
    }

    public User(String nom, String prenom, String email, String ville, Integer age) {
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.ville = ville;
        this.age = age;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getVille() {
        return ville;
    }

    public void setVille(String ville) {
        this.ville = ville;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }
}
