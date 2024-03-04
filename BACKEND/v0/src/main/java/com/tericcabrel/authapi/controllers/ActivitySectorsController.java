package com.tericcabrel.authapi.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tericcabrel.authapi.repositories.ActivitySectorRepository;

@RequestMapping("/public/v1/activities-sectors")
@RestController
@CrossOrigin( value="*" )
public class ActivitySectorsController {

	@Autowired
	private ActivitySectorRepository repo;
	
	
	
	
	@GetMapping("/list")
	public ResponseEntity<?> getAll(){
		
		return ResponseEntity.ok( this.repo.findAll()  ); // 200
		
	}
}
