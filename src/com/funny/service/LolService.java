package com.funny.service;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpStatus;
import org.apache.commons.httpclient.methods.GetMethod;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.funny.dao.GameDao;
import com.funny.databean.PageParams;
import com.funny.model.Game;
import com.funny.model.GameDetail;
/*
 * Service层，在此可以进行事物管理
 */
@Component("lolService")
public class LolService {
	
	@Resource(name="gameDao")
	private GameDao gameDao;
	
	@Transactional
	public List<Game> findGameListByPage(PageParams pageParams){
		return gameDao.getGameList(pageParams);
	}
	
	@Transactional
	public int findGameListByPageCount(){
		return gameDao.getGameListCount();
	}
	
	
	@Transactional
	public void getLoLdata(String serverName,String name,int page){
		Document doc;
			try {
				doc = Jsoup.connect("http://lolbox.duowan.com/matchList.php")
				.data("query", "Java").data("serverName",serverName).data("playerName",name).data("page",String.valueOf(page))
				.userAgent("Mozilla")
				.cookie("auth", "token")
				.timeout(6000)
				.get();
				String content = doc.html();
//				System.out.println(content);
				content = content.substring(content.indexOf("<ul>") + 4,
						content.indexOf("</ul>"));
				doc = Jsoup.parse(content);
//				System.out.print(doc.html());
				
				Elements linkname = doc.select("img[alt]");
				Elements linkGameId = doc.select("li[onclick]");
				
				Elements linkwin = doc.select("em");
				Elements linktype = doc.select("span");
				Elements links = doc.select("p");
				for(int i = 0;i<linkname.size();i++){
					Game game = new Game();
					
					String  t= links.get(i*2+1).ownText();
					String idFunction = linkGameId.get(i).attr("onclick");
					String gameId = idFunction.substring(idFunction.indexOf("loadMatchDetail(")+"loadMatchDetail(".length(), idFunction.indexOf(","));
					
		               HttpClient httpClient = new HttpClient();
		              GetMethod method = new GetMethod("http://api.lolbox.duowan.com/lol/match/detail?matchId=" +gameId);
		                int statusCode = httpClient.executeMethod(method);
		                if (statusCode == HttpStatus.SC_OK) {
		                     content = method.getResponseBodyAsString();
		                     try {
								JSONObject obj = new JSONObject(content);
								JSONArray playerList = obj.getJSONObject("matchDetail").getJSONArray("player");
								for(int x= 0 ;x<playerList.length();x++){
									JSONObject o = playerList.getJSONObject(x);
									GameDetail gd= new GameDetail();
									gd.setAssist(Integer.parseInt(o.getString("ASSISTS")));
									gd.setGameId(gameId);
									gd.setDeath(Integer.parseInt(o.getString("NUM_DEATHS")));
									gd.setKill(Integer.parseInt(o.getString("CHAMPIONS_KILLED")));
									gd.setMoney(Double.valueOf(o.getString("GOLD_EARNED")));
									gd.setName(o.getString("skinNameCN"));
									gameDao.saveGameDetail(gd);
								}
							} catch (JSONException e) {
								// TODO Auto-generated catch block
								e.printStackTrace();
							}
		                     
		               }
					
					SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
					try {
						game.setGameDate(sdf.parse("2014-"+t));
					} catch (ParseException e) {
						e.printStackTrace();
					}
					game.setGameId(gameId);
					game.setImgSrc(linkname.get(i).attr("src"));
					game.setName(linkname.get(i).attr("title"));
					game.setSuccess(linkwin.get(i).text());
					game.setModel(linktype.get(i).text());
					game.setUserId(name);
					gameDao.saveGame(game);
				}
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	}
}
