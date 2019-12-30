import React from 'react';

class Login extends React.Component {
  state={
      username:'',
      password:''
  }
  render(){
    return (
       <form>
         <input type="text" placeholder={'enter your username'} value={this.state.username}></input>
         <input type="password" placeholder={'enter your password'} value={this.state.password} ></input>
         <input type="submit" value="Login"></input>
       </form>
      );
  }
}

export default Login;



