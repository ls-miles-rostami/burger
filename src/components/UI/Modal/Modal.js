import React, { Component } from 'react'
import Aux from '../../../hoc/Aux/Aux'
import Backdrop from '../Backdrop/Backdrop'
import classes from './Modal.css'

class Modal extends Component {

    // we are using shouldComponentUpdate because we want to prevent the orderSummary component to keep 
    // re-rendering even when the modal is not visible since that would be useless.
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children
    }

    render() {
        return (
            <Aux>
                <Backdrop clicked={this.props.modalClosed} show={this.props.show} />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}
                >
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}

export default Modal