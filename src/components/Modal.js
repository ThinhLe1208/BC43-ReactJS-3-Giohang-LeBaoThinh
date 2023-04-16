import React, { Component } from 'react';

export default class Modal extends Component {
    render() {
        return (
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Product detail</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <div className="card">
                                <img className="card-img-top" src={this.props.content.image} alt="Title" />
                                <div className="card-body text-start">
                                    <h4 className="card-title">{this.props.content.name}</h4>
                                    <p className="card-text mb-2"><b>Price : </b>{this.props.content.price}$</p>
                                    <p className="card-text"><b>Description : </b>{this.props.content.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
