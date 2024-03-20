package com.tericcabrel.authapi.controllers;

import org.springframework.beans.factory.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tericcabrel.authapi.entities.User;
import com.tericcabrel.authapi.repositories.CompanyRepository;

@RequestMapping("/api/company")
@RestController
@CrossOrigin( value="*" )
public class CompanyController {

	@Autowired
	private CompanyRepository repo;
	
	
	
	@GetMapping("/list")
	public ResponseEntity<?> list(){
	  Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        User client = (User) authentication.getPrincipal();
		
        return ResponseEntity.ok( this.repo.findByClient(client) );
		
	}
	
	
	// GetMapping("/info/{id}")
	// 
	
	
	// delete companby id .delete(company)
	
}

