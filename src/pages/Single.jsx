import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Delete from '../img/delete.png'
import Edit from '../img/edit.png'
import Menu from '../components/Menu'
import axios from 'axios'
import { AuthContext } from '../context/authContext'
import moment from 'moment'

const Single = () => {
  const [post, setPost] = useState({});

  const location = useLocation();

  const navigate = useNavigate()

  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/posts/${postId}`);
        setPost(res.data)

      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [postId])

  const handleDelete = async () =>{
    try{
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjg4NDkzMjgwfQ.tJSmRIHJE83x7obbQi7DejVEZVLffA-sjfJRqVIYPrE'
      const q = `http://localhost:8800/api/posts/${postId +'/' + token}`
      console.log(q)
      await axios.delete(q);
      navigate('/');
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className="single">
      <div className="content">
        <img src={post?.PostImg} alt="" />
        <div className="user">
          {post.UserImg && <img src={post.UserImg} alt="" />}
          <div className="info">
            <span>{post?.UserName}</span>
            <p>Posted {moment(post.PostDate).fromNow()}</p>
          </div>
          {currentUser?.UserName === post.UserName && (
            <div className="edit">
              <Link to={`/write?edit=2`}>
                <img src={Edit} alt="" />
              </Link>
              <img onClick={handleDelete} src={Delete} alt="" />
            </div>
          )}
        </div>
        <h1>{post.PostTitle}</h1>
        {post.PostDescription}
      </div>
      <Menu />
    </div>
  )
}

export default Single
