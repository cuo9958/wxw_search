import React, { Fragment } from 'react';

export default class Layout extends React.Component {
    render() {
        return <Fragment>{this.props.children}</Fragment>;
    }
}
