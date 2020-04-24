let app = new Vue({
	el: '#app',
	data: {
		text: '',
		res: '',
	},
	methods: {
		sub: function() {
			this.res = this.text;
			this.text = '';
		}
	}
});

let app1 = new Vue({
	el: '#app1',
	data: {
		res: '',
	},
	methods: {
		left: function() {
			this.res = 'left';
		},
		middle: function() {
			this.res = 'middle';
		},
		right: function() {
			this.res = 'right';
		}
	}
});