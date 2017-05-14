import React, { Component } from 'react';
import './App.css';
import unsplash from "./utils/unsplash";
import SearchBar from "./components/SearchBar";
import PhotosGrid from "./components/PhotosGrid";

class Unsplash extends Component{
  constructor(props){
    super(props)
    this.state={
      photos:[],
      word:undefined,
      choosed:[],
      loading:false
    }
  }
  onSearch(word){
    console.log("SEARCH", word)
    unsplash.photos.searchPhotos(word).then(res => {return res.json()})
    .then(photos=>{
      console.log(photos)
      this.setState({photos:photos})
    })
  }
  render(){
    return(
      <div>
        <SearchBar onSearch={this.onSearch.bind(this)}/>
        <PhotosGrid photos={this.state.photos} />
      </div>
    )
  }
}


export default Unsplash;
