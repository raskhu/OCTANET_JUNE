let menu = document.querySelector('#menu-btn');
let navbar = document.queryselector('.navbar');

menu.oneclick = () =>{
    menu.classlist.toggle('fa-times');
    navbar.classlist.toggle('active');
}

window.onscroll = () =>{
    menu.classlist.remove('fa-times');
    navbar.classlist.remove('active');
}