import React, { Component } from 'react';
import { Icon, Form, Input, Button } from 'semantic-ui-react';
import swal from 'sweetalert';
import 'semantic-ui-css/semantic.min.css';
import exp from './exp.jpg'
import  angular from './angular.jpg';
import  react from './react.png';
import  vue from './vue.png';
import  node from './node.png';


class Quiz extends Component{
  constructor(props){
    super(props);
    this.state = [{
     logo: {angular}.angular,
     quizname: 'AngularJs 2',
     numofquiz: 'No. of Quiz: 2',
     descrip: 'Superheroic JavaScript MVW Framework',
     quizlist: [
      {
        quizname: 'AngularJs 2',
        numofquiz: 'No. of Quiz: 2',
        descrip: 'Superheroic JavaScript MVW Framework',
        key: 'angularQuiz1',
        name: 'Quiz 1 - Basics',
        numOfQuestions: 5,
        allquest: [{
          question: 'What is MVC?',
          answer: ['MVC is name of an algorithm.','MVC is a software design pattern for developing web applications.','MVC is a software technique to optimize web application performance.','None of the above.'],
          correct: 1
        },
        {
          question: 'Which of the following is true about filter filter?',
          answer: ['filter filter is a function which takes text as input.',' filter filter is used to filter the array to a subset of it based on provided criteria.','Both of the above.','None of the above.'],
          correct: 1
        },
        {
          question: 'Which of the following is true about $error?',
          answer: ['$error states that form has invalid data.','$error states the exact error.','Both of the above.','None of the above.'],
          correct: 1
        },
        {
          question: 'Which components can be injected as a dependency in AngularJS?',
          answer: ['Application Module','Constants','Value','Factory'],
          correct: 0
        },
        {
          question: 'Which of the following is true about ng-model directive?',
          answer: ['ng-model directive binds the values of AngularJS application data to HTML input controls.','ng-model directive creates a model variable which can be used with the html page and within the container control having ng-app directive.','Both of the above.','None of the above.'],
          correct: 2
        }
      ]},{
        quizname: 'AngularJs 2',
        numofquiz: 'No. of Quiz: 2',
        descrip: 'Superheroic JavaScript MVW Framework',
        key: 'angularQuiz2',
        name: 'Quiz 2 - Intermediate',
        numOfQuestions: 5,
        allquest: [{
          question: 'What is MVC?',
          answer: ['MVC is name of an algorithm.','MVC is a software design pattern for developing web applications.','MVC is a software technique to optimize web application performance.','None of the above.'],
          correct: 1
        },
        {
          question: 'Which of the following is true about filter filter?',
          answer: ['filter filter is a function which takes text as input.',' filter filter is used to filter the array to a subset of it based on provided criteria.','Both of the above.','None of the above.'],
          correct: 1
        },
        {
          question: 'Which of the following is true about $error?',
          answer: ['$error states that form has invalid data.','$error states the exact error.','Both of the above.','None of the above.'],
          correct: 1
        },
        {
          question: 'Which components can be injected as a dependency in AngularJS?',
          answer: ['Application Module','Constants','Value','Factory'],
          correct: 0
        },
        {
          question: 'Which of the following is true about ng-model directive?',
          answer: ['ng-model directive binds the values of AngularJS application data to HTML input controls.','ng-model directive creates a model variable which can be used with the html page and within the container control having ng-app directive.','Both of the above.','None of the above.'],
          correct: 2
        }
      ]}  
   ]
    },{
      logo: {react}.react,
      quizname: 'ReactJs ',
      numofquiz: 'No. of Quiz: 2',
      descrip: 'A JavaScript library for building user interfaces',
      quizlist: [
        {
          quizname: 'ReactJs ',
          numofquiz: 'No. of Quiz: 2',
          descrip: 'A JavaScript library for building user interfaces',
          key: 'reactQuiz1',
          name: 'Quiz 1 - Basics',
          numOfQuestions: 5,
          allquest: [{
            question: 'What is MVC?',
            answer: ['MVC is name of an algorithm.','MVC is a software design pattern for developing web applications.','MVC is a software technique to optimize web application performance.','None of the above.'],
            correct: 1
          },
          {
            question: 'Which of the following is true about filter filter?',
            answer: ['filter filter is a function which takes text as input.',' filter filter is used to filter the array to a subset of it based on provided criteria.','Both of the above.','None of the above.'],
            correct: 1
          },
          {
            question: 'Which of the following is true about $error?',
            answer: ['$error states that form has invalid data.','$error states the exact error.','Both of the above.','None of the above.'],
            correct: 1
          },
          {
            question: 'Which components can be injected as a dependency in AngularJS?',
            answer: ['Application Module','Constants','Value','Factory'],
            correct: 0
          },
          {
            question: 'Which of the following is true about ng-model directive?',
            answer: ['ng-model directive binds the values of AngularJS application data to HTML input controls.','ng-model directive creates a model variable which can be used with the html page and within the container control having ng-app directive.','Both of the above.','None of the above.'],
            correct: 2
          }
        ]},{
          quizname: 'ReactJs ',
          numofquiz: 'No. of Quiz: 2',
          descrip: 'A JavaScript library for building user interfaces',
          key: 'reactQuiz2',
          name: 'Quiz 2 - Intermediate',
          numOfQuestions: 5,
          allquest: [{
            question: 'What is MVC?',
            answer: ['MVC is name of an algorithm.','MVC is a software design pattern for developing web applications.','MVC is a software technique to optimize web application performance.','None of the above.'],
            correct: 1
          },
          {
            question: 'Which of the following is true about filter filter?',
            answer: ['filter filter is a function which takes text as input.',' filter filter is used to filter the array to a subset of it based on provided criteria.','Both of the above.','None of the above.'],
            correct: 1
          },
          {
            question: 'Which of the following is true about $error?',
            answer: ['$error states that form has invalid data.','$error states the exact error.','Both of the above.','None of the above.'],
            correct: 1
          },
          {
            question: 'Which components can be injected as a dependency in AngularJS?',
            answer: ['Application Module','Constants','Value','Factory'],
            correct: 0
          },
          {
            question: 'Which of the following is true about ng-model directive?',
            answer: ['ng-model directive binds the values of AngularJS application data to HTML input controls.','ng-model directive creates a model variable which can be used with the html page and within the container control having ng-app directive.','Both of the above.','None of the above.'],
            correct: 2
          }
        ]}  
     ]
     },{
      logo: {vue}.vue,
      quizname: 'VueJs',
      numofquiz: 'No. of Quiz: 2',
      descrip: ' The Progressive JavaScript Framework',
      quizlist: [
        {
          quizname: 'VueJs',
          numofquiz: 'No. of Quiz: 2',
          descrip: ' The Progressive JavaScript Framework',
          key: 'vueQuiz1',
          name: 'Quiz 1 - Basics',
          numOfQuestions: 5,
          allquest: [{
            question: 'What is MVC?',
            answer: ['MVC is name of an algorithm.','MVC is a software design pattern for developing web applications.','MVC is a software technique to optimize web application performance.','None of the above.'],
            correct: 1
          },
          {
            question: 'Which of the following is true about filter filter?',
            answer: ['filter filter is a function which takes text as input.',' filter filter is used to filter the array to a subset of it based on provided criteria.','Both of the above.','None of the above.'],
            correct: 1
          },
          {
            question: 'Which of the following is true about $error?',
            answer: ['$error states that form has invalid data.','$error states the exact error.','Both of the above.','None of the above.'],
            correct: 1
          },
          {
            question: 'Which components can be injected as a dependency in AngularJS?',
            answer: ['Application Module','Constants','Value','Factory'],
            correct: 0
          },
          {
            question: 'Which of the following is true about ng-model directive?',
            answer: ['ng-model directive binds the values of AngularJS application data to HTML input controls.','ng-model directive creates a model variable which can be used with the html page and within the container control having ng-app directive.','Both of the above.','None of the above.'],
            correct: 2
          }
        ]},{
          quizname: 'VueJs',
          numofquiz: 'No. of Quiz: 2',
          descrip: ' The Progressive JavaScript Framework',
          key: 'vueQuiz2',
          name: 'Quiz 2 - Intermediate',
          numOfQuestions: 5,
          allquest: [{
            question: 'What is MVC?',
            answer: ['MVC is name of an algorithm.','MVC is a software design pattern for developing web applications.','MVC is a software technique to optimize web application performance.','None of the above.'],
            correct: 1
          },
          {
            question: 'Which of the following is true about filter filter?',
            answer: ['filter filter is a function which takes text as input.',' filter filter is used to filter the array to a subset of it based on provided criteria.','Both of the above.','None of the above.'],
            correct: 1
          },
          {
            question: 'Which of the following is true about $error?',
            answer: ['$error states that form has invalid data.','$error states the exact error.','Both of the above.','None of the above.'],
            correct: 1
          },
          {
            question: 'Which components can be injected as a dependency in AngularJS?',
            answer: ['Application Module','Constants','Value','Factory'],
            correct: 0
          },
          {
            question: 'Which of the following is true about ng-model directive?',
            answer: ['ng-model directive binds the values of AngularJS application data to HTML input controls.','ng-model directive creates a model variable which can be used with the html page and within the container control having ng-app directive.','Both of the above.','None of the above.'],
            correct: 2
          }
        ]}  
     ]
     },{
      logo: {node}.node,
      quizname: 'NodeJs',
      numofquiz: 'No. of Quiz: 2',
      descrip: ' JavaScript runtime built on Chrome\'s V8 JavaScript engine',
      quizlist: [
        {
          quizname: 'NodeJs',
          numofquiz: 'No. of Quiz: 2',
          descrip: ' JavaScript runtime built on Chrome\'s V8 JavaScript engine',
          key: 'nodeQuiz1',
          name: 'Quiz 1 - Basics',
          numOfQuestions: 5,
          allquest: [{
            question: 'What is MVC?',
            answer: ['MVC is name of an algorithm.','MVC is a software design pattern for developing web applications.','MVC is a software technique to optimize web application performance.','None of the above.'],
            correct: 1
          },
          {
            question: 'Which of the following is true about filter filter?',
            answer: ['filter filter is a function which takes text as input.',' filter filter is used to filter the array to a subset of it based on provided criteria.','Both of the above.','None of the above.'],
            correct: 1
          },
          {
            question: 'Which of the following is true about $error?',
            answer: ['$error states that form has invalid data.','$error states the exact error.','Both of the above.','None of the above.'],
            correct: 1
          },
          {
            question: 'Which components can be injected as a dependency in AngularJS?',
            answer: ['Application Module','Constants','Value','Factory'],
            correct: 0
          },
          {
            question: 'Which of the following is true about ng-model directive?',
            answer: ['ng-model directive binds the values of AngularJS application data to HTML input controls.','ng-model directive creates a model variable which can be used with the html page and within the container control having ng-app directive.','Both of the above.','None of the above.'],
            correct: 2
          }
        ]},{
          quizname: 'NodeJs',
          numofquiz: 'No. of Quiz: 2',
          descrip: ' JavaScript runtime built on Chrome\'s V8 JavaScript engine',
          key: 'nodeQuiz2',
          name: 'Quiz 2 - Intermediate',
          numOfQuestions: 5,
          allquest: [{
            question: 'What is MVC?',
            answer: ['MVC is name of an algorithm.','MVC is a software design pattern for developing web applications.','MVC is a software technique to optimize web application performance.','None of the above.'],
            correct: 1
          },
          {
            question: 'Which of the following is true about filter filter?',
            answer: ['filter filter is a function which takes text as input.',' filter filter is used to filter the array to a subset of it based on provided criteria.','Both of the above.','None of the above.'],
            correct: 1
          },
          {
            question: 'Which of the following is true about $error?',
            answer: ['$error states that form has invalid data.','$error states the exact error.','Both of the above.','None of the above.'],
            correct: 1
          },
          {
            question: 'Which components can be injected as a dependency in AngularJS?',
            answer: ['Application Module','Constants','Value','Factory'],
            correct: 0
          },
          {
            question: 'Which of the following is true about ng-model directive?',
            answer: ['ng-model directive binds the values of AngularJS application data to HTML input controls.','ng-model directive creates a model variable which can be used with the html page and within the container control having ng-app directive.','Both of the above.','None of the above.'],
            correct: 2
          }
        ]}  
     ]
     },
  ]
  }

  renderQuiz(logo, quizname, numofquiz, descrip, quizlist){
    console.log()
    return (<div className='column' >
  
  
  
            <div class='ui card'>
  <img src={logo} class='ui image' />
  <div class='content'>
    <div class='header'>{quizname}</div>
    <div class='meta'>
      <span class='date'>{numofquiz}</span>
    </div>
    <div class='description'>{descrip}</div>
  </div>
  <div class='extra content'>
  <Button animated color='teal' onClick={() => {
            this.props.main.setState({cate: true})
            this.props.main.setState({cateSelected: quizlist});
            this.props.main.setState({loc: 0});
            localStorage.setItem('cateSelected', JSON.stringify(quizlist))
            localStorage.setItem('quiz', '');
            localStorage.setItem('cate', true);
            localStorage.setItem('loc',0)
        }}>
            <Button.Content visible>Take Quiz</Button.Content>
            <Button.Content hidden>
            <Icon name='arrow right' />
            </Button.Content>
          </Button>
  </div>
</div>
</div>
    );
  }
  
    render(){
        return (
  <div className='ui container'>
  <div className='ui padded two column grid'>
  { this.state.map( q =>{
      return this.renderQuiz(q.logo, q.quizname, q.numofquiz, q.descrip, q.quizlist)
  } ) }
  </div>      
  </div>
  );
    }
}

export default Quiz;