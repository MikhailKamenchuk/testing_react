import React from 'react';

import UserForm from './Dialog';
import Dialog from './Dialog';

class App extends React.Component {
  state = {
    isOpen: false
  }

  closeDialog = () => this.setState({
    isOpen: false
  })

  showDialog = () => this.setState({
    isOpen: true
  })

  render() {
    return (
      <div className="app">
        <button className="btn" onClick={this.showDialog}>Show dialog</button>

        <Dialog
          title='Recommendation'
          isOpen={this.state.isOpen}
          onClose={this.closeDialog}
        >
          <p>Use immutable array methods to work with data. It will help to avoid bugs</p>
        </Dialog>
      </div>
    )
  }
}

export default App