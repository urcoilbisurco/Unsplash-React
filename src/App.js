import React, { Component } from 'react';
import './App.css';
import unsplash from "./utils/unsplash";
import SearchBar from "./components/SearchBar";
import PhotosGrid from "./components/PhotosGrid";
import Loading from "./components/Loading";
class Unsplash extends Component{
  constructor(props){
    super(props)
    this.state=this.defaultState();
  }
  defaultState(){
    return {
      photos:[],
      word:undefined,
      choosed:[],
      loading:false,
      index:1
    }
  }
  componentDidMount(){
    this.onSearch("home");
  }
  onSearch(word){
    console.log("SEARCH", word)
    //this.setState(this.defaultState())
    this.setState({loading:true, word:word})
    this.loadPhotos()//unsplash.photos.searchPhotos(word, undefined, this.state.index, 2).then(res => {return res.json()})
    .then(photos=>{
      console.log(photos)
      this.setState({loading:false, photos:photos})
    })
  }
  loadPhotos(){
    console.log(this.state)
    console.log(this.state.word, [], this.state.index, 2);
    return unsplash.photos.searchPhotos(this.state.word, [], this.state.index, 2).then(res => {return res.json()})
  }
  handleLoadMore(){
    this.setState({index:this.state.index+1});
    this.loadPhotos()
    .then(photos=>{
      console.log(photos)
      this.setState({photos:this.state.photos.concat(photos)})
    })
  }
  render(){
    return(
      <div className="App">
        <SearchBar onSearch={this.onSearch.bind(this)}/>
        {this.state.loading && <Loading/>}
        {!this.state.loading && <PhotosGrid loadMore={this.handleLoadMore.bind(this)} photos={this.state.photos} />}
      </div>
    )
  }
}


export default Unsplash;
