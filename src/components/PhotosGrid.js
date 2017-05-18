import React, { Component } from 'react';

function Photo(props){
  let selected=props.selected ? "selected" : ""
  return (
    <div className={"photosgrid-image "+ selected} onClick={()=>{console.log("ok");props.onSelect({id:props.id, url:props.urls.small})} }>
      <img src={props.urls.small} alt=""/>
    </div>
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
  handleSelect(photo){
    console.log(photo);
    let exists=this.state.choosed.find((p)=>p.id===photo.id)
    if(!exists){
      this.setState({choosed: this.state.choosed.concat(photo)})
      this.props.onSelect(photo)
    }else{
      let s=this.state.choosed.reduce((all, p)=>{
        if(p.id!==photo.id){
          all.push(p)
        }
        return all;
      }, [])
      this.setState({choosed: s})
    }
  }
  getSelection(){
    return this.state.choosed;
  }
  render(){
    console.log("CHOOSED", this.state.choosed)

    return(
      <div className="photosgrid">
        {this.props.photos.map(p => {
          let selected= this.state.choosed.find((c)=> c.id===p.id)
          return (<Photo selected={!!selected}onSelect={this.handleSelect.bind(this)} key={p.id} {...p}/>)}  )
        }
        {this.props.photos.length>0 && <LoadMore onClick={this.handleLoadMore.bind(this)}/>}
      </div>
    )
  }
}


export default PhotosGrid;
