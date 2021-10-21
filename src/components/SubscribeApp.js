import './SubscribeApp.css'
import TextPresentation from './TextPresentation'; 
import SubscriptionBox from './SubscriptionBox'; 
import WhyBox from './WhyBox'; 

function SubscribeApp(props){
    return (
        <div className="SubscribeApp" >
            <TextPresentation/>
            <div className="twoBoxContainer" >
                <SubscriptionBox/>
                <WhyBox/>
            </div>
        </div>
    )
}
export default SubscribeApp; 