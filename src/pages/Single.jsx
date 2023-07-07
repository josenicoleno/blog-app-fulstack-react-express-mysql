import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Delete from '../img/delete.png'
import Edit from '../img/edit.png'
import Menu from '../components/Menu'
import axios from 'axios'
import { AuthContext } from '../context/authContext'
import moment from 'moment'
import swal from 'sweetalert'

const Single = () => {
  const [post, setPost] = useState({});

  const location = useLocation();

  const navigate = useNavigate()

  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext)

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent
  }

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

  const handleDelete = () => {
    swal({
      title: 'Delete',
      text: "Are you sure you want to delete the post?",
      buttons: ["No", "Yes"]
    }).then(async res => {
      if (res) {
        try {
          const token = document.cookie.split('; ').filter(row => row.startsWith('access_token=')).map(c => c.split('=')[1])[0]
          const q = `http://localhost:8800/api/posts/${postId + '/' + token}`
          await axios.delete(q);
          navigate('/');
        } catch (err) {
          console.log(err)
        }
      }
    })
  }

  return (
    <div className="single">
      <div className="content">
        <img src={`../upload/${post?.PostImg}`} alt="" />
        <div className="user">
          {post.UserImg && <img src={post.UserImg} alt="" />}
          <div className="info">
            <span>{post?.UserName}</span>
            <p>Posted {moment(post.PostDate).fromNow()}</p>
          </div>
          {currentUser?.UserName === post.UserName && (
            <div className="edit">
              <Link to={`/write?edit=2`} state={post}>
                <img src={Edit} alt="" />
              </Link>
              <img onClick={handleDelete} src={Delete} alt="" />
            </div>
          )}
        </div>
        <h1>{post.PostTitle}</h1>
        {getText(post.PostDescription)}
      </div>
      <Menu cat={post.cat} />
    </div>
  )
}

export default Single
