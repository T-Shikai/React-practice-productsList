import React from 'react';
import CategoryRow from './categoryRow';
import ProductRow from './productRow';

class ProductTable extends React.Component {
  render() {
    const word = this.props.wordToSearch;
    const checked = this.props.checked;

    const rows = [];
    let lastCategory = null;

    this.props.products.forEach((product) => {
      if (product.name.indexOf(word) === -1){
        return;
      }
      if (checked && !product.stocked){
        return;
      }
      if (product.category !== lastCategory){
        rows.push(
          <CategoryRow
            category = {product.category}
            key = {product.category}
          />
        );
      }
      rows.push(
        <ProductRow 
          product = {product}
          key = {product.name}
        />
      );
      lastCategory = product.category;
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default ProductTable;