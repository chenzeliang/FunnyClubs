Ext.define('FunnyClub.model.common.FuncDataModel', {
    extend: 'Ext.data.Model',
    idProperty: 'functionCode',
    fields: [
	    { name:'src', type:'string' },
        { name:'caption', type:'string' },
        { name:'functionCode', type:'string'},
        { name:'description', type:'string'}
	]
});