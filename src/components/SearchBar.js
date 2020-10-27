import React from'react';

class SearchBar extends React.Component {
    //1. init term in state
    state = { searchTerm : ''};

    onInputChange = (e) => {
        this.setState({ searchTerm : e.target.value });
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        //TODO: Make sure we call call-back from parent component
        this.props.onFormSubmit(this.state.searchTerm)

    };

    render() {
        return (
            <div className=" search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label> Video Search</label>
                        <input type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;