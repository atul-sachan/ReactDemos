import React, { Component } from 'react'

class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            term:''
        }
    }



    onInputChange(event){
        this.setState({term: event.target.value});
        // console.log(event.target.value);
    }

    onFormSubmit(event){
        event.preventDefault();
        this.props.onSubmit(this.state.term)
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" value={this.state.term} onChange={this.onInputChange}/>
                    </div>

                </form>
            </div>
        )
    }
}

export default SearchBar
