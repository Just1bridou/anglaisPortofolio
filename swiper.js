function swiper(elem) {
    var container = elem.querySelector('.container')
    var childs = container.children
    var left = createLeft(elem)
    var right = createRight(elem)

    createClass(childs)

    for(let child of childs) {
      (function (el)
        {
          el.classList.add('swipe-none')
          el.addEventListener('click', () => {   
            createModale(el)
          })
        })(child)
    }

    container.setAttribute('index', 0)

    childs[getIndex(container)].classList.remove('swipe-none')
    
    left.addEventListener('click', () => {
      getBefore(container)
    })

    right.addEventListener('click', () => {
      getAfter(container)
    })
  }

  function createModale(elem) {
    console.log(elem)
    let bg = _('div', document.body, null, null, "backgroundModale")
    let img = _('div', bg, null, null, "imgPreview")
    let url = elem.style.backgroundImage
    img.style.backgroundImage = url
    bg.addEventListener('click', () => {
      bg.remove()
    })

  }

  function createLeft(elem) {
    let but =  _('button', elem, null, null, 'left')
    but.innerHTML = '<i class="fas fa-chevron-left"></i>'
    return but
  }

  function createRight(elem) {
    let but =  _('button', elem, null, null, 'right')
    but.innerHTML = '<i class="fas fa-chevron-right"></i>'
    return but
  }

  function createClass(array) {
    for(let elem of array) {
      elem.classList.add('swiper-slide')
    }
  }

  function getIndex(elem) {
    return elem.getAttribute('index')
  }

  function setIndex(elem, index) {
    elem.setAttribute('index', index)
  }

  function getBefore(elem) {
    let index = parseInt(getIndex(elem))
    let max = elem.children.length - 1
    var nIndex = 0
    if(index == 0) {
      nIndex = max
    } else {
      nIndex = index - 1
    }
    setIndex(elem, nIndex)
    refreshImage(elem, index, nIndex)
  }

  function getAfter(elem) {
    let index = parseInt(getIndex(elem))
    let max = elem.children.length - 1
    var nIndex = 0
    if(index == max) {
      nIndex = 0
    } else {
      nIndex = index + 1
    }
    setIndex(elem, nIndex)
    refreshImage(elem, index, nIndex)
  }

  function refreshImage(elem, oldIndex, newIndex) {
    var childs = elem.children
    childs[newIndex].classList.remove("swipe-none")
    childs[oldIndex].classList.add("swipe-none")
  }