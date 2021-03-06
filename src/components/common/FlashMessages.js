import React from 'react';
import Flash from '../../lib/Flash';

class FlashMessage extends React.Component {

  state = {
    messages: null
  }

  componentWillUpdate() {
    const messages = Flash.getMessages();

    if(!messages) return false;

    this.setState({ messages });
    Flash.clearMessages();

    setTimeout(() => this.setState({ messages: '' }), 2000);
  }

  render() {
    return (
      <div >
        <div className="columns is-multiline ">
          <div className="column is-full-desktop is-full-tablet is-mobile indexList" style={{zIndex: 10000}}>
            {this.state.messages && Object.keys(this.state.messages).map(type =>
              <div key={type} className={`notification is-${type}`}>{this.state.messages[type]}</div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default FlashMessage;
