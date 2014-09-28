package com.funny.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.funny.dao.UserDao;
import com.funny.model.User;

/*
 * Service层，在此可以进行事物管理
 */
@Component("userService")

public class UserService {
	@Resource(name="userDao")
	private UserDao userDao;
	@Transactional
	public boolean insertUser(User user){
		userDao.insertUser(user);
		return true;
	}
	@Transactional
	public boolean deleteById(long id){
		userDao.deleteById(id);
		return true;
	}
	@Transactional
	public boolean  updateUser(User user){
		userDao.Update(user);
		return true;
	}
	@Transactional
	public List<User> findAll(){
		return userDao.findAll();
	}
	@Transactional
	public List<User> findByName(String name){
		return userDao.findByName(name);
	}
	@Transactional
	public User findById(long id){
		return userDao.findById(id);
	}
	
	@Transactional
	public User findByUser(User user){
		List<User> list = userDao.findUser(user);
		if(list.size()>0){
			return list.get(0);
		}
		return null;
	}
}
