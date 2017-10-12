import React, {Component} from 'react';
import Bounding from './Bounding';
import BoundingBox from './BoundingBox';
import Remove from './Remove'
import Image from './Image'

const BASE_URL = "127.0.0.1:8000"

export default class Containor extends Component {
    constructor(props){
        super(props);

        this.state = {
            x : '',
            y : '',
            labels : [],
            text : '',
            remove : false,
            click : false,
            mousemove : false,
            cords: [],
        }

        this._onClick = this._onClick.bind(this);
        this._changeValue = this._changeValue.bind(this);
        this._onMouseEnter = this._onMouseEnter.bind(this);
        this._onMouseLeave = this._onMouseLeave.bind(this);
        this._enterLabel = this._enterLabel.bind(this);
        this._calTop = this._calTop.bind(this);
        this._calLeft = this._calLeft.bind(this);
        this.remove = this.remove.bind(this);
    }

    _enterLabel(event){
        if(event.keyCode === 13){
            const xCord = this.state.x - 25;
            const yCord = this.state.y - 25;
            const obj = {
                imageid:this.props.data.id,
                tag: event.target.value,
                x_cord:xCord,
                y_cord:yCord,
              }
              console.log(this.state.cords[0])
              console.log(obj)
          this.setState({ text: '', cords: this.state.cords.concat(obj), click:!this.state.click});

          
          fetch('http://127.0.0.1:8000/res2/', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "imageid": this.props.data.id,
                "tag": event.target.value,
                "x_cord": xCord,
                "y_cord": yCord
            })
          })
    }
}

    _changeValue(event){
        this.setState({ text: event.target.value});
    }

    _onClick(e){
        this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY, click:!this.click });
    }

    _onMouseEnter(e){
        this.setState({mousemove:true});
    }

    _onMouseLeave(e){
        this.setState({mousemove:false, click: false});
    }

    _calTop(x){
        return (x-25);
    }

    _calLeft(y){
        return (y-25);
    }

    remove(event){    
            return fetch('http://127.0.0.1:8000/result/'+ this.props.data.id +'/', {
                method: 'delete'
              }).then(
                  (res) =>
                  {
                      this.setState({cords:[]})
                  }
              )
            }


    componentDidMount() {
         this.setState({ cords: this.props.data.tracks});
    }
    
    render() {
        const styles = {
            marginTop:this._calTop(this.state.y),
            marginLeft:this._calLeft(this.state.x),
          };
        
        const boundingWindow = this.state.click ? <Bounding
            text={this.state.text}
            click={this._enterLabel}
            style={styles}
            _changeValue={this._changeValue} /> : null;

      const image_path = this.props.data.image_path;
      return (
          
        <div>
          {
            this.state.mousemove && this.state.cords.map((item) => {    
                //console.log(item.x_cord)            
              return (
                <BoundingBox imgCords={item} />
              );
            })
          }
          {boundingWindow}
          <Image
            onClick={this._onClick}
            onMouseEnter={this._onMouseEnter}
            onMouseLeave={this._onMouseLeave}
            src={ "http://" +BASE_URL  +  image_path}
          />
          <Remove onClick={this.remove}/>
        </div>
      );
    }
  }
