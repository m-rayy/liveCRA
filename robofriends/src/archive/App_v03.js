import React, { Component } from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
import { robots } from './robots';


// const App = () => {
    // class App extends React.Component {
class App extends Component {
    constructor() {
        super()
        // STATE >> props (parents tell childs their properties)
        this.state = {
            robots: robots,
            searchfield: ''    
        }
    }

    // onSearchChange(event) = {
    // this here is the input from SearchBox not the App state!
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render () {
        const filteredRobots = this.state.robots.filter(robot => {
            return (robot.name.toLowerCase().includes(
                // https://www.w3schools.com/jsref/jsref_includes.asp
                // https://www.w3schools.com/jsref/jsref_tolowercase.asp
                this.state.searchfield.toLowerCase()
            ));
        })
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                {/* <SearchBox /> */}
                <SearchBox searchChange={this.onSearchChange}/>
                {/* <CardList robots={robots} /> */}
                {/* <CardList robots={this.state.robots}/> */}
                <CardList robots={filteredRobots}/>
            </div>
        );
    }
}

export default App;