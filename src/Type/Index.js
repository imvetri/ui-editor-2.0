import React, { Component } from 'react';

// Styles.

import "./Style.css";

// Component

import Input from "../Input";

class Type extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <p >
                    <table >
                        <tr>
                            <th>
                                <Input value="Firstname"/></th>
                        </tr>
                        <tr>
                            <td> <Input value="Firstname"/></td>
                        </tr>
                    </table>
                </p>
            </div>
        );
    }
}

export default Type;
