import React from 'react';

import './errorHoc.css';

export class ErrorHocComponent extends React.Component {
    state = {
        tengoError: false,
        msj: ''
    }
    componentDidCatch(error) {
        this.setState({
            hasError: true,
            msj: error.msj
        })
    }
    render() {
        if (this.state.hasError) {
            return (
                <div className='errorHoc'>
                    error con HOC!
                    {this.state.msj}
                </div>

            );
        }
        return this.props.children
    }


}

//se crea un componente envolvente para ser utilizado por cualquier otro.
//este manejara el error . 
export const withError = (Component) => {
    class ErrorHocComponent extends React.Component {
        state = {
            tengoError: false,
            msj: ''
        }
        componentDidCatch(error) {
            this.setState({
                hasError: true,
                msj: error.msj
            })
        }
        render() {
            if (this.state.hasError) {
                return (
                    <div className='errorHoc'>
                        error con HOC!
                        {this.state.msj}
                    </div>

                );
            }
            return <Component {...this.props} />
        }


    }
    //displayname sirve para nombrar al componente  en las heramintas de desarrollo.
    ErrorHocComponent.displayName = 'withError';
    return ErrorHocComponent;
}


