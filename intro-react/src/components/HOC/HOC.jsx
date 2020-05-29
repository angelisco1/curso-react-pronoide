import React, { Component } from 'react'
import Card from '../PropiedadesYEstado/Card/Card'
import withHover from './withHover'
import withData from './withData'
import ListaDatos from './ListaDatos'
import Spinner from './Spinner'


export default class HOC extends Component {

  render() {
    const datosCard = {
      avatar: {
        urlImage: "https://placeimg.com/80/80/animals",
        titulo: "React",
        subtitulo: "Libreria JS"
      },
      urlImage: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
      body: {
        titulo: "React",
        subtitulo: "Libreria JS",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea dignissimos repellendus veritatis hic dolorum magni sint unde delectus quas ducimus sapiente explicabo harum, soluta consectetur officiis omnis minus voluptate obcaecati."
      },
      footer: {
        text1: "Action 1",
        text2: "Action 2",
      }
    }


    const CardHovered = withHover(Card);

    const FrasesChuckNorris = withData(ListaDatos, 'http://api.icndb.com/jokes/random/3', Spinner)

    return (
      <div>
        {/* <Card /> */}
        {/* <CardHovered {...datosCard} /> */}
        <FrasesChuckNorris />
      </div>
    )
  }
}
