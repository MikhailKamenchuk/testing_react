import React from "react";

class Life extends React.Component {
  constructor(props){
    super(props);
    console.log('good place to create state')
  }
  componentDidMount(){
    console.log('API calls, subscriptions')
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log('decide to render or not to render')
  }
  componentDidUpdate(prevProps, prevState){
    console.log('some updates based on new props')
  }
  componentWillUnmount(){
    console.log('cleanup before DOM related to component will be removed')
  }
  render(){
    console.log('return React element to build DOM')
    return (
      <ul className="transactions">
        <li className="transaction">{this.props.transactions[0]}</li>
        <li className="transaction">{this.props.transactions[1]}</li>
        <li className="transaction">{this.props.transactions[2]}</li>
      </ul>
    )
  }
}

export default Life;