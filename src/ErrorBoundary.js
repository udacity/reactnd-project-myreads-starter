import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ErrorBoundary extends Component {
constructor(props) {
    super(props);
    this.state = {error: null, errorInfo: null}
}

componentDidCatch(error, errorInfo) {
    // Catch errors in children, re-redner w the message
    this.setState({
        error: error,
        errorInfo: errorInfo
    })
}

render() {
    if (this.state.errorInfo) {
        return (
            <div>
            <h2 className="title">Oh, wow! This is embarrassing... something went wrong.<span role="img" aria-label="sad">😌</span></h2>
            <p>We will figure this out... in the meantime, uh, just don't do that again? <span role="img" aria-label="nervous">😬</span></p>
            <span><Link to="/">Home</Link> <Link to="/add">Search</Link></span>
            </div>
        )
    }
    return this.props.children;   
}
}

export default ErrorBoundary