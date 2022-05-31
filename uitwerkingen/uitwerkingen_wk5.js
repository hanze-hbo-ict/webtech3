document.getElementById('submit').addEventListener('click', btn => {
  btn.preventDefault()
  const data = new FormData(document.querySelector('form'))
  console.log(data)
  fetch('http://localhost:8000/get-data.php', { method:'POST', body:data})
  .then ( res => {
      if (res.status==200) return res.json()
      else throw new Error (res.status)
  })
  .then ( json => {
      tmp = []
      json.forEach( el => tmp.push ({"name":el.name, "score":el.scores.reduce( (x,y) => x+y )}))
      return tmp
  })
  .then ( res => res.sort( (a,b) => b.score - a.score) )
  .then ( res => res.slice(0, 10))
  .then ( res => {
      const score_table = document.getElementById('players')
      
      res.forEach ( (el,idx) => {
          let row = document.importNode(document.getElementById('scores').content, true)
          row.querySelector('td.naam').innerHTML = el.name
          row.querySelector('td.score').innerHTML = new Intl.NumberFormat('nl-NL').format(el.score)
          row.querySelector('th').innerHTML = idx + 1
          score_table.appendChild(row)
      })
      score_table.style.display = 'block'
  })
  .catch ( error => {
      console.error(error)
      document.querySelectorAll('input').forEach( el => el.style.border='solid red 3px' )
  })
})