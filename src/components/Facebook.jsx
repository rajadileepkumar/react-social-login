import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';

export default class Facebook extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: false,
            userID:'',
            name:'',
            email:'',
            picture:'',
        }
    }
    componentClicked = () => console.log('clicked');
    responseFacebook = response => {
        this.setState({
            isLoggedIn:true,
            name:response.name,
            userID:response.useerID,
            email:response.email,
            picture:response.picture.data.url
        })
    }
  render() {
      let fbConnect;
      if (this.state.isLoggedIn) {
        fbConnect = (
        <div style={{
            width:'400px',
            margin: 'auto',
            background: '#f4f4f4',
            padding:'20px'
          }}>
              <img src={this.state.picture} alt={this.state.name}/>
              <h2>Welcome {this.state.name}</h2>
              {this.state.email}
        </div>)
      } else {
        fbConnect = (
            <FacebookLogin
            appId="383345652345117"
            autoLoad={true}
            fields="name,email,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook} />
          )
      }
    return (
      <div>
        {fbConnect}
      </div>
    )
  }
}
