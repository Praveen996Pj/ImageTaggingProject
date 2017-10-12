import React, {Component} from 'react';

export default class Bounding extends Component {
  
    render() {
      return (
        <div style={this.props.style} className="bounding_block">
          <input type="text"
                autoFocus
                placeholder="tag"
                onKeyDown={(e) => this.props.click(e)}
                onChange={(e) => this.props._changeValue(e)}
                value={this.props.text}
                style={{marginTop:55}}/>
        </div>
      );
    }
  }
