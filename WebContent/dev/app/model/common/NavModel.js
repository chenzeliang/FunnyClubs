Ext.define('FunnyClub.model.common.NavModel', {
    extend: 'Ext.data.Model',
    idProperty: 'pageId',
    fields: [
        { name:'imgsrc', type:'string' },
        { name:'description', type:'string' },
        { name:'pageId', type:'string' }
    ]
});