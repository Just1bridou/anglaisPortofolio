/*var backGroundImage = document.querySelector('.am-img-2')

var imgPosY = 0;
setInterval(function() {
    backGroundImage.style.backgroundPosition = 'center '+imgPosY+'px';
    imgPosY+=50;
},1000)
*/

var buttons = document.querySelectorAll('.flex-menu div');

for(let a of buttons)
{
    a.addEventListener('click', function() {
            window.location.href = a.getAttribute('tp');
    })
}

var elementsToAnimate = document.querySelectorAll('.animateSlide');

scrollUpdate();


// ANCHOR ANIMATION SHOW ELEMENTS

    window.addEventListener('scroll', function() {

        scrollUpdate();
    })

    function scrollUpdate() {
        for(let element of elementsToAnimate)
        {
            if(element.getBoundingClientRect().top - window.scrollY/2 < 400)
            showSlideEl(element);
        }   
    }

    function showSlideEl(el) {

        let d = el.getAttribute('data-trans')
        
        if(d == undefined)
            d=0

        el.style.opacity = "1";
        el.style.transform = "translateX("+d+"%)";
    }

// ANCHOR ANIMATION MENU BAR

    var pointsProgress = document.querySelectorAll('.pointBar');
    var caseProgress = document.querySelector('.menu-progress').offsetWidth/6;

    var tabPoints = [];

    for(let point of pointsProgress) {
        tabPoints.push(point)
    }

    window.addEventListener('scroll', function() {

        if(window.scrollY/2 < window.innerHeight)
            changeBarProgress(0,1)

        for(let point in tabPoints) {
            if(tabPoints[point].getBoundingClientRect().top - window.innerHeight/2 < 0) {
                changeBarProgress(caseProgress,(parseInt(point, 10)+1))
            }
        }   
    })

    function changeBarProgress(size,nb) {
        document.querySelector('.bar-progress').style.width = nb*size+"px";
    }