import React, { useEffect } from 'react'
import { Container, PostForm } from '../components/index'
import dbService from '../appwrite/db'
import { useNavigate, useParams } from 'react-router-dom'

function EditPost() {
    const [post, setPost] = useState(null)
    const { slug } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            dbService.getPost(slug)
            .then((post) => {
                if(post) {
                    setPost(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])

  return (
    <div>EditPost</div>
  )
}

export default EditPost