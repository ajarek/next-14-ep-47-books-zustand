import mongoose from 'mongoose'

export type User = {
  _id: string
  username: string
  email: string
  password: string
  img: string
  isAdmin: boolean
}
export type UserWithoutId = Omit<User, '_id'>

export type Blog = {
  title: string
  description: string
  image: string
  userId: string
}

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, min: 3, max: 20 },
    email: { type: String, required: true, unique: true, min: 3, max: 50 },
    password: { type: String, required: true, min: 6, max: 50 },
    img: { type: String },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
)
const blogSchema = new mongoose.Schema({

  title: {type: String, required: true,},
  description: {type: String, required: true},
  image: {type: String},
  userId: {type: String, required: true}
}, { timestamps: true }
)


export const User = mongoose.models?.User || mongoose.model('User', userSchema)
export const Blog = mongoose.models?.Blog || mongoose.model('Blog', blogSchema)
