import React from 'react';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        // var metro = 'Los_Angeles'
        // axios.get(`'/nav/${metro}'`)
        axios.get('/nav/')
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick} >Test</button>
            </div>
        )
    }
}

export default App;