Ext.define('FunnyClub.model.common.NavModel', {
    extend: 'Ext.data.Model',
    idProperty: 'reportId',
    fields: [
        { name:'imgsrc', type:'string' },
        { name:'description', type:'string' },
        { name:'reportId', type:'string' }
    ]
});