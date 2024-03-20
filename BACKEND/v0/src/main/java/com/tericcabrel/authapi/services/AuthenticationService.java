package com.tericcabrel.authapi.services;

import com.tericcabrel.authapi.dtos.LoginUserDto;
import com.tericcabrel.authapi.dtos.RegisterUserDto;
import com.tericcabrel.authapi.entities.Company;
import com.tericcabrel.authapi.entities.User;
import com.tericcabrel.authapi.repositories.ActivitySectorRepository;
import com.tericcabrel.authapi.repositories.CompanyRepository;
import com.tericcabrel.authapi.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AuthenticationService {
	
	
	@Autowired
	private CompanyRepository companyRepo;
	
	@Autowired
	private ActivitySectorRepository activityRepo;
	
	
	
	
	
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

    public AuthenticationService(
        UserRepository userRepository,
        AuthenticationManager authenticationManager,
        PasswordEncoder passwordEncoder
    ) {
        this.authenticationManager = authenticationManager;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public User signup(RegisterUserDto input) {
        var user = new User()
            .setFullName(input.getFullName())
            .setEmail(input.getEmail())
            
            .setPassword(passwordEncoder.encode(input.getPassword()));

        user.setRole("ROLE_CLIENT");
        
        // created company 
        Company company = new Company();
        company.setName( input.getCompany() );
        company.setActivitySector( this.activityRepo.findById( input.getActivity()).get() );
        company.setClient(user);
        company.setAddress(null);
        company.setEmail(null);
        company.setFax(null);
        company.setPhone(null);
        
        this.userRepository.save(user);  
        
        this.companyRepo.save(company);
        
        
        
        return user;
    }

    public User authenticate(LoginUserDto input) {
        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                input.getEmail(),
                input.getPassword()
            )
        );

        return userRepository.findByEmail(input.getEmail()).orElseThrow();
    }

    public List<User> allUsers() {
        List<User> users = new ArrayList<>();

        userRepository.findAll().forEach(users::add);

        return users;
    }
}
