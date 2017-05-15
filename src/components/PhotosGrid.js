import React, { Component } from 'react';

function Photo(props){
  return (
    <img className="photosgrid-image" src={props.urls.small} alt=""/>
  )
}
function LoadMore(props){
  return (
    <div onClick={props.onClick} className="photosgrid-loadmore">Load more...</div>
  )
}
class PhotosGrid extends Component{
  constructor(props){
    super(props)
    this.state={
      choosed:[],
    }
  }
  handleLoadMore(){
    this.props.loadMore()
  }
  render(){
    return(
      <div className="photosgrid">
        {this.props.photos.map(p => <Photo key={p.id} {...p}/>)}
        {this.props.photos.length>0 && <LoadMore onClick={this.handleLoadMore.bind(this)}/>}
      </div>
    )
  }
}


export default PhotosGrid;
