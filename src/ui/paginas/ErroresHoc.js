import React, { Component } from 'react';
import { withError } from '../ErrorHoc'

class ErroresHoc extends Component {
    render() {
        //this.a();
        return (
            <div>
                <h2>Manejaré errores usando HOC</h2>
            </div>
        )
    }

}
export default withError(ErroresHoc);