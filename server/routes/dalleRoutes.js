import express from 'express'
import * as dotenv from 'dotenv'
import {Configuration, OpenAIApi} from 'openai'

import Post from '../mongodb/models/Post.js'

dotenv.config()

const router = express.Router()

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

router.route('/')
    .get((req,res) => {
        res.json({message: 'Hello from DALL-E'})
    })
    .post(async (req,res) => {
        try{

            const { prompt } = req.body

            const aiResponse = await openai.createImage({
                prompt,
                n: 1,    // number of images for given prompt
                size: '1024x1024',      // size of image, the more size more time to generate image
                response_format: 'b64_json'     // each image can be returned as either URL or base64 data format, URL get expires in a hour
            })

            const image = aiResponse.data.data[0].b64_json

            res.status(200).json({photo: image})
        } catch (error) {
            res.status(500).send(error?.response.data.error.message || 'something went wrong')
        } 
    })


export default router