import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'

const steps=[
    "Placed",
    "Order Conformation",
    "shipped",
    "Out For Delivery",
    "Delivered"
]

const OrderTreaker = ({activeStep}) => {
  return (
    <div className='w-full'>
        <Stepper activeStep={activeStep} alternativeLabel>
               {steps.map((lable)=><Step>
                 <StepLabel sx={{color:"#9155FD",fontSize:"44px"}}>{lable}</StepLabel>
               </Step>)}
        </Stepper>
    </div>
  )
}

export default OrderTreaker
