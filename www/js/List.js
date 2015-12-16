(function(window){
	
	var List = (function(){
		function List(params){
			this.items = [];
		}
		List.prototype = {
			
			add: function(item){
				this.items.push(item);
			},
			
			remove: function(item){
				var indexOf = this.items.indexOf(item);
				if(indexOf !== -1){
					this.items.splice(indexOf, 1);
				}
			},
			
			find: function(item){
				
				
			}
		};
		return List;
	}());
	
	List.create = function(params){
		return new List(params);
	};
	
	window.List = List;
	
}(window));