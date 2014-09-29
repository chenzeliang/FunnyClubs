package com.funny.action;

import java.util.List;

import javax.annotation.Resource;

import com.funny.databean.DataPackage;
import com.funny.databean.PageParams;
import com.funny.model.Game;
import com.funny.service.LolService;
import com.opensymphony.xwork2.ActionSupport;

public class LoLAciton extends ActionSupport{

	private static final long serialVersionUID = 2088403634205726121L;
	@Resource(name="lolService")
	LolService lolService;
	
	private int start;
	private int limit;
	private int page;
	private List<Game> gamelist;
	private DataPackage<Game> dataPackage = new DataPackage<Game>();
	
	public String findLolDate(){
		for(int i=0;i<8;i++)
			lolService.getLoLdata("电信四","killke",i);
		return "success";
	}
	
	public String loadPagedGames(){
		System.out.println(page);
		PageParams pageParams = new PageParams();
		pageParams.setLimit(limit);
		pageParams.setStart(start);
		dataPackage.setData(lolService.findGameListByPage(pageParams));
		dataPackage.setTotal(lolService.findGameListByPageCount());
		dataPackage.setSuccess(true);
		return "success";
	}

	public List<Game> getGamelist() {
		return gamelist;
	}
	public void setGamelist(List<Game> gamelist) {
		this.gamelist = gamelist;
	}

	public DataPackage<Game> getDataPackage() {
		return dataPackage;
	}

	public void setDataPackage(DataPackage<Game> dataPackage) {
		this.dataPackage = dataPackage;
	}

	public void setStart(int start) {
		this.start = start;
	}

	public void setLimit(int limit) {
		this.limit = limit;
	}

	public void setPage(int page) {
		this.page = page;
	}
	
}
