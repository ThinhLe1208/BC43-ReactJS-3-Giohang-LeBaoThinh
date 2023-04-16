import React, { Component } from 'react';

export default class ProductItem extends Component {
    render() {
        let { item } = this.props;

        return (
            <div className="col-4 mb-5">
                <div className="card">
                    <img className="card-img-top" src={item.image} alt="Title" />
                    <div className="card-body text-start">
                        <h4 className="card-title">{item.name}</h4>
                        <p className="card-text">{item.price} $</p>
                    </div>
                    <div className="card-footer text-start">
                        <button className="btn btn-success" onClick={() => { this.props.setStateModal(item); }} data-bs-toggle="modal" data-bs-target="#exampleModal">Chi tiết</button>
                    </div>
                </div>
            </div>
        );
    }
}
