import React from 'react';
import axios from 'axios';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            cityMatch: [],
            cuisineMatch: [],
            restaurantMatch: []
        }
        this.handleInput = this.handleInput.bind(this);
    }
    handleInput(e) {
        this.setState({
            text: e.target.value
        })
        if (this.state.text.length >= 1) {
            let searched = this.state.text;
            axios.get(`/api/search/${searched}`)
                .then(data => {
                    let result = data.data;
                    this.setState({
                        cityMatch: result.cities,
                        cuisineMatch: result.cuisines,
                        restaurantMatch: result.restaurantMatch
                    })
                })
                .catch(err => console.log(err))
        }
    }
    render() {
        return (
            <div>
                <input onChange={this.handleInput}></input>
            </div>
        )
    }
}

export default Search;