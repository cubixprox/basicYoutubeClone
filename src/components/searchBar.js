import React, { Component} from 'react'

export default class searchBar extends Component {
    state = {term : ''}

    OnInputChange = (event) => {
        this.setState({ term: event.target.value })
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);
    };
    

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Search Video</label>
                        <input type="text" value={this.state.term} onChange={this.OnInputChange} />
                    </div>
                </form>
            </div>
        )
    }
}
