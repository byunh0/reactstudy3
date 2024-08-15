import React, { Component } from 'react'
import Box from "./component/Box"
import {useState} from "react"
import "./App.css"


export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
    userChange:"",
    comperChange:"",
    result:""
    }
    
  }

  
 //choice는 처음생성할 때 있을 것 같긴한데 버튼을 눌러야 생기는데 constructor에 안두는게 맞는지 궁금합니다.
  choice={
    //rock,scissors,paper은 key
    rock:{
      name: "Rock",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiRFg__DyoChQOV04m72Z7XcZJ_ejBQ61QNA&s"
    },

    scissors:{
      name: "Scissors",
      img: "https://img.freepik.com/premium-vector/scissor-isolated-white-background-vector-illustration_454461-5617.jpg"
    },
    
    paper:{
       name: "Paper",
       img:"https://png.pngtree.com/element_our/20190531/ourlarge/pngtree-a-notebook-paper-image_1297634.jpg"
    }
  }
 

  play=(user)=>{
   
    //setState는 함수
   this.setState({
    userChange:this.choice[user],
    computerChange: this.randomplay(),
    result: this.userResult(this.choice[user],this.randomplay())
   })
  }
 
  randomplay=()=>{
    //일반함수안에서는 변수 값을 지정해주어야 함.
    const computerArray = Object.keys(this.choice); // [rock, scissors, paper]
    const randomnum = Math.floor(Math.random() * computerArray.length);
    const final = computerArray[randomnum];
    return this.choice[final];
  }
  
  userResult=(user,computer)=>{
    if(user.name==computer.name){return "tie"}else if(user.name=="Rock"){
      return computer.name=="Scissors"?"win":"lose"
    }else if(user.name=="Scissors"){return computer.name=="Rock"?"win":"lose"}
    else if(user.name=="Paper"){return computer.name=="Scissors"?"win":"lose"}
    
  }
  

  
 
  render() {
    return (
      <div className="bigcontainer">
        <div className="box-container">
        {/* 여튼 userChange의 소속은 state라는 점을 밝혀야함. */}
       <Box name="you" item={this.state.userChange} result={this.state.result}/>
       <Box name="Computer" item={this.state.computerChange} result={this.state.result}/>
       </div>
        <div>
          <button className="button-style" onClick={()=>this.play("scissors")}>가위</button>
          <button className="button-style"  onClick={()=>this.play("rock")}>바위</button>
          <button className="button-style"  onClick={()=>this.play("paper")}>보</button>
        </div>
        <div className="result-Style">{this.state.result}</div>
      </div>
    )
  }
}
