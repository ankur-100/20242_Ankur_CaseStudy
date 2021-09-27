package com.sonata.Reposit;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sonata.Model.Login;

@Repository
public interface LoginRepository extends JpaRepository<Login, Long>{
	

}
