let tex = document.querySelector('textarea');
let i = localStorage.length;

function save(){
	localStorage.setItem(i++, tex.value);
}

if (localStorage.length > 0) {
let parent = document.querySelector('div')

let prev = document.createElement('button')
    prev.id = 'prev'
    prev.innerText = 'Prev'
	prev.addEventListener('click', function(){
		i--
			if (i < 0) {
			i = localStorage.length
			}
    tex.value = localStorage.getItem(i);
	});
	parent.appendChild(prev);
	

let next = document.createElement('button')
    next.id = 'next'
    next.innerText = 'Next'
	next.addEventListener('click', function(){
		i++
			if (i > localStorage.length) {
			i = 0;
			}
    tex.value = localStorage.getItem(i);
	});
	parent.appendChild(next);
	
   
}