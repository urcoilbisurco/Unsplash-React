import React, { Component } from 'react';

class SearchBar extends Component{
  constructor(props){
    super(props)
    this.state={
      word:""
    }
  }
  handleKey(e){
    this.setState({word:e.target.value})
  }
  onSearch(){
    this.props.onSearch(this.state.word);
  }
  render(){
    return (
      <div>
        <input onKeyUp={this.handleKey.bind(this)} type="text"/>
        <button onClick={this.onSearch.bind(this)}>Search</button>
      </div>
    )
  }
}


export default SearchBar;
