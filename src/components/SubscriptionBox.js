import React from 'react'; 
import './SubscriptionBox.css'
import Button from './Button'; 

function SubscriptionBox(props){
    return (
        <div className="SubscriptionBox" >
            <h4 className="subscriptionBoxTitle" >Monthly Subscription</h4>
            <div className="priceAndPeriodeContainer" >
                <h3 className="subscriptionBoxPrice" >$29</h3>
                <span className="subscriptionBoxPriceBy" >per month</span>
            </div>
            
            <p className="subscriptionBoxParagraph" >
                Full access for less than $1 a day
            </p>
            <Button/>
        </div>
    )
}
export default SubscriptionBox; 