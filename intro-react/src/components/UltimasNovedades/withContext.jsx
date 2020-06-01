import React from 'react';
import { ctxLang } from './UltimasNovedades'

const withContext = (CmpWrapped) => {
  return class extends React.Component {
    render() {
      return (
        <ctxLang.Consumer>
          {
            (lang) => <CmpWrapped lang={lang} {...this.props} />
          }
        </ctxLang.Consumer>
      )
    }
  }
}

export default withContext;