let d = new Date();
let app = new Vue({
	el: '#app',
	data: {
		day: d.getDay(), 
	},
});


let app1 = new Vue({
	el: '#app1',
	data: {
		age: 19, 
	},
});

let app2 = new Vue({
	el: '#app2',
	data: {
		sh: true, 
	},
	methods:{
		show: function(){
			this.sh = this.sh ? false : true;
		}
	}
});

