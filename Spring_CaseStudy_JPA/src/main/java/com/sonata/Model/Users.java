package com.sonata.Model;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;

import org.hibernate.annotations.CreationTimestamp;
import org.springframework.web.bind.annotation.CrossOrigin;

@Entity
public class Users {
	
	@Id
	Long userid;
	String username;
	String password;
	String email;
	String firstname;
	String lastname;
	long contactno;
	String role;
	int isactive;
	Date dob;
	@CreationTimestamp
	Date created_on;
	
	Users () {};
	Users(Long a, String b,String x, String c, String d, String e, long f, String g,int h, Date i, Date j)
	{
		this.userid=a;
		this.username=b;
		this.password=x;
		this.email=c;
		this.firstname=d;
		this.lastname=e;
		this.contactno=f;
		this.role=g;
		this.isactive=h;
		this.dob=i;
		this.created_on=j;
	}
	
	
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Long getUserId() {
		return userid;
	}
	public void setUserId(Long userId) {
		this.userid = userId;
	}
	public String getUserName() {
		return username;
	}
	public void setUserName(String userName) {
		this.username = userName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getFirstName() {
		return firstname;
	}
	public void setFirstName(String firstName) {
		this.firstname = firstName;
	}
	public String getLastName() {
		return lastname;
	}
	public void setLastName(String lastName) {
		this.lastname = lastName;
	}
	public long getContactNo() {
		return contactno;
	}
	public void setContactNo(long contactNo) {
		this.contactno = contactNo;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public int getIsActive() {
		return isactive;
	}
	public void setIsActive(int isActive) {
		this.isactive = isActive;
	}
	public Date getDob() {
		return dob;
	}
	public void setDob(Date dob) {
		this.dob = dob;
	}
	public Date getCreated_on() {
		return created_on;
	}
	public void setCreated_on(Date created_on) {
		this.created_on = created_on;
	}
	@Override
	public String toString() {
		return "Users [userId=" + userid + ", userName=" + username + ", email=" + email + ", firstName=" + firstname
				+ ", lastName=" + lastname + ", contactNo=" + contactno + ", role=" + role + ", isActive=" + isactive
				+ ", dob=" + dob + ", created_on=" + created_on + "]";
	}
	
	
	

}
