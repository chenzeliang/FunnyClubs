Ext.define('FunnyClub.view.common.NavViewController', {
      extend: 'Ext.app.ViewController',
      alias: 'controller.nav',

   	onSelect: function(self, record){
   		var pageId = record.get('pageId');
   		if (!pageId) {
   			console.log('no pageId');
   			return false;
   		};
   		var view = this.getView();
   		view.fireEvent('changepage', view, pageId);

   	}

});