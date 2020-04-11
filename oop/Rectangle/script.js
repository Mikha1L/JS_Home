class Rectangle{
	constructor(width, height){
		this.elem = document.createElement('div');
		this.setWidth(width);
		this.setHeight(height);
		this.elem.style.border = '2px solid red';
		document.body.appendChild(this.elem);
	}
	
	setWidth(width){
		this.elem.style.width = width + 'px';
	}
	setHeight(height){
		this.elem.style.height = height + 'px';
	}
	
	getWidth(){
		return parseInt(this.elem.style.width);
	}
	getHeight(){
		return parseInt(this.elem.style.height);
	}
}

let elem = new Rectangle(500, 300);
console.log('Ширина '+elem.getWidth());
console.log('Высота '+elem.getHeight());
let elem1 = new Rectangle(690, 300);