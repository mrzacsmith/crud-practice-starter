import React, { useState, useEffect } from 'react'

import AnimalForm from './AnimalForm.js'
import AnimalList from './AnimalsList.js'
import { axiosWithAuth } from '../utils/axiosWithAuth.js'

export default function AnimalDashboard() {
  const [animals, setAnimals] = useState([])
  const [update, setUpdate] = useState(false)

  // How can get fetch the data from the server when the component mounts?
  // How can we capture and set that data to state?

  useEffect(() => {
    axiosWithAuth()
      .get('animals')
      .then((response) => {
        console.log(response.data)
        setAnimals(response.data)
        setUpdate(false)
      })
      .catch((error) => console.log(`There is an error: ${error.response}`))
  }, [update])

  return (
    <div className="dash">
      <AnimalForm animals={animals} updateAnimals={setAnimals} />
      <AnimalList animals={animals} />
    </div>
  )
}
