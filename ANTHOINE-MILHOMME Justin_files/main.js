
document.addEventListener('DOMContentLoaded', function() {
	init();
});

function init() {

	initBackground();
	loadHobbies();
	loader();
	initSkill();
	skillsBar();
	moreDetailSkill();
	skillChangeClickName();
	changeProjectImage();

	window.onresize = function() {
		initBackground();
		canvas.setAttribute("width", 0.3*window.innerWidth+"px");
		canvas.setAttribute("height", 0.3*window.innerHeight+"px");
	};
}

// LOAD HOBBIES
function loadHobbies() {

	var images = ["IMG/bike.jpg","IMG/mb.jpg","IMG/car.jpg","IMG/music.jpg","IMG/pc.jpg"];
	var imgClass = document.querySelectorAll('.img-hob')
	var imagesCount = 0;
	for(let i of imgClass)
	{
		i.style.backgroundImage = "url('"+images[imagesCount]+"')";
		imagesCount++;

		let text = i.querySelector('p');

		i.addEventListener('mouseover', function() {
			text.classList.add('text-hobbie-visible');
		})

		i.addEventListener('mouseleave', function() {
			text.classList.remove('text-hobbie-visible');
		})
	}
	
}


// POLYGON BACKGROUND
function initBackground() {

	console.log("init bg")

	window.screenY=0;

	var pol = document.querySelector(".p-home");

	var home = document.querySelector(".home");
	var homeY = home.offsetHeight;
	var homeX = home.offsetWidth;

	for(let pol of document.querySelectorAll(".pol"))
	{
		// console.log(pol.points)
		pol.points[1].x="0"
		pol.points[1].y=(homeY-homeY/8)

		pol.points[2].x=(homeX/4)
		pol.points[2].y=(homeY-homeY/3)

		pol.points[3].x=(homeX/1.5)
		pol.points[3].y=(homeY-homeY/1.7)

		pol.points[4].x=(homeX)
		pol.points[4].y="0"
	}

	for(let pol of document.querySelectorAll(".pol-i"))
	{
		pol.points[0].x=(homeX/4)
		pol.points[1].y=(homeY-homeY/1.7)
		
		pol.points[1].x=(homeX/1.5)
		pol.points[0].y=(homeY-homeY/3)

		pol.points[2].x=(homeX)
		pol.points[2].y=(homeY)

		pol.points[3].x="0"
		pol.points[3].y=(homeY)

	}

	for(let v of document.querySelectorAll('.form-line-view'))
	{	
		v.setAttribute("viewBox", "0 0 "+window.innerWidth+" 300");
	}

	for(let line of document.querySelectorAll('.line-form'))
	{
		line.setAttribute("x1",window.innerWidth/2)
		line.setAttribute("y1",0)

		line.setAttribute("x2",window.innerWidth/2)
		line.setAttribute("y2",300)

	}

}

// FORMATION PANNEL
function moveFormation(e){

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {

		e.parentNode.style.borderRadius = "0px";
		e.parentNode.nextElementSibling.style.transform = "translateY(0%)";
		e.parentNode.nextElementSibling.style.position = "relative";
		e.parentNode.nextElementSibling.style.borderRadius = "0px";

		e.style.backgroundColor = "rgb(235, 75, 80)";

		e.innerHTML = "Close informations";
		e.setAttribute('onclick','closeFormation(this)');

	} else {
		e.parentNode.style.transform = "translate(-50%,0%)";
		e.parentNode.style.borderRadius = "0px";
		e.parentNode.nextElementSibling.style.transform = "translate(0%,-100%)";
		e.parentNode.nextElementSibling.style.borderRadius = "0px";

		e.style.backgroundColor = "rgb(235, 75, 80)";

		e.innerHTML = "Close informations";
		e.setAttribute('onclick','closeFormation(this)');
	}
}

function closeFormation(e){

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {

		e.parentNode.style.borderRadius = "20px";
		e.parentNode.nextElementSibling.style.transform = "translateY(-100%)";

		setTimeout(function() {
			e.parentNode.nextElementSibling.style.position = "absolute";
		},500)

		e.parentNode.nextElementSibling.style.borderRadius = "20px";

		e.style.backgroundColor = "rgb(66, 124, 241)";

		e.innerHTML = "More informations";
		e.setAttribute('onclick','moveFormation(this)');

	} else {
		e.parentNode.style.transform = "translate(0%,0%)";
		e.parentNode.style.borderRadius = "20px";
		e.parentNode.nextElementSibling.style.transform = "translate(-50%,-100%)";
		e.parentNode.nextElementSibling.style.borderRadius = "20px";

		e.style.backgroundColor = "rgb(66, 124, 241)";

		e.innerHTML = "More informations";
		e.setAttribute('onclick','moveFormation(this)');
	}
}

// LOADER 

function loader() {
	let state =  setInterval( function() {
		if(document.readyState === 'complete') {
			clearInterval(state);
			document.querySelector('.loader').style.opacity = "0";

			setTimeout(() => {
				document.querySelector('.loader').remove();
			},200)
		}
	},100)
}

// SKILLS SELECTOR

var allSkillsTab = [];
var allSkills = document.querySelectorAll('.skill-part');

for(let skill of allSkills)
	allSkillsTab.push(skill)

var choice = 1;

function initSkill() {

	actualisationSkill(choice);

	document.querySelector('.skills-menu-before').addEventListener('click', function() {

		if(allSkillsTab[choice-1]!=undefined)
		{
			allSkillsTab[choice].classList.toggle('skills-selected');
			allSkillsTab[choice-1].classList.toggle('skills-selected');
			choice--;
			actualisationSkill(choice);
		}
	})
	
	document.querySelector('.skills-menu-after').addEventListener('click', function() {

		if(allSkillsTab[choice+1]!=undefined)
		{
			allSkillsTab[choice].classList.toggle('skills-selected');
			allSkillsTab[choice+1].classList.toggle('skills-selected');
			choice++;
			actualisationSkill(choice);
		}
	})
}

function actualisationSkill(c) {

	for(let section of document.querySelectorAll('.skill-presentation')) {
		if(section.getAttribute('data-skill-num')==c)
		{
			section.style.opacity = "1";
			section.style.transition = " 0.5s all ease-in-out";
			section.classList.add('visible-skill');
		}
		else
		{
			if(section.classList.contains('visible-skill'))
			{
				section.classList.add('leave-skill')
				section.style.opacity = "0";

				setTimeout(function() {
					section.style.transition = "none";
					section.classList.remove('visible-skill');
					section.classList.remove('leave-skill');
				},500)
			}
		}
	}
}

function skillChangeClickName() {

	var names = document.querySelectorAll('.skill-part')

	for (let name of names) {

		name.addEventListener('click', function() {

			allSkillsTab[choice].classList.toggle('skills-selected');
			choice = name.getAttribute('data-skill-num')
			allSkillsTab[choice].classList.toggle('skills-selected');
			actualisationSkill(name.getAttribute('data-skill-num'))
		})
	}

}

function skillsBar() {

	var skills = document.querySelectorAll('.bar-competence-percent')

	for(let skill of skills) {
		skill.style.width = skill.getAttribute('data-percent')+"%";
	}
}

function moreDetailSkill() {

	var moreInfoSkills = document.querySelectorAll('.more-info-skill')

	for (let moreInfoSkill of moreInfoSkills) {

		moreInfoSkill.addEventListener('click', function() {
			let data = moreInfoSkill.getAttribute('data-more')
			let section = document.querySelector('#'+data)
			moreInfoSkill.classList.toggle('rotate-plus')
			section.classList.toggle('hidden-skill')
			console.log("click")
		})
	}

}


function changeProjectImage() {

	var projets = document.querySelectorAll('.project-image-section')
	
	for(let projet of projets) {

		let premiereImage = projet.querySelector('.p-img-up img')
		let imgListe = projet.querySelectorAll('.p-img-down img')
		let projetData = parseInt(projet.getAttribute('data-img'),10);
		premiereImage.src = imgListe[projetData].src;

		projet.querySelector('.img-preview-before').addEventListener('click', function() {
			var projetData = parseInt(projet.getAttribute('data-img'),10);

			if(imgListe[projetData-1] != undefined) {
				premiereImage.src = imgListe[projetData-1].src;
				projet.setAttribute('data-img',projetData-1);
			}

		})

		projet.querySelector('.img-preview-after').addEventListener('click', function() {
			var projetData = parseInt(projet.getAttribute('data-img'),10);

			if(imgListe[projetData+1] != undefined) {
				premiereImage.src = imgListe[projetData+1].src;
				projet.setAttribute('data-img',projetData+1);
			}
		})

		premiereImage.addEventListener('click', function() {
			lightbox(this,"Worms, un jeu pas ouf");
		})

	}

}

function add(tag, parent, text=null, id=null, classE=null) {
	let objet = document.createElement(tag)

	if(text != null)
		objet.appendChild(document.createTextNode(text))

	if(id != null)
		objet.id = id

	if(classE != null)
		objet.classList.add(classE)

	parent.appendChild(objet)

	return objet
}

function remove(element)
{
	element.remove();
}

function lightbox(img,txt=null)
{
 	var bg = add('section',document.querySelector('body'),null,'bg');
 	var lightbox = add('section',document.querySelector('body'),null,'lightbox');
 	var imgBox = add(img.tagName,lightbox,txt);
 	imgBox.src = img.src;

 	//var buttonClose = add('section',lightbox,'CLOSE IMAGE','buttonClose');

 	/*buttonClose.addEventListener('click', function() {
		remove(lightbox);
		remove(bg);
	})*/

	lightbox.addEventListener('click', function() {
		remove(lightbox);
		remove(bg);
	})

	bg.addEventListener('click', function() {
		remove(lightbox);
		remove(bg);
	})

document.querySelector('body').addEventListener("keyup", event => {
	if (event.which ==27) {
		document.querySelector("#bg").remove();
		document.querySelector("#lightbox").remove();
	}
})

}

function direction(site)
{
	switch(site) {
		case 'rc':
				window.open("http://just1web.synology.me");
				break;
		case 'fnac':
				window.open("http://yanishere.fr/fnac");
				break;
		case 'go4trip':
			window.open("http://justinwebsite.fr/go4trip");
			break;
		case 'clicker':
			window.open("http://justinwebsite.fr/clicker");
			break;
		default:
			window.open("/"+site);
			break;
	}
}