import React from 'react';

class Search extends React.Component {

handleUpdate = (event) => {
    this.props.searchFunction(event.target.value);
  }

  render(){
    return (
      <input
      type="text"
      className="form-search form-control"
      onChange={this.handleUpdate}
      />
    );
  }
}

export default Search;
