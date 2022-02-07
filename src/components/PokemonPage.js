import React, { useState, useEffect } from "react"
import PokemonCollection from "./PokemonCollection"
import PokemonForm from "./PokemonForm"
import Search from "./Search"
import { Container } from "semantic-ui-react"

function PokemonPage() {
  const [pokemons, setPokemons] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then(res => res.json())
      .then(pokemons => setPokemons(pokemons))
  }, [])

  function handleAddPokemon(addedPokemon) {
      setPokemons([...pokemons, addedPokemon])
  }

  const pokemonToDisplay = pokemons.filter(pokemon => 
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon} />
      <br />
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <br />
      <PokemonCollection pokemons={pokemonToDisplay} />
    </Container>
  )
}

export default PokemonPage
