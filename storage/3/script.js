let List = document.forms["form"];

save();
load();
function save() {
    for (let i = 0; i < List.length; i++) {
        let key = List[i].getAttribute('id');

        List[i].addEventListener('change', function() {
            if (List[i].getAttribute('type') == 'checkbox') {
                let val = List[i].checked;
                let key = List[i].id;
                localStorage.setItem(key, val);
            } 
			else {
                let val = List[i].value;
                localStorage.setItem(key, val);
            }
        });
    }
}

function load() {
    for (let elem of List) {
        let key = elem.getAttribute('id');
        elem.value = localStorage.getItem(key);
		console.log(localStorage.getItem(key), elem.getAttribute('id'));

        if (elem.getAttribute('type') == 'checkbox') {
            if (elem.value == 'false' || elem.value == '') {
                elem.checked = false;
            } 
			else {
                elem.checked = true;
            }
        }
    }
}
