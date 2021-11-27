import React from 'react'
import './nineth.css'
import LeftLeaves from "../../img/images/nineth/leftgroup.png"
import RightLeaves from "../../img/images/nineth/rightgroup.png"


const Nineth = () => {
    return (
        <div className="nineth">
            <div className="nineth-block">
                <div className="nineth-blockinside">
                    <img src={LeftLeaves} alt="leaves"/>
                    <button type="button"><span>Start This Experience Now!</span></button>
                    <img src={RightLeaves} alt="leaves"/>
                </div>
            </div>
        </div>
    )
}

export default Nineth
