let app = new Vue({
	el: '#app',
	data: {
		items: [-2, 5, 33, 1, -5, -1, 13, 1, 3, 4, -1, 20, 12],
	},
	methods: {
		Fil: function() {
			this.items = this.items.filter(function(elem) {
			if (elem <= 10 && elem >= 0) {
				return true;
			} else {
				return false;
			}
		});
		}
	}
});