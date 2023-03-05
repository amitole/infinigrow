import React, { useState } from 'react'

const BudgetInput = ({id, name, amount, update }) => {
    const [num, setNum] = useState('')

    const handleChange = (event) => {
        setNum(event.target.value);
        update(id, event.target.value)
    };

    return (
        <div className='textfiled'>
            <label>{name}</label>
            <div className='inputfiled'>
                <div className='dollar'>$</div>
                <input className='inp' type="number" value={amount ? amount : num} onChange={handleChange} />
            </div>
        </div>
    )
}

export default BudgetInput