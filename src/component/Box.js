import React, { Component } from 'react'
import "../App.css"
export default class  extends Component {
   
    result=()=>{if(this.props.name=="Computer"&&this.props.result!=""&&this.props.result!="tie"){
        return this.props.result=="win"?"lose":"win"
        }else{return this.props.result}} 
   
  render(props) {
    return (
      <div className={`box-style ${this.result()}`}>
        <div className="box-Detail">{this.props.name}</div>
        <img className="img-style" src={this.props.item && this.props.item.img}/>
        <div className="box-Detail">{this.result()}</div>
        </div>
      
    )
  }
}
