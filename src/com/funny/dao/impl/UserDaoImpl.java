package com.funny.dao.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.orm.hibernate3.HibernateTemplate;
import org.springframework.stereotype.Component;

import com.funny.dao.UserDao;
import com.funny.model.User;
@Component("userDao")
public class UserDaoImpl implements UserDao{

	@Resource(name="hibernateTemplate")
	private HibernateTemplate template;
	
	@Override
	public void insertUser(User user){
		 long x=(Long) template.save(user);
		 System.out.println(x);
	}
 
	@Override
	public void deleteById(long id){
		User user=(User) template.get(User.class, id);
		template.delete(user);
	}
	
	@Override
	public List<User> findAll(){
		@SuppressWarnings("unchecked")
		List<User> list=template.find ( "from User" );
		return list;
	}
	
	@Override
	public void Update(User user){
		template.update(user);
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<User> findByName(String name) {
		List<User> list=template.find("from User u where u.name=?", name);  
		return list;
	}

	@Override
	public User findById(long id) {
		return template.get(User.class, id);
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<User> findUser(User user) {
		List<User> list = template.find("from User u where u.name = ? and u.password = ? ", user.getName(),user.getPassword());
		return list;
	}

}
