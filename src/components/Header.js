import React,{Fragment} from "react";
import Btn from './Btn';


import './Header.css'

const Header = () => {
    return(
        <Fragment>
            <div className="title">Build your budget plan</div>
            <div className="subTitle">Setup channels</div>
            <div className='second_subtitle'>
                <div className="second_subtitle_text" >Setup your added channels by adding baseline budgets out of your total budget. See the forecast impact with the help of tips and insights.</div>
                <Btn />
            </div>
        </Fragment>
    )
}

export default Header;