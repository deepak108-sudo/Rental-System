import { Slider } from '@mui/material'
import { Box, Typography } from '@mui/material'
import React from 'react'
import { useValue } from '../../context/ContextProvider'

const marks=[
    {value:0, label:'Rs0'},
    {value:25000,label:'Rs25000'},
    {value:50000,label:'50000'},

];

const PriceSlider = () => {
    const {state:{priceFilter},dispatch,}=useValue();
  return (
   <Box sx={{mt:5}}>
        <Typography>Max Price: {'Rs'+ priceFilter}</Typography>
        <Slider
            min={0}
            max={50000}
            defaultValue={500}
            valueLabelDisplay='auto'
            marks={marks}
            value={priceFilter}
            onChange={(e,price)=>dispatch({type:'FILTER_PRICE',payload:price})}
        />
   </Box>
  )
}

export default PriceSlider;


