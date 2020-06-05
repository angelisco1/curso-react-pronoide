import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Autocomplete = () => {
  const [cocktail, setCocktail] = useState('margarita')
  const [cocktails, setCocktails] = useState([])
  const [cocktailElegido, setCocktailElegido] = useState('')
  const [infoCocktail, setInfoCocktail] = useState({})
  const [c, setC] = useState(0)

  useEffect(() => {
    console.log('Pasa por el effect')
    if (cocktail.length > 2) {
      axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`)
        .then(resp => {
          const datosCocktails = (resp.data.drinks || []).map(drink => ({id: drink.idDrink, nombre: drink.strDrink}))
          setCocktails(datosCocktails);
        })
    }
  }, [cocktail])

  useEffect(() => {
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailElegido}`)
      .then(resp => {
        if (resp.data.drinks) {
          setInfoCocktail(resp.data.drinks[0]);
        }
      })
  }, [cocktailElegido])


  const muestraMensajeAlRedimensionar = () => {
    console.log('Se está redimensionand la pantalla...')
  }

  useEffect(() => {
    window.addEventListener('resize', muestraMensajeAlRedimensionar)
    return () => {
      console.log('Se va a eliminar...')
      window.removeEventListener('resize', muestraMensajeAlRedimensionar)
    }
  }, [])

  const listaCocktails = cocktails.map(c => (
      <li
        key={c.id}
        onClick={() => setCocktailElegido(c.id)}
      >{c.nombre}</li>
    )
  );

  return (
    <div>
      <button type="button" onClick={() => setC(c+1)}>Clicks {c}</button>
      <input type="text" value={cocktail} onChange={(e) => setCocktail(e.target.value)} />
      <ul>
        {listaCocktails}
      </ul>
      <hr/>
      <pre>
        {JSON.stringify(infoCocktail, null, 4)}
      </pre>
    </div>
  )
}

export default Autocomplete
