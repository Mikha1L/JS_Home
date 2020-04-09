let tex = document.querySelector('textarea');

tex.addEventListener("keyup", function(event){
   localStorage.setItem('value', tex.value);
});

tex.value = localStorage.getItem('value');