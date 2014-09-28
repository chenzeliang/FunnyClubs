package com.funny.action;

import java.util.List;

import javax.annotation.Resource;



import com.funny.model.User;
import com.funny.service.UserService;
import com.opensymphony.xwork2.ActionSupport;

public class UserAction  extends ActionSupport{

	private static final long serialVersionUID = 7911253263522671542L;
	@Resource(name="userService")
	UserService service;
	
	private User user;
	private List<User> list;
	
	public String login(){
		User loginUser = service.findByUser(user);
		if(null!=loginUser){
			return "success";
		}
		return "error";
	}
	public String findUserList(){
		list = service.findAll();
		return "success";
	}
	
	public String  findByName(){
		list =service.findByName(user.getName());
		return "success";
	}
	
	public String loginPage(){
		return "success";
	}
	
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public List<User> getList() {
		return list;
	}
	public void setList(List<User> list) {
		this.list = list;
	}
	
}
