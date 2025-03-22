import mongoose from 'mongoose';

// db model
const Post = new mongoose.Schema({
  name: { type: String, required: true },
  prompt: { type: String, required: true },
  photo: { type: String, required: true },
});

// create model from schema
const PostSchema = mongoose.model('Post', Post);

export default PostSchema;