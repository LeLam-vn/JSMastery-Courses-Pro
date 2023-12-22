'use server'

import { connectToDatabase } from "../mongoose"

// Server Side for Data Base
export async function createQuestion(params:any  ) {
    //eslint-disable-not-line no-empty
    try {
        //connect to DB
         connectToDatabase()
    } catch (error) {
        
    }
}    