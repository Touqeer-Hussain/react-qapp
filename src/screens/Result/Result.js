import React, { Component } from 'react';
import { Icon, Form, Input, Button, Table, Header, Image } from 'semantic-ui-react';
import swal from 'sweetalert';
import 'semantic-ui-css/semantic.min.css';

class Result extends Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }

renderMain(course, quiz, percentage, status){
    return (
        <Table.Row>
        <Table.Cell>{course}</Table.Cell>
        <Table.Cell>{quiz}</Table.Cell>
        <Table.Cell >{percentage}</Table.Cell>
        {status == 'Passed' ? <Table.Cell positive >{status}</Table.Cell> : <Table.Cell negative>{status}</Table.Cell>}
      </Table.Row>
      
    );
}
    render(){
        var arr = JSON.parse(localStorage.getItem('submitResults'))
        console.log(arr)
        return (
        <div className="ui container">
        <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Course</Table.HeaderCell>
            <Table.HeaderCell>Quiz</Table.HeaderCell>
            <Table.HeaderCell>Percentage</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
    
        <Table.Body>
          
        {arr.map(x => {
            
        return this.renderMain(x.quizname, x.name, x.percentage, x.status)
    })}
          
        </Table.Body>
      </Table>
        
        
        </div>
        );
    }
}

export default Result;