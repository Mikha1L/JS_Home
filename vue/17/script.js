//Задание 1
let app = new Vue({
	el: '#app',
	data: {
		ttt: 'youtube.com',
		tex: '',
	},
	methods: {
		doThis: function(value) {
			this.tex = this.ttt;
		}
	}
});

//Задание 3
let app1 = new Vue({
	el: '#app1',
	data: {
		tex1: 'Слон',
	},
	methods: {
		addItem: function() {
				this.tex1 = 'Крокодил в пруду удил';
			}
		}
});

//Задание 4
let app2 = new Vue({
	el: '#app2',
	data: {
		tex2: 'Слон',
	},
	methods: {
		addItem: function() {
				this.tex2 = "<div id='app'><a href='youtube.com' v-on:click.prevent='doThis'>{{ttt}}</a><p>{{ tex }}</p></div>";
			}
		}
});