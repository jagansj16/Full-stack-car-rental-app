package com.springboot.carrental.dao;

import com.springboot.carrental.entity.Car;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestParam;

public interface CarRepository extends JpaRepository<Car,Long> {



    Page<Car> findByBrandContaining(@RequestParam("brand") String brand, Pageable pageable);
    Page<Car> findByCategory(@RequestParam("category") String category,Pageable pageable);
    Page<Car> findByModel(@RequestParam("model") String model,Pageable pageable);

}
