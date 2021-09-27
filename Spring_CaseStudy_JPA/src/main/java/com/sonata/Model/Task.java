package com.sonata.Model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.CreationTimestamp;
import org.springframework.web.bind.annotation.CrossOrigin;

@Entity
public class Task {
	
	@Id
	Long taskid;
	int ownerid;
	String name;
	String description;
	String status;
	String priority;
	String notes;
	int isbookmarked;
	@CreationTimestamp
	Date createdon;
	@CreationTimestamp
	Date statuschangedon;
	
	Task () {};
	
	Task(Long a, int b, String c, String d, String e, String f, String g,int h, Date i, Date j)
	{
		this.taskid=a;
		this.ownerid=b;
		this.name=c;
		this.description=d;
		this.status=e;
		this.priority=f;
		this.notes=g;
		this.isbookmarked=h;
		this.createdon=i;
		this.statuschangedon=j;
	}

	public Long getTaskid() {
		return taskid;
	}

	public void setTaskid(Long taskid) {
		this.taskid = taskid;
	}

	public int getOwnerid() {
		return ownerid;
	}

	public void setOwnerid(int ownerid) {
		this.ownerid = ownerid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getPriority() {
		return priority;
	}

	public void setPriority(String priority) {
		this.priority = priority;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

	public int getIsbookmarked() {
		return isbookmarked;
	}

	public void setIsbookmarked(int isbookmarked) {
		this.isbookmarked = isbookmarked;
	}

	public Date getCreatedon() {
		return createdon;
	}

	public void setCreatedon(Date createdon) {
		this.createdon = createdon;
	}

	public Date getStatuschangedon() {
		return statuschangedon;
	}

	public void setStatuschangedon(Date statuschangedon) {
		this.statuschangedon = statuschangedon;
	}

	@Override
	public String toString() {
		return "Task [taskid=" + taskid + ", ownerid=" + ownerid + ", name=" + name + ", description=" + description
				+ ", status=" + status + ", priority=" + priority + ", notes=" + notes + ", isbookmarked="
				+ isbookmarked + ", createdon=" + createdon + ", statuschangedon=" + statuschangedon + "]";
	}
	
	
}
