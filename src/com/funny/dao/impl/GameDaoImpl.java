package com.funny.dao.impl;

import java.util.List;

import javax.annotation.Resource;

import org.hibernate.Query;
import org.springframework.orm.hibernate3.HibernateTemplate;
import org.springframework.stereotype.Component;

import com.funny.dao.GameDao;
import com.funny.databean.PageParams;
import com.funny.model.Game;
import com.funny.model.GameDetail;
@Component("gameDao")
public class GameDaoImpl implements GameDao{
	@Resource(name="hibernateTemplate")
	private HibernateTemplate template;
	
	@Override
	public void saveGame(Game game) {
		template.save("Game", game);
	}

	@Override
	public void saveGameDetail(GameDetail gameDetail) {
		template.save(gameDetail);
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Game> getGameList(PageParams pageParams) {
		Query q = template.getSessionFactory().getCurrentSession().createQuery("from Game order by game_date desc");
		q.setFirstResult(pageParams.getStart());
		q.setMaxResults(pageParams.getLimit());
		return q.list();
//		return template.find("from Game order by game_date desc LIMIT 0,10");
	}

	@Override
	public int getGameListCount() {
		Query q = template.getSessionFactory().getCurrentSession().createQuery("select count(*) from Game ");
		return ((Number)q.uniqueResult()).intValue();
	}

}
