import React, {Component} from 'react';

export default class Remove extends Component {
    render() {
      return (
        <div>     
          <button onClick={(e) => this.props.onClick(e)}>
            Clear Tags    
          </button>
        </div>
      );
    }
  }