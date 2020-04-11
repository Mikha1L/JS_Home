let d = new Date();
let app = new Vue({
	el: '#app',
	data: {
		str: `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`,
	},
	filters: {
		format: function(value) {
			return (value.split('-').reverse().join('.'));
		}
	}
});