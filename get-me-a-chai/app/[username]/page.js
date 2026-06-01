
import React from 'react'
import PaymentPage from '../../components/PaymentPage'
import { notFound } from 'next/navigation'
import connectDB from '@/db/connectDb'
import User from '@/models/User'
const Username = async  ({ params }) => {
  const {username} = await params
  let u= await User.findOne({username:username})
  if(!u){
    notFound()
  }
  return (<>
       <PaymentPage username={username}/>
  
  </>
  )
}

export default Username
export async function generateMetadata({ params }) {
  const { username } = await params
  return {
    title: `Support ${username} - Get me a Chai`,
    description: `Support ${username} by buying them a chai and help them achieve their dreams!`,
  }
}
