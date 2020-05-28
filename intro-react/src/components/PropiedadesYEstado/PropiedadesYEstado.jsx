import React from 'react';
import NombreCompleto from './NombreCompleto'
import Card from './Card/Card'
import Card2 from './Card/Card2'
import Avatar from './Card/Avatar'
import Image from './Card/Image'
import Body from './Card/Body'
import Contador from './Contador'
import Cuenta from './Cuenta'

class PropiedadesYEstado extends React.Component {

  constructor(props) {
    super();
    this.state = {
      cuenta: 2,
      nombre: 'Contador',
      // numClicks: 0
    }


    this.incrementar = this.incrementar.bind(this);
    this.decrementar = this.decrementar.bind(this);
  }

  incrementar(event) {

    // ESTO NO HAY QUE HACERLO
    // this.state.cuenta++
    // this.state.cuenta = this.state.cuenta + 1
    // this.state.cuenta += 1

    // ESTO SI
    this.setState({
      cuenta: this.state.cuenta + 1,
      // nombre: this.state.nombre
    })
  }

  decrementar(event) {
    this.setState({
      cuenta: this.state.cuenta - 1
    })
  }


  render() {
    const datosCard = [
      {
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
      },
      {
        avatar: {
          urlImage: "https://placeimg.com/80/80/animals",
          titulo: "Vue",
          subtitulo: "Framework progresivo"
        },
        // urlImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
        body: {
          titulo: "Vue",
          subtitulo: "Framework progresivo",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea dignissimos repellendus veritatis hic dolorum magni sint unde delectus quas ducimus sapiente explicabo harum, soluta consectetur officiis omnis minus voluptate obcaecati."
        },
        footer: {
          text1: "Action 1",
          text2: "Action 2",
        }
      },
    ]

    return (
      <div>
        <h2>Props y state</h2>
        {/* <NombreCompleto nombre="Ángel" apellido="Villalba" />
        <NombreCompleto nombre="Charly" apellido="Falco" /> */}
        {/* <input type="text" value="Un texto" />
        <input type="number" value="8" />
        <input type="text" value="Un texto" /> */}


        {/* <Card {...datosCard[0]} />
        <Card {...datosCard[1]} /> */}

        {/* <Card2>
          <Image size="grande" urlImage={datosCard[0].urlImage} />
          <Avatar {...datosCard[0].avatar} />
          <Body {...datosCard[0].body} />
        </Card2>

        <Card2>
          <Body {...datosCard[1].body} />
          <Avatar {...datosCard[1].avatar} />
          <Image size="grande" urlImage={datosCard[1].urlImage} />
        </Card2> */}

        {/* <Card {...datosCard[1]} /> */}

        <Contador
          cuenta={this.state.cuenta}
          onHandleIncrement={this.incrementar}
          onHandleDecrement={this.decrementar}
        />
        <Cuenta cuenta={this.state.cuenta} />

      </div>
    )
  }
}

export default PropiedadesYEstado;