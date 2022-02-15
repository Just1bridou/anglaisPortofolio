document.addEventListener('DOMContentLoaded', () => {

  swiper(document.querySelector('.swipe-russian'))
  swiper(document.querySelector('.swipe-bo'))
  swiper(document.querySelector('.swipe-hdf'))
  swiper(document.querySelector('.swipe-fnac'))
  swiper(document.querySelector('.swipe-monopoly'))
  swiper(document.querySelector('.swipe-petitbac'))
  swiper(document.querySelector('.swipe-spaceDim'))
  swiper(document.querySelector('.swipe-ag'))
  swiper(document.querySelector('.swipe-ht'))
})

function direction(name) {
  let url = ""
  switch(name) {
    case 'monopoly':
      url = "https://monopoly-node.herokuapp.com/"
      break;

    case 'petitbac':
      url = "https://petitbac.io/"
      break;

      case 'howto':
        url = "http://howtotutorial.herokuapp.com/"
        break;
  }

  window.open(url, '_blank').focus();
}

function _(tag, parent, text=null,  id=null, classs=null) {
	let element = document.createElement(tag)
	if (text)
		element.appendChild(document.createTextNode(text))
	parent.appendChild(element)
	if (id)
		element.id = id
	if (classs)
		element.classList.add(classs)
	return element
}