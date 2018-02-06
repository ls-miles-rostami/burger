import React, {Component} from 'react';
import Checkoutsummary from '../../components/Order/CheckoutSummary/Checkoutsummary';
import {Route, Redirect} from 'react-router-dom'
import ContactData from './ContactData/ContactData';
import {connect} from 'react-redux'



class Checkout extends Component {


    checkoutCancelled = () => {
        this.props.history.goBack();
    }

    checkoutContinued = () => {
        this.props.history.replace('./checkout/contact-data')
    }

    render(){
        let summary = <Redirect to='/'/>
        
        if(this.props.ings){
            const purchaseRedirect = this.props.purchased ? <Redirect to='/' /> : null
           summary = (
            <div>
                {purchaseRedirect}
                <Checkoutsummary ingredients={this.props.ings} checkoutCancelled={this.checkoutCancelled} checkoutContinued={this.checkoutContinued}/>
                <Route path={this.props.match.path + '/contact-data'} component={ContactData}/>
            </div>
            )
        }
        return(
               summary
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    }
}



export default connect(mapStateToProps)(Checkout);