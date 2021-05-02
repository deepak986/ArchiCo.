$("#toggle").click(function() {

    $(this).toggleClass('on');
    $("#resize").toggleClass("active");

    });


    var image = document.getElementsByClassName('ione');
new simpleParallax(image, {
      scale: 1.1
});

const buttons = document.querySelectorAll('button');


buttons.forEach( button =>{
    button.addEventListener('click',()=>{
        const para = button.nextElementSibling;
        const icon = button.children[1];

        para.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
} )
