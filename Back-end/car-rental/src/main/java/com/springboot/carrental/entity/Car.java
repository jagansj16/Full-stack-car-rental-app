package com.springboot.carrental.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name="car")
public class Car
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column(name="brand")
    private String brand;

    @Column(name="model")
    private String model;

    @Column(name="transmission")
    private String transmission;

    @Column(name="year")
    private int year;

    @Column(name="price")
    private int price;

    @Column(name="fuel_type")
    private String fuelType;

    @Column(name="category")
    private String category;

    @Column(name="img")
    private String img;
}
