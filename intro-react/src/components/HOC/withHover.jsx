import React from 'react';

const withHover = (CmpWrapped) => {
  // return class extends React.Component {
  return class CmpWithHover extends React.Component {
    // constructor(props) {
    //   super()
    //   this.state = {
    //     opacidad: 1
    //   }
    //   this.changeOpacity = this.changeOpacity.bind(this);
    // }

    // changeOpacity() {
    //   this.setState({
    //     opacidad: this.state.opacidad === 1 ? 0.5 : 1
    //   })
    // }

    render() {
      return (
        <div
          style={{width: '350px'}}
          // style={{width: '350px', opacity: this.state.opacidad}}
          // onMouseEnter={this.changeOpacity}
          // onMouseLeave={this.changeOpacity}
          className="card-hover"
        >
          <CmpWrapped {...this.props} />
        </div>
      )
    }
  }
}

export default withHover;