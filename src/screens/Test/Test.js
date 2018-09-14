import React, { Component } from 'react';
import { Icon, Form, Input, Button } from 'semantic-ui-react';
import swal from 'sweetalert';
import 'semantic-ui-css/semantic.min.css';
import Clock from '../../Components/Clock/Clock'


class Test extends Component{
  constructor(props){
    super(props);
    this.state = {
      
    }
  }




renderMain(qnum, question, zero, one, two, three, correct, totalquestion, quizname, name, key){
  return (

<div>
<div class='ui segment'>
  <b>Q No: {qnum + 1} - </b> {question}
  <div class='ui section divider' />
  
  <form class='ui form'>
  <div class='field'>
    Select Answer: <b />
  </div>
  <div class='field'>
    <div class='ui radio checkbox'>
      <input type='radio'  name='radioGroup'  value= '0' />
      <label>{zero}</label>
    </div>
  </div>
  <div class='field'>
    <div class='ui radio checkbox'>
      <input type='radio'  name='radioGroup'  value= '1' />
      <label>{one}</label>
    </div>
  </div>
  <div class='field'>
    <div class='ui radio checkbox'>
      <input type='radio'  name='radioGroup'  value= '2' />
      <label>{two}</label>
    </div>
  </div>
  <div class='field'>
    <div class='ui radio checkbox'>
      <input type='radio'  name='radioGroup'  value= '3' />
      <label>{three}</label>
    </div>
  </div>
</form>
</div>

{!localStorage.getItem('done') && <button class='ui primary right floated button' role='button' onClick={() => {
                            let next = parseInt(localStorage.getItem('loc')) + 1 ;
                            let score = this.props.main.state.score;
                            let ans = document.querySelector('input[name="radioGroup"]:checked').value;
                            console.log(ans, correct)
                            
                            this.props.main.setState({loc: next})
                            localStorage.setItem('loc', next)
                            if(ans == correct){
                              this.props.main.setState({score: score + 1})
                              localStorage.setItem('score', score + 1)
                            }

                            if(totalquestion == parseInt(localStorage.getItem('loc')) + 1){
                              this.props.main.setState({done: true})
                              localStorage.setItem('done',true)
                            }
                            document.querySelector('input[name="radioGroup"]:checked').checked = false;
                            
                      }}>
                      Next
                      <i aria-hidden='true' class='right chevron icon' />
                      </button>}

  {localStorage.getItem('done') && <button class='ui primary right floated button' role='button' onClick={() => {
                         var stat
                         let perc = parseInt(localStorage.getItem('score')) / totalquestion  * 100;
                         if(perc < 60 || perc == NaN || perc == null){
                            stat = 'Failed'
                         }else{
                            stat = 'Passed' 
                         }
                         this.props.main.setState({result: true})
                         localStorage.setItem('result', true)
                         let arr = this.props.main.state.submitResults;
                         arr.push({
                              quizname: quizname,
                              name: name,
                              percentage: perc.toFixed(2),
                              status: stat,
                              key: key
                         });
                         console.log(arr)
                         this.props.main.setState({submitResult: arr})
                         localStorage.setItem('submitResults', JSON.stringify(arr))

                         let comparr = this.props.main.state.completed;
                         comparr.push(key)
                         this.props.main.setState({completed: comparr}) 
                         localStorage.setItem('completed', JSON.stringify(comparr))



                      }}>
                      Submit
                      <i aria-hidden='true' class='right chevron icon' />
                      </button>}
</div>

);
}
  
    render(){
      let q = JSON.parse(localStorage.getItem('quizSelected')).allquest[localStorage.getItem('loc')];
      let info = JSON.parse(localStorage.getItem('quizSelected'));
      
        return (
  <div className='ui container'>
  {<Clock main={this.props.main} />}
            { 
              this.renderMain(parseInt(localStorage.getItem('loc')), q.question, q.answer[0], q.answer[1], q.answer[2], q.answer[3], q.correct, info.numOfQuestions, info.quizname, info.name, info.key)
          }
  </div>      
  );
    }
}

export default Test;