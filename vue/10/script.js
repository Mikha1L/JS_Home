//Задание 2
let app = new Vue({
	el: '#app',
	data: {
		newItem: '',
		items: [],
	},
	methods: {
		addItem: function() {
			let words = this.newItem.split(' ');
			for (let i of words){
			this.items.push(i);
			}
		}
	}
});

//Задание 7
let app1 = new Vue({
	el: '#app1',
	data: {
		lang: [],
	},
});

//Задание 8
let app2 = new Vue({
	el: '#app2',
	data: {
		type: '',
	},
});

//Задание 11
let app3 = new Vue({
	el: '#app3',
	data: {
		selected: '',
		options: ['один', 'два', 'три', 'слон', 'крокодил', 'четыре'], // массив
	},
});