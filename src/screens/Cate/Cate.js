import React, { Component } from 'react';
import { Icon, Form, Input, Button } from 'semantic-ui-react';
import swal from 'sweetalert';
import 'semantic-ui-css/semantic.min.css';


class Cate extends Component{
  constructor(props){
    super(props);
    
  }

rendercate(key, title, numOfQuestion, index){
    return (    
    <div class='ui divided items' key={key}>
  <div class='item'>      
      <div class='content'>
          <a class='header'>{title}</a>
              <div class='meta'>
                  <span class='cinema'>No of Questions: {numOfQuestion}</span>
              </div>
              <div class='description'>
              {(!localStorage.getItem('completed') || JSON.parse(localStorage.getItem('completed')).indexOf(key) == -1) &&
              <div class='ui action input'>
              <div class='ui left icon input'>
                    <i aria-hidden='true' class='lock icon' />
                    <input type='password' placeholder='12345' id='proKey' maxLength='5'/>
            </div>
            </div>}
              </div>

              <div class='extra'>
{(!localStorage.getItem('completed') || JSON.parse(localStorage.getItem('completed')).indexOf(key) == -1) &&  <button class='ui primary right floated button' role='button' onClick={() => {
    let val = document.querySelector('#proKey').value;
        if(val == 12345){
    
            localStorage.setItem('quizSelected',JSON.stringify(JSON.parse(localStorage.getItem('cateSelected'))[index]));
            this.props.main.setState({quizSelected: JSON.stringify(JSON.parse(localStorage.getItem('cateSelected'))[index])});
            this.props.main.setState({test: true});
            this.props.main.setState({score: 0});
            localStorage.setItem('cate', '');
            localStorage.setItem('test', true);
        }else{
            swal({
                title: "Wrong Key",
                text: "Please enter correct proctoring key!",
                icon: "error",
              });
        }                            
                      }}>
                      Take Quiz
                      <i aria-hidden='true' class='right chevron icon' />
</button>}

{(localStorage.getItem('completed') && JSON.parse(localStorage.getItem('completed')).indexOf(key) !== -1) && <button class='ui primary right floated button' role='button' onClick={() => {
    
    this.props.main.setState({result: true})
    localStorage.setItem('result', true)
    localStorage.setItem('cate', '')
    

                      }}>
                      Show Result
                      <i aria-hidden='true' class='right chevron icon' />
                      </button>}
              </div>
      </div>
  </div>
  <div class='ui fitted divider' />
</div>
);
}
  
    render(){
        
        return (
            
  <div className='ui container'>
            
    {JSON.parse(localStorage.getItem('cateSelected')).map( (x,i) =>{
       return this.rendercate(x.key, x.name, x.numOfQuestions,i)
    })}
</div>
        
  );
    }
}

export default Cate;