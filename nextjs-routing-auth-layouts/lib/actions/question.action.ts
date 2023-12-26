'use server'

import Question from "@/database/question.model";
import { connectToDatabase } from "../mongoose"
import Tag from "@/database/tag.model";
import { CreateQuestionParams, GetQuestionsParams } from "./shared.types";
import User from "@/database/user.models";
import { revalidatePath } from "next/cache";


//Get Questions

export async function getQuestions(params: GetQuestionsParams) {
    try {
        connectToDatabase();
        const questions = await Question.find({})
            // .populate('tags')
            // .populate('author')
            // .populate({
            //     path: 'tags',
            //     model: Tag,
            // })
            // .populate({
            //     path: 'author',
            //     model: User,
            // })
            .sort({ createdAt: -1 })
        return { questions }
        console.log('questions-get quaestion: ', questions)

    } catch (error) {
        console.log(error)
        throw error;
    }
}

// Server Side for Data Base
//Create Question
export async function createQuestion(params: CreateQuestionParams) {
    //eslint-disable-not-line no-empty
    try {
        //connect to DB
        connectToDatabase();

        const { title, content, author, path, tags } = params

        //Create the question

        const question = await Question.create({
            title,
            content,
            author
        });

        const tagDocuments = []

        //Create the tag or get them if they already exist - //"Create Question Action - 6:20"

        for (const tag of tags) {
            const existingTag = await Tag.findOneAndUpdate(
                { name: { $regex: new RegExp(`^${tag}$`, "i") } },
                { $setOnInsert: { name: tag }, $push: { question: question._id } },
                { upsert: true, new: true }
            )
            // console.log('existingTag: ', existingTag)
            tagDocuments.push(existingTag._id)
            // console.log("tagDocuments: ", tagDocuments)
        }
        //Create Question Action - 6:20
        await Question.findByIdAndUpdate(question._id, {
            $push: { tags: { $each: tagDocuments } }
        })

        //Create an interaction record for the user's ask_question action

        //Increment author's reputation by +5 for creating a question  
        revalidatePath(path)

    } catch (error) {
        console.log(error)
        throw error;
    }
}    