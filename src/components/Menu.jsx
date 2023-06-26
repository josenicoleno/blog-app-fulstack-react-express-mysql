import React from 'react'

const posts = [
    {
        id: 1,
        title: "lorem ipsum",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae perspiciatis unde dolor corporis ipsa eius dolores voluptatem dolore aperiam quis fuga est, eligendi nemo molestiae maxime quo magnam et accusamus!",
        img: "https://img.freepik.com/foto-gratis/pintura-digital-montana-arbol-colorido-primer-plano_1340-25699.jpg?w=740&t=st=1687712185~exp=1687712785~hmac=2a81d30996eb71f914142f93a0d5f866c3a000abcb50c48c20d10357b6acd5dd"
    },
    {
        id: 2,
        title: "lorem ipsum",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae perspiciatis unde dolor corporis ipsa eius dolores voluptatem dolore aperiam quis fuga est, eligendi nemo molestiae maxime quo magnam et accusamus!",
        img: "https://img.freepik.com/foto-gratis/pintura-digital-montana-arbol-colorido-primer-plano_1340-25699.jpg?w=740&t=st=1687712185~exp=1687712785~hmac=2a81d30996eb71f914142f93a0d5f866c3a000abcb50c48c20d10357b6acd5dd"
    },
    {
        id: 3,
        title: "lorem ipsum",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae perspiciatis unde dolor corporis ipsa eius dolores voluptatem dolore aperiam quis fuga est, eligendi nemo molestiae maxime quo magnam et accusamus!",
        img: "https://img.freepik.com/foto-gratis/pintura-digital-montana-arbol-colorido-primer-plano_1340-25699.jpg?w=740&t=st=1687712185~exp=1687712785~hmac=2a81d30996eb71f914142f93a0d5f866c3a000abcb50c48c20d10357b6acd5dd"
    },
    {
        id: 4,
        title: "lorem ipsum",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae perspiciatis unde dolor corporis ipsa eius dolores voluptatem dolore aperiam quis fuga est, eligendi nemo molestiae maxime quo magnam et accusamus!",
        img: "https://img.freepik.com/foto-gratis/pintura-digital-montana-arbol-colorido-primer-plano_1340-25699.jpg?w=740&t=st=1687712185~exp=1687712785~hmac=2a81d30996eb71f914142f93a0d5f866c3a000abcb50c48c20d10357b6acd5dd"
    },
]

const Menu = () => {
    return (
        <div className='menu'>
            <h1>Other post you may like</h1>

            {posts.map(post => (
                <div className="post" key={post.id}>
                    <img src={post.img} alt="" />
                    <h2>{post.title}</h2>
                    <button>Read More</button>
                </div>
            ))}
        </div>
    )
}

export default Menu
