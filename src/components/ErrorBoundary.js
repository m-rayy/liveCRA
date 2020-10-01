import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            // Will show error in Dev mode
            // Will show below message in Prod (can see in quick refresh)
            return(
                <div>
                    <h1>404 Oooops, I did it again</h1>
                </div>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary;