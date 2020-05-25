import React from 'react';
import ReactDOM from 'react-dom';

const Componente = () => {
  const f = 'campo1';
  return (
    <div>
      <h1>Hola mundo</h1>
      <hr/>
    </div>
  )
}

const Componente1 = () => React.createElement(
  'div',
  null,
  React.createElement('h1', null, 'Hola mundo!'),
  React.createElement('hr', null, null),
)

ReactDOM.render(<Componente1 />, document.getElementById('root'));