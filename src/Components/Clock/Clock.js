import React, { Component } from 'react';

class Clock extends Component {
  constructor(props){
    super(props);
    this.state = {
        min: 4,
        sec: 60
    }
  }
  timer() {

    this.setState({
        sec: this.state.sec - 1
    })
    if(this.state.sec <= 0){
        this.setState({
            min: this.state.min - 1,
            sec: 60
        })
        
    }
    if( this.state.min == -1){
      let q = JSON.parse(localStorage.getItem('quizSelected')).allquest[localStorage.getItem('loc')];
      let info = JSON.parse(localStorage.getItem('quizSelected'));

      var stat
                         let perc = parseInt(localStorage.getItem('score')) / info.numOfQuestions  * 100;
                         if(perc < 60){
                            stat = 'Failed'
                         }else{
                            stat = 'Passed' 
                         }
                         
                         let arr = this.props.main.state.submitResults;
                         arr.push({
                              quizname: info.quizname,
                              name: info.name,
                              percentage: perc.toFixed(2),
                              status: stat,
                              key: info.key
                         });
                         console.log(arr)
                         console.log(info)
                         
                         localStorage.setItem('submitResults', JSON.stringify(arr))
                         this.props.main.setState({submitResult: arr})
                         this.props.main.setState({result: true})
                         localStorage.setItem('result', true)

                         let comparr = this.props.main.state.completed;
                         comparr.push(info.key)
                         this.props.main.setState({completed: comparr}) 
                         localStorage.setItem('completed', JSON.stringify(comparr))
        clearInterval(this.intervalId);

    }
 }

  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 1000);
  }
  componentWillUnmount(){
    clearInterval(this.intervalId);
  }
  render() {
    return(
      <div><span>Time Remaining: <h3>{this.state.min}:{this.state.sec}</h3></span></div>
    );
  }
}

export default Clock;