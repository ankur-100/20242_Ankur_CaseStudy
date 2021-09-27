package com.sonata.Model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Login {
	
	@Id
	Long userid;
	String password;
	
	Login() {};
	Login (Long a, String b)
	{
		this.userid=a;
		this.password=b;
	}
	public Long getUserid() {
		return userid;
	}
	public void setUserid(Long userid) {
		this.userid = userid;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "Login [userid=" + userid + ", password=" + password + "]";
	}
	
	

}
