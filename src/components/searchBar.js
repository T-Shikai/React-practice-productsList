import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input 
          type="text" 
          placeholder="Search..."
          value={this.props.wordToSearch}
          onChange={(e)=>this.props.onWordChange(e.target.value)}
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.checked}
            onChange={(e)=>this.props.onCheck(e.target.checked)}
          />
          {' '}
          在庫あり商品のみ表示
        </p>
      </form>
    );
  }
}

export default SearchBar;