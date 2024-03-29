import express from 'express'
import * as dotenv from 'dotenv'
import {v2 as cloudinary} from 'cloudinary'

import Post from '../mongodb/models/Post.js'

dotenv.config()

const router = express.Router()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})


router.route('/')
    .get(async (req,res) => {
        // console.log(req.body)
        try {
            const posts = await Post.find({})

            res.status(200).json({success: true, data: posts})
        } catch (error) {
            res.status(500).json({success: false, message: 'Fetching posts failed, please try again'})
            
        }
    })
    .post(async (req,res) => {
        try {
            // console.log('request reached')
            const {name, prompt, photo} = req.body
            const photoUrl = await cloudinary.uploader.upload(photo)

            const newPost = await Post.create({
                name,
                prompt,
                photo: photoUrl.url,
            })
            res.status(201).json({success: true, data: newPost})
        } catch (error) {
            res.status(500).json({success: false, message: 'Unable to create a post, please try again'})
        }
    })



export default router