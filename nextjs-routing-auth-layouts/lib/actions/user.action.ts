'use server'

import User from "@/database/user.models"
import { connectToDatabase } from "../mongoose"

export async function getUserById (params:any){
    const {userId} = params
try {
    connectToDatabase()

    const user = await User.findOne({clerkId: userId})
    return (user)
} catch (error) {
    console.log(error)
    throw error
}
}