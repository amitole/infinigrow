import React, { useState } from 'react'

const BudgetInput = ({ name, amount }) => {
    const [num, setNum] = useState('')

    const handleChange = (event) => {
        console.log("sdds", event.target.value);
        setNum(event.target.value);
    };

    return (
        <div className='textfiled'>
            <label>{name}</label>
            <div className='inputfiled'>
                <div className='dollar'>$</div>
                <input className='inp' type="number" placeholder={amount ? amount : num} value={num} onChange={handleChange} />
            </div>
        </div>
    )
}

export default BudgetInput