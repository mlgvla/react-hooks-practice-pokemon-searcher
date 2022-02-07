import React, { useState } from "react"
import { Form } from "semantic-ui-react"

function PokemonForm({onAddPokemon}) {
  const [formData, setFormData] = useState({
    name: "",
    hp: "",
    frontURL: "",
    backURL: "",
  })

  function handleFormInputs(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newPokemon = {
      name: formData.name,
      hp: formData.hp,
      sprites: {
        front: formData.frontURL,
        back: formData.backURL,
      }
    }
    fetch("http://localhost:3001/pokemon", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPokemon)
    })
    .then(res => res.json())
    .then(addedPokemon => onAddPokemon(addedPokemon))

    setFormData({
        name: "",
        hp: "",
        frontURL: "",
        backURL: "",
      })
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleFormInputs}
          />
          <Form.Input
            fluid
            label="hp"
            placeholder="hp"
            name="hp"
            value={formData.hp}
            onChange={handleFormInputs}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontURL"
            value={formData.frontURL}
            onChange={handleFormInputs}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backURL"
            value={formData.backURL}
            onChange={handleFormInputs}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  )
}

export default PokemonForm
