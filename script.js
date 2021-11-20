


const menu = document.querySelector('#menu');

const clickmenu =()=>{
    if(menu.classList.contains('fa-times')){
        menu.classList.remove('fa-times');
        console.log("clicked X");
        console.log(menu.classList.contains('fa-times'));
     document.querySelector('header').classList.remove('toggle');
    }else{
        menu.classList.add('fa-times');
        console.log("clicked menu");
        console.log(menu.classList.contains('fa-times'));
        document.querySelector('header').classList.add('toggle');
    }
}

menu.addEventListener('click',clickmenu);

// :(function(){menu.classList.remove('fa-times');
//    console.log("clicked X");
//    console.log(menu.classList.contains('fa-times'));
// document.querySelector('header').classList.remove('toggle')}) );

// console.log(menu.classList.contains('fa-times'));