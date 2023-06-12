import { useRouter } from "next/router"
import Link from "next/link"
import { motion as m } from "framer-motion"
import Confetti from "react-confetti"
import { useEffect, useState } from "react"

export default function success() {
    const router = useRouter()
    const [pieces, setPieces] = useState(200)

    const stopConfetti = () => {
        setTimeout(() => {
            setPieces(0)
        }, 3000)
    }

    useEffect(() => {
        stopConfetti()
    }, [])

    return (
        <m.main 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className='h-screen flex items-center justify-center'
        >
            <div className='bg-white w-1/2 rounded-lg font-latoRegular text-gray-700 p-16'>
                <h1 className='text-3xl font-latoBold pb-4'>
                    Thanks for the email {router.query.name}😎
                </h1>
                <p className='text-lg text-gray-500 pb-10'>
                    We have sent you an email over at <strong>{router.query.email}</strong>. We will get back to you as soon as we can. You're ready?
                </p>
                <Link href='/' className='bg-teal-500 text-white rounded-lg font-latoBold text-md px-10 py-3 hover:bg-teal-400'>I am ready!</Link>
            </div>
            <Confetti gravity={ 0.2 } numberOfPieces={ pieces } />
        </m.main>
    )
}