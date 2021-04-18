import React from 'react';
import SearchBar from './searchBar';
import ProductTable from './productTable';

class List extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      wordToSearch: '',
      checked: false,
    };
  }

  handleWordChange = (word) => {
    this.setState({
      wordToSearch: word
    });
  }

  handleCheck = (bool) => {
    this.setState({
      checked: bool
    })
  }

  render() {
    return (
      <div>
        <SearchBar
          wordToSearch = {this.state.wordToSearch}
          checked = {this.state.checked}
          onWordChange = {this.handleWordChange}
          onCheck = {this.handleCheck}
        />
        <ProductTable
          products={this.props.products}
          wordToSearch = {this.state.wordToSearch}
          checked = {this.state.checked}
        />
      </div>
    );
  }
}

export default List;