package com.sonata.Controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sonata.Model.Users;
import com.sonata.Reposit.UsersRepository;


@CrossOrigin(origins= "http://localhost:3000/")
@RestController
public class UserController {
	
	Optional<Users> u1;
	
	@Autowired
	private UsersRepository user;
	
	@GetMapping("/users")
	public List<Users> getAllUsers() {
		return user.findAll();
	}
	
	@GetMapping("/users/{id}")
	public ResponseEntity getUsersById(@PathVariable (value="id") Long userid)
	{
		u1 = user.findById(userid);
		return ResponseEntity.ok(u1);
	}
	
	@PostMapping("/users")
	public Users saveUser(@RequestBody Users us)
	{
		return user.save(us);
	}
	
	@PutMapping("/users/{id}")
	public ResponseEntity updateUser(@PathVariable(value="id") Long userid, @Valid @RequestBody Users usr)
	{
		u1 = user.findById(userid);
		Users u2 = u1.get();
		
		u2.setUserId(usr.getUserId());
		u2.setUserName(usr.getUserName());
		u2.setEmail(usr.getEmail());
		u2.setFirstName(usr.getFirstName());
		u2.setLastName(usr.getLastName());
		u2.setContactNo(usr.getContactNo());
		u2.setRole(usr.getRole());
		u2.setCreated_on(usr.getCreated_on());
		
		Users updateUser = user.save(u2);
		return ResponseEntity.ok(updateUser);
	}
	
	@DeleteMapping("/users/{id}")
	public ResponseEntity deleteUser(@PathVariable(value="id")Long userid)
	{
		user.deleteById(userid);
		return ResponseEntity.noContent().build();
		
	}
	

}
