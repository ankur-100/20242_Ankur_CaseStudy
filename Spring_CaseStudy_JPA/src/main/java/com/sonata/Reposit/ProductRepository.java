package com.sonata.Reposit;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.sonata.Model.Products;

@Repository
public interface ProductRepository extends JpaRepository<Products, Long>{
	
}
