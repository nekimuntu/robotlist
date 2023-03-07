import './App.css';
import React, { Component } from 'react';
import CardList from './Component/CardList';
import SearchBox from './Component/SearchBox';
import Scroll from './Component/Scroll';

class App extends Component{
 
  constructor(){
     //call the constructor of Component needs to call it because App herit from it
    super()
    this.state ={
      robots: [],
      searchField : "", 
      count: 0
    }
  }
  //We place it here to not have to fetch all the time but once its loaded
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(robot=> this.setState({robots:robot}));
}

  onSearchChanged = (event) => {
    this.setState({searchField:event.target.value}) ;   
  }

  render(){
    //Destructuring :
    const {robots, searchField} = this.state
    const filteredRobots = 
    robots.filter(robot =>
        {
          return robot.name.toLowerCase().includes(searchField.toLowerCase())
        });    
        if(robots.length === 0){
          //In case its taking long to load the Json file
         return(<h1 className="tc">Loading...</h1>) 
        }else{
          return(
            
              <div className='tc'>    
              <SearchBox searchChange={this.onSearchChanged} />
              <Scroll>
                <CardList robots={filteredRobots} />
              </Scroll>
            </div>
            
          ); 
        }
  }  
}
export default App;