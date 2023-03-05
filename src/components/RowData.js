import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


import './RowData.css';
import BudgetInput from './BudgetInput';

const RowData = () => {
    const [budget, setBudget] = useState('');
    const [amount, setAmount] = useState(0);
    const [totalAmount, setTotalAmount] = useState('');
    const [displayVal, setDisplayVal] = useState('');
    const [alignment, setAlignment] = useState('left');
    const [budgetMounts, setBudgetMounts] = useState([{ id: 1, name: "Jan 21", amount: 0 }, { id: 2, name: "Fub 21", amount: 0 }, { id: 3, name: "Mar 21", amount: 0 }, { id: 4, name: "Apr 21", amount: 0 }, { id: 5, name: "May 21", amount: 0 }, { id: 6, name: "Jun 21", amount: 0 }, { id: 7, name: "Jul 21", amount: 0 }, { id: 8, name: "Aug 21", amount: 0 }, { id: 9, name: "Sep 21", amount: 0 }, { id: 10, name: "Oct 21", amount: 0 }, { id: 11, name: "Nov 21", amount: 0 }, { id: 12, name: "Dec 21", amount: 0 },]);


    const handleChange = (event) => {
        setBudget(event.target.value);
    };

    const handleAmountBuget = (event) => {
        handleDcimalSeparator(event);
        setAmount(event.target.value);
    };

    const handleAlignment = (
        event,
        newAlignment,
    ) => {
        setAlignment(newAlignment)
    };

    const handleDcimalSeparator = (e) => {


        const value = e.target.value;
        const clean = value.replace(/,/g, "");
        const regex = /^[0-9]*\.?[0-9]*$/;

        if (value && clean.match(regex)) {
            if (!value.includes(".")) {
                const formatted = new Intl.NumberFormat().format(parseFloat(clean));
                setDisplayVal(formatted);
            } else {
                setDisplayVal(value);
            }
        } else {
            setDisplayVal("");
        } 
    };

    const splittingAmount = () => {
        return parseInt(amount.toString().replace(/,/g, '')) / 12
    }

    const updateAmount = (id ,value) => {
       
        const newState = budgetMounts.map(obj =>
            obj.id === id ? { ...obj, amount: value } : obj
        );
        setBudgetMounts(newState);

        setTotalAmount(newState.map(date => parseInt(date.amount)).reduce((a, b) => a + b));

    }

    const budgetFeilds = budgetMounts.map(date => <BudgetInput key={date.id} id={date.id} name={date.name} amount={alignment === 'left' ? splittingAmount()  : date.amount} update={updateAmount} />)

    return (
        <div className='container'>
            <Box sx={{ marginBottom: 5 }} fullWidth>
                <FormControl sx={{ minWidth: 120, display: 'flex', flexDirection: 'row' }} fullWidth>
                    <InputLabel id="demo-simple-select-label">Budget</InputLabel>
                    <Select
                        sx={{ minWidth: 120, marginRight: 10 }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={budget}
                        label="Budget"
                        onChange={handleChange}
                    >
                        <MenuItem value={'Annually'}>Annually</MenuItem>
                        <MenuItem value={'Monthly'}>Monthly </MenuItem>
                        <MenuItem value={'Quarterly'}>Quarterly </MenuItem>
                    </Select>

                    <TextField sx={{ minWidth: 120, marginRight: 10 }} value={alignment === 'right' ? totalAmount : displayVal} onChange={handleAmountBuget} disabled={alignment === 'right'} id="outlined-basic" label={budget !== '' ? `Baseline [${budget}] Budget` : `Baseline Budget`} variant="outlined" />

                    <ToggleButtonGroup sx={{ minWidth: 120 }}
                        color="primary"
                        value={alignment}
                        exclusive
                        onChange={handleAlignment}
                        aria-label="Budget Allocation"
                    >
                        <ToggleButton sx={{ minWidth: 120 }} value="left" aria-label="left aligned">Equal</ToggleButton>
                        <ToggleButton sx={{ minWidth: 120 }} value="right" aria-label="left aligned">Manual</ToggleButton>
                    </ToggleButtonGroup>
                </FormControl>
            </Box>
            <Box sx={{ opacity: alignment === 'left' ? 0.5 : 1, pointerEvents: alignment === 'left' ? "none" : "auto" }} >
                <div className='title-text'>Budget Breakdown</div>
                <div className='sub-text'>By default, your budget will be equally divided throughout the year. You can manually change the budget allocation, either now or later.</div>
                <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                    {budgetFeilds}
                </Box>
            </Box>
        </div>

    )
}

export default RowData