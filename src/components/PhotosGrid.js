import React, { Component } from 'react';

function Photo(props){
  return (
    <img src={props.urls.small} alt=""/>
  )
}

class PhotosGrid extends Component{
  constructor(props){
    super(props)
    this.state={
      choosed:[]
    }
  }
  render(){
    return(
      <div className="photos-container">
        {this.props.photos.map(p => <Photo key={p.id} {...p}/>)}
      </div>
    )
  }
}


export default PhotosGrid;
