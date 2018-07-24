var ch1 = document.getElementById('ch-1');



function go() {
//console.log(ch1.classList);
    setTimeout(function(){
        ch1.classList.remove('state-1');
        ch1.classList.add('state-2');
    }, 5000);
}

go();