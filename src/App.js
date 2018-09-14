import React, { Component } from 'react';
import { Icon, Form, Input, Button, Table } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Container from "./Container/Container";
import Signin from './screens/Signin/Signin'
import Signup from './screens/Signup/Signup'
import Quiz from './screens/Quiz/Quiz';
import Cate from './screens/Cate/Cate';
import Test from './screens/Test/Test';
import Result from './screens/Result/Result';




class App extends Component {
constructor(){
  super();
  
  this.state = {
    currentUser: null,
    username: '',
    npassword: '',
    cpassword: '',
    created: true,
    quiz: null,
    cate: null,
    test: null,
    result: null,
    cateSelected: null,
    quizSelected: null,
    loc: null,
    score: null,
    done: null,
    submitResults: [],
    completed: [],
    time: null,
  }
}  

  
  
  render() {
    
      return(
        <Container main={this} >
          {this.state.created &&  !localStorage.getItem('logged') && <Signin user={this}/>}
          {!this.state.created &&  !localStorage.getItem('logged') && <Signup user={this}/>}
          {localStorage.getItem('logged') && localStorage.getItem('quiz') && !localStorage.getItem('cate') && <Quiz main={this}/>}
          {localStorage.getItem('logged') &&  localStorage.getItem('cate') && !localStorage.getItem('test') && <Cate main={this}/>}
          {localStorage.getItem('logged') &&  localStorage.getItem('test') && !localStorage.getItem('result') && <Test main={this}/>}
          {localStorage.getItem('logged') &&  localStorage.getItem('result') && <Result main={this}/>}
        </Container>
      );
  }
}

export default App;
