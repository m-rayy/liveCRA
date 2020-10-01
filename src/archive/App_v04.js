import React, { Component } from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
// import { robots } from './robots';


// const App = () => {
    // class App extends React.Component {
class App extends Component {
    constructor() {
        super()
        // STATE >> props (parents tell childs their properties)
        this.state = {
            // robots: robots,
            robots: [],
            searchfield: ''    
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {this.setState({ robots: users})});
            // .then(users => {});
    }

    // onSearchChange(event) = {
    // this here is the input from SearchBox not the App state!
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render () {
        const filteredRobots = this.state.robots.filter(robot => {
            // https://www.w3schools.com/jsref/jsref_includes.asp
            // https://www.w3schools.com/jsref/jsref_tolowercase.asp
            return (robot.name.toLowerCase().includes(
                this.state.searchfield.toLowerCase()
            ));
        })
        if (this.state.robots.length === 0) {
            return (
                <div className='tc'>
                    <h1 className='f1'>Loading...</h1>
                </div>
            );
        } else {
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
}

export default App;