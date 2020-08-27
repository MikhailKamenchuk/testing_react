import React from 'react';
import Spinner from './Spinner';

export const withDataLoader = url => Component => {
  return class extends React.Component {
    state = {
      data: null
    }

    componentDidMount() {
      fetch(url)
        .then(res => res.json())
        .then(data => this.setState({ data }))
    }

    render() {
      const { data } = this.state;
      const { children } = this.props;
      if (!data) {
        return <Spinner />
      }
      return (
        <Component data={data} >
          {children}
        </Component>
      )
    }
  }
}