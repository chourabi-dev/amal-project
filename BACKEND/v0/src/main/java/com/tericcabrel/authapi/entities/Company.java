package com.tericcabrel.authapi.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Table(name = "companies")
@Entity
public class Company {

	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private long id;

    @Column(nullable = false)
    private String name;
    
    
   
    @Column(nullable = true)
    private String address;
    @Column(nullable = true)
    private String phone;
    @Column(nullable = true)
    private String email;
    @Column(nullable = true)
    private String fax;
    
    
    @ManyToOne
    private ActivitySector activitySector;
     
    @ManyToOne
    @JsonIgnore
    private User client;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getFax() {
		return fax;
	}

	public void setFax(String fax) {
		this.fax = fax;
	}

	public ActivitySector getActivitySector() {
		return activitySector;
	}

	public void setActivitySector(ActivitySector activitySector) {
		this.activitySector = activitySector;
	}

	public User getClient() {
		return client;
	}

	public void setClient(User client) {
		this.client = client;
	}

	public Company() {
		super();
	}

    
    
    
    
    
}
