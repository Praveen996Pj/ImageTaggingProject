import React, {Component} from 'react';

export default class BoundingBox extends Component {
    render() {
      const {x_cord,y_cord, tag} = this.props.imgCords;   
      
      return (<div style={{marginTop:Number(y_cord),marginLeft:Number(x_cord)}} className="bounding_block2">
                <div style={{marginTop:55}} >{tag}</div>
              </div>);
    }
  }