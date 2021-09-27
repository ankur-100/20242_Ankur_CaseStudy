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

import com.sonata.Model.Products;
import com.sonata.Reposit.ProductRepository;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
public class ProductController {

	Optional <Products> p1;
	
	@Autowired
	private ProductRepository prd;
	
	@GetMapping("/products")
	public List<Products> getProductDetails()
	{
		return prd.findAll();
	}
	
	@GetMapping("/products/{id}")
	public ResponseEntity getProduct(@PathVariable (value="id") Long pid)
	{
		p1= prd.findById(pid);
		return ResponseEntity.ok(p1);
	}
	
	@PostMapping("/products")
	public Products saveProducts(@RequestBody Products pd)
	{
		return prd.save(pd);
	}
	
	@PutMapping("/products/{id}")
	public ResponseEntity updateProducts(@PathVariable (value="id") Long pid, @Valid @RequestBody Products pd)
	{
		p1 = prd.findById(pid);
		Products p2 = p1.get();
		
		p2.setPid(pd.getPid());
		p2.setPname(pd.getPname());
		p2.setPprice(pd.getPprice());
		
		Products updateProduct = prd.save(p2);
		return ResponseEntity.ok(updateProduct);
	}
	
	@DeleteMapping("/products/{id}")
	public ResponseEntity deleteProduct(@PathVariable (value="id") Long pid)
	{
		prd.deleteById(pid);
		return ResponseEntity.noContent().build();
	}

}
