package com.funny.dao;

import java.util.List;

import com.funny.databean.PageParams;
import com.funny.model.Game;
import com.funny.model.GameDetail;

public interface GameDao {
	public void saveGame(Game game);
	public void saveGameDetail(GameDetail gameDetail);
	public List<Game> getGameList(PageParams pageParams);
	public int getGameListCount();
}
