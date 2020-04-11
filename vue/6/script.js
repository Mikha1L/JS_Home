let app = new Vue({
	el: '#app',
	data: {
		items: [-2, 5, 33, 1, -5, -1, 13, 1, 3, 4, -1, 20, 12],
	},
methods: {
		removeItem: function(index) {
			let res = this.items.splice(index, 1);
			res = Math.pow(res, 2);
			this.items.splice(index, 0, res);
		}
	}
});