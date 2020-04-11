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