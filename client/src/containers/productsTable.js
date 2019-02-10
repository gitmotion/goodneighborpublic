import React, {Component} from 'react';
import {connect} from 'react-redux';

class ProductsTable extends Component {
  productLoop () {
    return this.props.products.map((product) => {
      return (
        <tr key={product.id}>
          <td><img className="product-table-img" src={product.imageUrl} alt=""/></td>
          <td>{product.name}</td>
          <td>{product.visit}</td>
          <td>{product.price}</td>
        </tr>

      );
    });
  }
  render() {

    return (
      <div className="table-responsive">
        <table className="table table-consended product-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Visits</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.productLoop()}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    products: state.productsTable
  }
}

export default connect(mapStateToProps)(ProductsTable);
