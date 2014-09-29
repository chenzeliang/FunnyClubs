package com.funny.databean;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class DataPackage<I>  implements Serializable{

	private static final long serialVersionUID = -1541136024148410875L;

	private List<I> data = new ArrayList();

	private int total = 0;

	private Map<String, Object> extra = new HashMap();

	protected boolean success = true;
	protected String errorCode;

	public DataPackage() {
	}

	public DataPackage(List<I> data) {
		this.data = data;
		this.total = (data == null ? 0 : data.size());
	}

	public DataPackage(List<I> data, int total) {
		this.data = data;
		this.total = total;
	}

	public List<I> getData() {
		return this.data;
	}

	public void setData(List<I> data) {
		this.data = data;
	}

	public int getTotal() {
		return this.total;
	}

	public void setTotal(int total) {
		this.total = total;
	}

	public Map<String, Object> getExtra() {
		return this.extra;
	}

	public void setExtra(Map<String, Object> extra) {
		this.extra = extra;
	}

	public boolean isSuccess() {
		return this.success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public String getErrorCode() {
		return this.errorCode;
	}

	public void setErrorCode(String errorCode) {
		this.errorCode = errorCode;
	}
}
