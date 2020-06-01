import React, { Component } from 'react'
import CtxSeccion1 from './CtxSeccion1'
import Referencia from './Referencia'
import Layout from './Layout'
import Image from '../PropiedadesYEstado/Card/Image'


export const ctxLang = React.createContext('fr')

export default class UltimasNovedades extends Component {
  constructor(props) {
    super()
    this.state = {
      lang: 'en'
    }
    this.handleChangeLang = this.handleChangeLang.bind(this)
  }

  handleChangeLang(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <p>Idioma seleccionado: {this.state.lang}</p>
        <div>
          <label htmlFor="idioma">Selecciona el idioma:</label>
          <select id="idioma" name="lang" value={this.state.lang} onChange={this.handleChangeLang}>
            <option value="es">ES</option>
            <option value="en">EN</option>
            <option value="fr">FR</option>
          </select>
        </div>
        <hr/>

        <ctxLang.Provider value={this.state.lang}>
          <CtxSeccion1 />
        </ctxLang.Provider>

        <Referencia />

        <Layout>
          <Image urlImage="https://cdn.worldvectorlogo.com/logos/react-2.svg" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur laborum neque consequatur at quis culpa dicta officiis placeat optio assumenda dolores veniam obcaecati voluptates, quae fugit enim voluptatem, doloremque repellendus.</p>
        </Layout>


      </div>
    )
  }
}