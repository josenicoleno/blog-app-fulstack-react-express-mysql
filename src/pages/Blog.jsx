import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios';


/* const posts = [
  {
    Id: 1,
    PostTitle: "lorem ipsum",
    PostDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae perspiciatis unde dolor corporis ipsa eius dolores voluptatem dolore aperiam quis fuga est, eligendi nemo molestiae maxime quo magnam et accusamus!",
    PostImg:"https://img.freepik.com/foto-gratis/pintura-digital-montana-arbol-colorido-primer-plano_1340-25699.jpg?w=740&t=st=1687712185~exp=1687712785~hmac=2a81d30996eb71f914142f93a0d5f866c3a000abcb50c48c20d10357b6acd5dd"
    PostDate:""
  },
  {
    Id: 2,
    PostTitle: "lorem ipsum",
    PostDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae perspiciatis unde dolor corporis ipsa eius dolores voluptatem dolore aperiam quis fuga est, eligendi nemo molestiae maxime quo magnam et accusamus!",
    PostImg:"https://img.freepik.com/foto-gratis/pintura-digital-montana-arbol-colorido-primer-plano_1340-25699.jpg?w=740&t=st=1687712185~exp=1687712785~hmac=2a81d30996eb71f914142f93a0d5f866c3a000abcb50c48c20d10357b6acd5dd"
    PostDate:""
  },
  {
    Id: 3,
    PostTitle: "lorem ipsum",
    PostDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae perspiciatis unde dolor corporis ipsa eius dolores voluptatem dolore aperiam quis fuga est, eligendi nemo molestiae maxime quo magnam et accusamus!",
    PostImg:"https://img.freepik.com/foto-gratis/pintura-digital-montana-arbol-colorido-primer-plano_1340-25699.jpg?w=740&t=st=1687712185~exp=1687712785~hmac=2a81d30996eb71f914142f93a0d5f866c3a000abcb50c48c20d10357b6acd5dd"
    PostDate:""
  },
  {
    Id: 4,
    PostTitle: "lorem ipsum",
    PostDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae perspiciatis unde dolor corporis ipsa eius dolores voluptatem dolore aperiam quis fuga est, eligendi nemo molestiae maxime quo magnam et accusamus!",
    PostImg:"https://img.freepik.com/foto-gratis/pintura-digital-montana-arbol-colorido-primer-plano_1340-25699.jpg?w=740&t=st=1687712185~exp=1687712785~hmac=2a81d30996eb71f914142f93a0d5f866c3a000abcb50c48c20d10357b6acd5dd"
    PostDate:""
  },
] */


const Blog = () => {
  const categoryId = useLocation().search
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/posts${categoryId}`)
        setPosts(res.data)
      } catch (err) {
      }
    }
    fetchData();
  }, [categoryId])

  return (
    <div className='blog'>
      <div className="posts">
        {posts.map(post => (
          <div className="post" key={post.Id}>
            <div className="img">
              <img src={post.PostImg} alt='' />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.Id}`}>
                <h1>{post.PostTitle}</h1>
              </Link>
              <p>{post.PostDescription}</p>
              <button>Read more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog
