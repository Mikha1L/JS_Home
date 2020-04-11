let app = new Vue({
	el: '#app',
	data: {
		checked: false,
		value1: 'black',
	},
	methods: {
	color: function() {
		this.checked ? this.value1 = 'black' : this.value1 = 'red';
	}
	}
});