'use server'
import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDB from "@/db/connectDb"
import User from "@/models/User"

export const initiate = async (amount, to_user, paymentform) => {
    await connectDB()
      let user=await User.findOne({username:to_user})
   const secret=user.razorpaySecret
    var instance = new Razorpay({
        key_id: user.razorpayId,
        key_secret: secret})
       

    
    instance.orders.create({
        amount: 50000,
        currency: "INR",
        receipt: "receipt#1",
        notes: {
            key1: "value3",
            key2: "value2"
        }
    })
    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }
    let x = await instance.orders.create(options)
    await Payment.create({
        oid: x.id, amount: amount, to_user: to_user, name: paymentform?.name || "Anonymous",
        message: paymentform.message,
    })
    return x
}

export const fetchuser = async (username) => {
    await connectDB()
    let u = await User.findOne({ username: username }).lean()
    // let user=u.toObject({flattenobjectIds:true})
    // u._id = u._id.toString()
    // return u
      if (!u) {
        return null   // ❗ important
    }

    return {
        ...u,
        _id: u._id.toString()
    }
}

export const fetchpayments = async (username) => {
    await connectDB()
    let p = await Payment.find({ to_user: username, done: true }).sort({amount:-1}).limit(10).lean()
    p = p.map((payment) => {
        payment._id = payment._id.toString()
        return payment
    })
    return p
}
export const updateProfile = async(data ,oldusername)=>{
    await connectDB()
    let ndata=Object.fromEntries(data)
    if(oldusername!==ndata.username){ 
    let u = await User.findOne({ username: ndata.username })
    if(u){
        return{error:"Username already taken"}
    }
    await User.updateOne({email:ndata.email},ndata)
    await Payment.updateMany({to_user:oldusername},{to_user:ndata.username})
    }
    else{
    await User.updateOne({email:ndata.email},ndata)
    }
}