import React, {Component} from 'react';

export default class Im extends Component {
    render() {
      return (
        <div>
          <img alt={this.props.src}
          onClick={(e) => this.props.onClick(e)} 
          onMouseEnter={(e) => this.props.onMouseEnter(e)} 
          onMouseLeave={(e) => this.props.onMouseLeave(e)}
          src={this.props.src} width="500px" height="500px"/>
        </div>
      );
    }
  }