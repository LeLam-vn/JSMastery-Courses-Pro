'use server'

import Question from "@/database/question.model";
import { connectToDatabase } from "../mongoose"
import Tag from "@/database/tag.model";

// Server Side for Data Base
export async function createQuestion(params:any  ) {
    //eslint-disable-not-line no-empty
    try {
        //connect to DB
         connectToDatabase();

         const {title, content, author, path, tags} = params

         //Create the question

         const question = await Question.create({
            title,
            content,
            author
         });

         const tagDocument = []

         //Create the tag or get them if they already exist

        for (const tag of tags) {
            const existingTag = await Tag.findOneAndUpdate (
                {name:{$regex: new RegExp(`${tag}$`,'i')}},
                {$setOnInsert:{name:tag},$push:{question:question._id}},
                {upsert: true, new:true}
            )
            console.log('existingTag: ', existingTag)
            tagDocument.push(existingTag._id)
        }

        await Question.findByIdAndUpdate(question._id,{
            $push:{tags: {$each:tagDocument}}
        })

        //Create an interaction record for the user's ask_question action

        //Increment author's reputation by +5 for creating a question  

    } catch (error) {
        
    }
}    