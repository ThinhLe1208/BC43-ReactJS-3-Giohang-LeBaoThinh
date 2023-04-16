import React, { Component } from 'react';
import ProductItem from './ProductItem';

export default class ProductList extends Component {

    renderProductItem = () => {
        return this.props.productsData.map((item, index) => {
            return (
                <ProductItem key={index} item={item} setStateModal={this.props.setStateModal} />
            );
        });
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.renderProductItem()}
                </div>
            </div>
        );
    }
}
