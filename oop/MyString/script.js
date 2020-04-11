class MyString {
	reverse(value){
		return (value.split('').reverse().join(''));
	}
	ucFirst(value){
		return (value.slice(0,1).toUpperCase() + value.slice(1));
	}
	ucWords(value){
		let words = value.split(' ');
		for (let i = 0; i < words.length; i++){
		words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
		}
		let result = words.join(' ');
		return result;
	}
}

let str = new MyString();
console.log(str.reverse('слон'));
console.log(str.ucFirst('слоняра'));
console.log(str.ucWords('здесь обитают слоны'));