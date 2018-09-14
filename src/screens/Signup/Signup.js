import React, { Component } from 'react';
import { Icon, Form, Input, Button } from 'semantic-ui-react';
import swal from 'sweetalert';
import 'semantic-ui-css/semantic.min.css';

class Signup extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }


  handleUser(e){
    this.setState({
      username: e.target.value,
    });
  }

  handlenPass(e){
    this.setState({
      npassword: e.target.value,
    })
  }

  
  handlecPass(e){
    this.setState({
      cpassword: e.target.value,
    })
  }

  submitForm(e){
    e.preventDefault();

    if(!this.state.username || !this.state.npassword || !this.state.cpassword){
      swal('', 'Please Fill this Form Completly!', 'warning');
      this.setState({
        username: '',
        password: ''
      })
      document.getElementById('loginform').reset();
      
    }else{
         if(this.state.npassword !== this.state.cpassword){
              swal('', 'Password did not Match!', 'error');
              this.setState({
                username: '',
                password: ''
              })
              document.getElementById('loginform').reset();
          }else{
            localStorage.setItem('user',this.state.username)
            localStorage.setItem('npass',this.state.npassword)
            localStorage.setItem('cpass',this.state.cpassword)
            swal('', 'User Created!', 'success');
              this.props.user.setState({created: true})
              
          }
    }
    
  }

    render(){
        return (
      <div className="form" style={{width: '600px', margin: '20px auto'}}>
      <h3>Please Sign in to continue!</h3>
  
          <Form onSubmit={this.submitForm.bind(this)} id="loginform">
    
            <Form.Field
              id='form-input-control-first-name'
              control={Input}
              label='Email'
              placeholder='Email'
              type="email"
              onChange={this.handleUser.bind(this)}
            />
            <Form.Field
              id='form-input-control-npass'
              control={Input}
              label='Password'
              placeholder='New Password'
              type="password"
              onChange={(this.handlenPass.bind(this))}
            />
            <Form.Field
              id='form-input-control-cpass'
              control={Input}
              label='Password'
              placeholder='Confirm Password'
              type="password"
              onChange={(this.handlecPass.bind(this))}
            />
          <Form.Group>
          <Button animated color='blue'>
            <Button.Content visible>Sign Up</Button.Content>
            <Button.Content hidden>
            <Icon name='arrow right' />
            </Button.Content>
          </Button>
          </Form.Group>
        </Form>
        <div class='ui horizontal divider'>Or</div>
  <Button alig animated color='grey' onClick={() => this.props.user.setState({created: true})}>
            <Button.Content visible>Sign In</Button.Content>
            <Button.Content hidden>
            <Icon name='arrow right' />
            </Button.Content>
          </Button>          

        </div>
        );
    }
}

export default Signup;