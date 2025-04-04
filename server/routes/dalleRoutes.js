import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';


// populate environment variables
dotenv.config();

const router = express.Router();

// set up config
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  
  const openai = new OpenAIApi(configuration);
  

  router.route('/').get((req, res) => {
    res.status(200).json({ message: 'Hello from DALL-EEEEEEEEE!' });
  });

  
  router.route('/').post(async (req, res) => {
    try {
      const { prompt } = req.body;
  
      // create image from OpenAI call
      const aiResponse = await openai.createImage({
        prompt,
        n: 1,
        size: '1024x1024',
        response_format: 'b64_json',
      });
  
      // get image
      const image = aiResponse.data.data[0].b64_json;
      
      res.status(200).json({ photo: image });
    } catch (error) {
      console.error(error);
      res.status(500).send(error?.response.data.error.message || 'Something went wrong');
    }
  });
  
  export default router;