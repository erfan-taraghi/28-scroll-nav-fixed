const header = document.querySelector('.header');
let sticky = header.offsetTop;

window.addEventListener('scroll', function() {
    if(window.pageYOffset > sticky){
       header.classList.add('sticky')
    }else{
        header.classList.remove('sticky')
    }
})
