'use server'

import connectToDb from './connectToDb'
import { User, UserWithoutId, Blog } from './models'
import { revalidatePath } from 'next/cache'
import bcrypt from 'bcryptjs'
import { redirect } from 'next/navigation'
import { title } from 'process'

export const addUser = async (formData: UserWithoutId) => {
  const { username, email, password, img, isAdmin } = formData
  const hashedPassword = await bcrypt.hash(password, 5)
  try {
    connectToDb()
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
      isAdmin,
    })
    await newUser.save()
    console.log('saved' + newUser)
    revalidatePath('/')
  } catch (err) {
    console.log(err)
  }
}

export const deleteUser = async (formData: FormData) => {
  const id = formData.get('_id')

  try {
    await connectToDb()
    await User.findOneAndDelete({ _id: id })
    revalidatePath('/dashboard')
    console.log({ message: `Deleted user ${id}` })
    return { message: `Deleted user ${id}` }
  } catch (err) {
    return { message: 'Failed to delete user' }
  }
}

export const updateUser = async (formData: FormData) => {
  const _id = formData.get('_id')
  const username = formData.get('username')
  const email = formData.get('email')
  const img = formData.get('img')
  const isAdmin = formData.get('isAdmin')

  try {
    await connectToDb()
    await User.findOneAndUpdate(
      { _id: _id },
      {
        username: username,
        email: email,
        img: img,
        isAdmin: isAdmin === 'true' ? Boolean(true) : Boolean(false),
      }
    )
    revalidatePath(`/dashboard`)

    return { message: `Updated user ${_id}` }
  } catch (err) {
    return { message: 'Failed to update to db' }
  } finally {
    redirect('/dashboard/')
  }
}


export const addBlog = async (formData: FormData) => {
  console.log(formData)
 const title = formData.get('title')
 const description = formData.get('description')
 const image = formData.get('image')
 const  userId =formData.get('userId') 
  try {
    connectToDb()
    const newBlog = new Blog({
      title,
      description,
      image,
      userId
    })
    await newBlog.save()
    console.log('saved' + newBlog)
    revalidatePath('/blogs')
  } catch (err) {
    console.log(err)
  }finally {
    redirect('/blogs')
  }
}
export const getBlogs = async()=>{

  try{
   await connectToDb()
   const blogs=await Blog.find({}) as Blog[]
   return blogs
  }catch(err){
    console.log(err)
  }
}


export const deleteBlog= async(formData: FormData)=>{
  const id = formData.get('idBlog')

  try {
    await connectToDb()
    await Blog.findOneAndDelete({ _id: id })
    revalidatePath('/blogs')
    console.log({ message: `Deleted blog ${id}` })
    return { message: `Deleted blog ${id}` }
  } catch (err) {
    return { message: 'Failed to delete blog' }
  }
}

export const updateBlog=async(formData: FormData)=>{
  const blogId = formData.get('blogId')
  const title = formData.get('title')
  const image = formData.get('image')
  const description = formData.get('description')
  const userId = formData.get('userId')
  
 
  try {
    await connectToDb()
    await Blog.findOneAndUpdate(
      { _id: blogId },
      {
        title: title,
        image: image,
        description: description,
       userId: userId
      }
    )
    revalidatePath(`/blogs`)

    return { message: `Updated blog ${blogId}` }
  } catch (err) {
    return { message: 'Failed to update to db' }
  } finally {
    redirect('/blogs')
  }
}