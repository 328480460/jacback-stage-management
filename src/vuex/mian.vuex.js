import Vue from 'vue'
import Vuex from 'vuex'

 Vue.use(Vuex)

var store = new Vuex.Store({
 	state:{
 		tabList:[{id:1,name:'后台首页','isOpen':false,url:'http://www.baidu.com'}],
 		currentId:0,
 	},
 	mutations:{
 		addTab(state,obj) {
 			console.log(obj);
 			if(obj.isOpen){
 				state.currentId = obj.id;
		       	return
		    }
 			state.tabList.push(obj);
		    obj.isOpen = !obj.isOpen;
		    state.currentId = obj.id;

 		},
 		delTab(state,index){
 			var _obj = state.tabList[index+1];

 			if(_obj) {
 				state.currentId = _obj.id;
 			}else {
 				state.currentId = 0;
 			}
 			state.tabList[index].isOpen = !state.tabList[index].isOpen;
 			state.tabList.splice(index,1);
 		},
 		turn(state,obj) {
 			state.currentId = obj.id;
 		}
 	}
 })

export default store