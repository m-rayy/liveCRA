import React, {Component} from 'react';
import './Hello.css';

class Hello extends Component {
    render() {
        return (
            // JSX running here so class is reserved for JS
            // use className instead:
            <div className='f1 tc'>
                <h1>Hello World</h1>
                {/* <p>Welcome to React</p> */}
                <p>{this.props.greeting}</p>
            </div>
        );
    }
}

// Alternatively as a function:
// const Hello = (props) => {
//     return (
//         <div className='f1 tc'>
//         <h1>Hello World</h1>
//         <p>{props.greeting}</p>
//     </div>
//     )
// }

export default Hello;
