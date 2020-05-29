import React from 'react';
import axios from 'axios';


const withData = (CmpWrapped, url, Spinner) => {

  return class extends React.Component {
    constructor(props) {
      super();
      this.state = {
        listaDatos: [],
        loading: true
      }
    }

    componentDidMount() {
      axios.get(url)
        .then(resp => {
          const datos = resp.data.value
          setTimeout(() => {
            this.setState({
              listaDatos: datos,
              loading: false
            })
          }, 4000)
        })
    }

    render() {
      const loader = Spinner ? <Spinner /> : <p>Loading...</p>

      return (
        <div>
          {this.state.loading ? loader : <CmpWrapped {...this.props} datos={this.state.listaDatos} />}
        </div>
      )
    }

  }

}

export default withData;