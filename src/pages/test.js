import React from 'react'
import axios from 'axios'
import { element } from 'prop-types';



export default class TestClass extends React.Component{
state = {
    text: []
};

componentDidMount() {
axios.get("http://localhost:3000/posts").then(res => {console.log(res.data)
this.setState({text: res.data})
})
}

changeClass = () => {

}

render (){



    return(
       <div>
        
      <div className="imgContainer"> { this.state.text.map((x, i) => <div className={this.x} ><img key={i} src={x.img} alt="" /> {++x}
      <div className="info"><p>{x.title}</p></div>
       </div>)}</div>
       </div>
    );
}                
}

