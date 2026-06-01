"use client"
import React from 'react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession, signIn, signOut } from 'next-auth/react'
import { updateProfile, fetchuser } from '@/actions/useraction'
import { ToastContainer, toast } from 'react-toastify';
const Dashboard = () => {
    const { data: session, update } = useSession()
    const router = useRouter()
    const [form, setForm] = useState({})
    useEffect(() => {
        if (!session) {
            router.push('/login')
        }
        else {
            getData()
        }
    }, [session, router])
    const getData = async () => {
        let u = await fetchuser(session.user.name)
        setForm(u)
    }
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        update()
        let a = await updateProfile(e, session.user.name)
         toast('Profile Updated Successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
    }
    return (<>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
        <div className="container mx-auto py-5 px-5">
        <h1 className='font-bold text-center text-3xl'>Welcome to the Dashboard</h1>
        <form className='max-w-2xl mx-auto' action={handleSubmit}>
            <div className="my-2">
                <label htmlFor="name" className='font-medium text-gray-900 dark:text-white block mb-2 text-sm '>Name</label>
                <input type="text" id="name" name="name" value={form.name ? form.name : ""} onChange={handleChange} className='bg-gray-50 border border-gray-300 text-gray-900 placeholder:text-gray-500 focus:ring-blue-500 focus:border-blue-500 block rounded-lg w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder:text-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                />
            </div>
            {/* input for email */}
            <div className="my-2">
                <label htmlFor="email" className='font-medium text-gray-900 dark:text-white block mb-2 text-sm '>Email</label>
                <input type="email" id="email" name="email" value={form.email ? form.email : ""} onChange={handleChange} className='bg-gray-50 border border-gray-300 text-gray-900 placeholder:text-gray-500 focus:ring-blue-500 focus:border-blue-500 block rounded-lg w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder:text-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                />
            </div>
            {/* input for username */}
            <div className="my-2">
                <label htmlFor="username" className='font-medium text-gray-900 dark:text-white block mb-2 text-sm '>Username</label>
                <input type="text" id="username" name="username" value={form.username ? form.username : ""} onChange={handleChange} className='bg-gray-50 border border-gray-300 text-gray-900 placeholder:text-gray-500 focus:ring-blue-500 focus:border-blue-500 block rounded-lg w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder:text-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                />
            </div>
            {/* input for profile picture  */}
            <div className="my-2">
                <label htmlFor="profilePicture" className='font-medium text-gray-900 dark:text-white block mb-2 text-sm '>Profile Picture</label>
                <input type="text" id="profilePicture" name="profilePicture" value={form.profilePicture ? form.profilePicture : ""} onChange={handleChange} className='bg-gray-50 border border-gray-300 text-gray-900 placeholder:text-gray-500 focus:ring-blue-500 focus:border-blue-500 block rounded-lg w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder:text-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                />
            </div>
            {/* input for cover picture  */}
            <div className="my-2">
                <label htmlFor="coverPicture" className='font-medium text-gray-900 dark:text-white block mb-2 text-sm '>Cover Picture</label>
                <input type="text" id="coverPicture" name="coverPicture" value={form.coverPicture ? form.coverPicture : ""} onChange={handleChange} className='bg-gray-50 border border-gray-300 text-gray-900 placeholder:text-gray-500 focus:ring-blue-500 focus:border-blue-500 block rounded-lg w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder:text-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                />
            </div>
            {/* input for razropay id */}
            <div className="my-2">
                <label htmlFor="razorpayId" className='font-medium text-gray-900 dark:text-white block mb-2 text-sm '>Razorpay ID</label>
                <input type="text" id="razorpayId" name="razorpayId" value={form.razorpayId ? form.razorpayId : ""} onChange={handleChange} className='bg-gray-50 border border-gray-300 text-gray-900 placeholder:text-gray-500 focus:ring-blue-500 focus:border-blue-500 block rounded-lg w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder:text-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                />
            </div>
            {/* input for razorpay secret   */}
            <div className="my-2">
                <label htmlFor="razorpaySecret" className='font-medium text-gray-900 dark:text-white block mb-2 text-sm '>Razorpay Secret</label>
                <input type="text" id="razorpaySecret" name="razorpaySecret" value={form.razorpaySecret ? form.razorpaySecret : ""} onChange={handleChange} className='bg-gray-50 border border-gray-300 text-gray-900 placeholder:text-gray-500 focus:ring-blue-500 focus:border-blue-500 block rounded-lg w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder:text-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                />
            </div>
            <div className="my-6 w-full">
                <button type="submit" className=' w-full text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-xl text-sm px-4 py-2.5 text-center leading-5  cursor-pointer' >Save</button>
            </div>
        </form>
        </div>
    </>
    )
}

export default Dashboard
