import React from 'react';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            cities: [],
            cityMatch: [],
            cuisineMatch: [],
            restaurantMatch: []
        }
        this.handleClickNav = this.handleClick.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }
    handleClickNav() {
        let metro = 'Los_Angeles'
        axios.get(`/api/nav/${metro}`)
            .then(data => this.setState({
                cities: data.data
            }))
            .catch(err => console.log(err))
    }

    handleInput(e) {
        this.setState({
            text: e.target.value
        })
        if (this.state.text.length >= 1) {
            // let query = this.state.text
            let searched = this.state.text;
            axios.get(`/api/search/${searched}`)
                .then(data => {
                    let data = data.data;
                    this.setState({
                        cityMatch: data.cities,
                        cuisineMatch: data.cuisines,
                        restaurantMatch: data.restaurantMatch
                    })
                })
                .catch(err => console.log(err))
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClickNav} >Test</button>

                <button onClick

                <input onChange={this.handleInput}></input>
            </div >
        )
    }
}

export default App;