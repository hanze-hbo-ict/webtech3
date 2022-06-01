// OPGAVE 3

fetch('http://localhost:8000/api/login_check',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: '{"username":"Chantal","password":"chantal"}'
  })
  .then( resp => resp.json() )
  .then ( json => localStorage.setItem('jwt', json.token) )
  .then ( e => document.getElementById('ingelogd').style.display = 'block' )



// OPGAVE 4

const token = localStorage.getItem('jwt')
const auth = `Bearer ${token}`
console.log(token)

fetch ('http://localhost:8000/api/player/1/games',
  {
    method: 'GET',
    headers: {
      'Content-Type':'application/json',
      'Accept':'application/json',
      'Authorization': auth
    }
  })
  .then ( resp => resp.json() )
  .then ( json => {
    const score_table = document.getElementById('players')
    json.forEach ( (el,idx) => {
      let datum = new Date(el.date.date).toLocaleDateString('NL-nl', { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric'} )
      let score = el.score
      let row = document.importNode(document.getElementById('scores').content, true)
      row.querySelector('td.naam').innerHTML = datum
      row.querySelector('td.score').innerHTML = new Intl.NumberFormat('nl-NL').format(score)
      row.querySelector('th').innerHTML = idx + 1
      score_table.appendChild(row)
    })
    score_table.style.display = 'block'
  })

      

