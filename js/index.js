const person = document.getElementById('persons');
const starships = document.getElementById('satrships');
const planets = document.getElementById('planets');

fillCounters();

function fillCounters() {
  Promise.all([
      getData('people/'),
      getData('starships/'),
      getData('planets')
  ])
  .then(data =>{
    console.log(data)
  })
  .catch(err  => console.log('Erro:', err))
}

function getData(param) {
    return fetch(`https://www.swapi.tech/${param}`)
             .then(res => res.json())
}