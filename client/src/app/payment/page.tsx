import EsewaForm from '@/components/payments/Esewaform'
import React from 'react'

const page = () => {
  return (
    <div>
        <EsewaForm
          amount={100} 
          productId="12345" 
        />
    </div>
  )
}

export default page