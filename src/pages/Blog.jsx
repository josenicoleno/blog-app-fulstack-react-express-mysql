import React from 'react'
import { Link } from 'react-router-dom'

const posts = [
  {
    id: 1,
    title: "lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae perspiciatis unde dolor corporis ipsa eius dolores voluptatem dolore aperiam quis fuga est, eligendi nemo molestiae maxime quo magnam et accusamus!",
    img:"https://img.freepik.com/foto-gratis/pintura-digital-montana-arbol-colorido-primer-plano_1340-25699.jpg?w=740&t=st=1687712185~exp=1687712785~hmac=2a81d30996eb71f914142f93a0d5f866c3a000abcb50c48c20d10357b6acd5dd"
  },
  {
    id: 2,
    title: "lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae perspiciatis unde dolor corporis ipsa eius dolores voluptatem dolore aperiam quis fuga est, eligendi nemo molestiae maxime quo magnam et accusamus!",
    img:"https://img.freepik.com/foto-gratis/pintura-digital-montana-arbol-colorido-primer-plano_1340-25699.jpg?w=740&t=st=1687712185~exp=1687712785~hmac=2a81d30996eb71f914142f93a0d5f866c3a000abcb50c48c20d10357b6acd5dd"
  },
  {
    id: 3,
    title: "lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae perspiciatis unde dolor corporis ipsa eius dolores voluptatem dolore aperiam quis fuga est, eligendi nemo molestiae maxime quo magnam et accusamus!",
    img:"https://img.freepik.com/foto-gratis/pintura-digital-montana-arbol-colorido-primer-plano_1340-25699.jpg?w=740&t=st=1687712185~exp=1687712785~hmac=2a81d30996eb71f914142f93a0d5f866c3a000abcb50c48c20d10357b6acd5dd"
  },
  {
    id: 4,
    title: "lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae perspiciatis unde dolor corporis ipsa eius dolores voluptatem dolore aperiam quis fuga est, eligendi nemo molestiae maxime quo magnam et accusamus!",
    img:"https://img.freepik.com/foto-gratis/pintura-digital-montana-arbol-colorido-primer-plano_1340-25699.jpg?w=740&t=st=1687712185~exp=1687712785~hmac=2a81d30996eb71f914142f93a0d5f866c3a000abcb50c48c20d10357b6acd5dd"
  },
]

const Blog = () => {
  return (
    <div className='blog'>
      <div className="posts">
        {posts.map(post => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt='' />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog
