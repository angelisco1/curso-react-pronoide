import React from 'react'
import Meme from './Meme'
import { connect } from 'react-redux'
import { crearDeleteMemeAction } from '../../store/memes/actions'


// No hemos creado el hoc porque estos botones no se añaden a otro tipo de componentes, sino que solo se usan con Meme

// const withOpciones = (CmpWrapped) => {
//   return class extends React.Component {
//     render() {
//       return (
//         <div>
//           <CmpWrapped {...props} />
//           <div>
//             <button type="button" onClick={
//               () => deleteMeme(props.id)
//             }>Eliminar</button>
//             <button type="button" onClick={() => {}}>Editar</button>
//           </div>
//         </div>
//       )
//     }
//   }
// }

const MemeConOpciones = (props) => {
  return (
    <div>
      <Meme {...props} />
      <div>
        <button type="button" onClick={
          () => props.deleteMeme(props.id)
        }>Eliminar</button>
        <button type="button" onClick={() => {}}>Editar</button>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  deleteMeme: crearDeleteMemeAction
}

export default connect(null, mapDispatchToProps)(MemeConOpciones)
