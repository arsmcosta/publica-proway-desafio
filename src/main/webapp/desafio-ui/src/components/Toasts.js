import React, {Component} from 'react';

import {Toast} from 'react-bootstrap';

export default class Toasts extends Component {
    render(){
        const toastCss = {
            postion: 'absolut',
            top: '10px',
            right: '10px',
            zIndex: '1',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
        };

        return(
            <div style={this.props.children.show ? toastCss : null}>
                <Toast className={"border border-success bg-success text-white"} show={this.props.children.show}>
                    <Toast.Header className={"bg-success text-white"} closeButton={false}>
                        <strong className="mr-auto">Ok</strong>
                    </Toast.Header>
                    <Toast.Body>
                        {this.props.children.message}
                    </Toast.Body>
                </Toast>
            </div>

        );
    };

}