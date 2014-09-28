Ext.define('FunnyClub.store.common.FuncDataStore', {
    storeId:'nav-dataview-store',
    extend: 'Ext.data.Store',
    model: 'FunnyClub.model.common.FuncDataModel',
    data: [
	    { src: './resources/images/icon/logout.png', description:"", caption:'Logout', functionCode:'logout'}
	]
});