import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Recipe from './Components/Recipe'
import { Container, Row, Alert } from 'react-bootstrap'

function App() {
  const APP_ID = process.env.REACT_APP_ID
  const APP_KEY = process.env.REACT_APP_KEY
  const [query, setQuery] = useState('chicken')
  const URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    getRecipes()
  }, [query])

  const getRecipes = async () => {
    const response = await axios.get(URL)
    setRecipes(response.data.hits)
  }

  const updateSearch = (e) => {
    setSearch(e.target.value)
  }

  const getSearch = (e) => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }
  console.log(recipes)
  return (
    <div className="App">
      <Container fluid>
        <form onSubmit={getSearch} className="search-from">
          <input
            className="search-bar"
            type="text"
            value={search}
            onChange={updateSearch}
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
        <Row className="d-flex">
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <div className="mx-auto" key={recipe.recipe.label}>
                <Recipe recipe={recipe.recipe} />
              </div>
            ))
          ) : (
            <Alert className="mx-auto" variant="danger">
              There is no recipe available for your search please try again
            </Alert>
          )}
        </Row>
      </Container>
    </div>
  )
}

export default App
