export default {
	addTab(state,obj) {
		if(obj.isClick){
			state.currentId = obj.id;
       		return
    	}
		state.tabList.push(obj);
	    obj.isClick = !obj.isClick;
	    state.currentId = obj.id;
	},
	delTab(state,index){
		var _obj = state.tabList[index+1];
		if(_obj) {
			state.currentId = _obj.id;
		}else {
			state.currentId = 0;
		}
		state.tabList[index].isClick = !state.tabList[index].isClick;
		state.tabList.splice(index,1);
	},
	turn(state,obj) {
		state.currentId = obj.id;
	}
}