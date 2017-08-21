
const apiBase = 'https://swapi.co/api'
const apiPeopleEndpoint = `${apiBase}/people/`

export const listPeople = (searchQuery) => {
  return fetch(apiPeopleEndpoint)
  .then(response => response.json())
  .then(json => ({ results: json.results }))
}
