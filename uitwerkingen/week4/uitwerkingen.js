
// OPGAVE 1: SPINNERS
document.querySelectorAll('img.demo').forEach ( el => {
    fetch("https://picsum.photos/200/300")
    .then ( e => el.src = e.url )
  })

  
  // OPGAVE 2: INFINITE SCROLL
  document.addEventListener('scroll', () => {
    let last = document.getElementById('container').lastElementChild
    if (last.getBoundingClientRect().bottom < window.innerHeight) {
      console.log('just scrolled into view...')
      const container = document.getElementById('container')
      let rows = window.getComputedStyle(container).gridTemplateRows
      container.style.gridTemplateRows = rows + ' 30vh'
    
      let item = document.importNode(document.querySelector("#img-row").content, true)
      item.querySelectorAll('div').forEach ( el => {
        fetch("https://picsum.photos/200/300")
        .then( e => el.querySelector('img').src = e.url)
      })
  
      document.getElementById('container').appendChild(item)
    }
  })
  