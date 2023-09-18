import React, { useContext, useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { useLocation, useNavigate } from "react-router-dom"
import moment from "moment";
import { AuthContext } from '../context/authContext';

const Write = () => {
  const state = useLocation().state
  const [title, setTitle] = useState(state?.PostTitle || '');
  const [value, setValue] = useState(state?.PostDescription || '');
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.CategoryName || '');

  const navigate = useNavigate()

  const { currentUser } = useContext(AuthContext)

  useEffect(() => {
    if (currentUser === null) {
      navigate('/')
    }
  })


  const token = document.cookie.split('; ').filter(row => row.startsWith('access_token=')).map(c => c.split('=')[1])[0]

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file)
      const res = await axios.post("http://localhost:8800/api/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err)
    }
  }

  const handleClick = async e => {
    e.preventDefault()
    const imgUrl = await upload()
    console.log(state, title, value, cat, imgUrl, token)
    try {
      state ?
        await axios.put(`http://localhost:8800/api/posts/${state.PostId + '/' + token}`, {
          title,
          desc: value,
          cat,
          img: file ? imgUrl : ""
        })
        : await axios.post(`http://localhost:8800/api/posts/${token}`, {
          title,
          desc: value,
          cat,
          img: file ? imgUrl : "",
          date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        })
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='add'>
      <div className="content">
        <input type='text' placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} />
        <div className="editorContainer">
          <ReactQuill className='editor' theme='snow' value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status:</b>Draft
          </span>
          <span>
            <b>Visibility:</b>Public
          </span>
          <input style={{ display: "none" }} type="file" id="file" name='' onChange={e => setFile(e.target.files[0])} />
          <label className='file' htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
        
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" checked={cat === "Art"} name="cat" value={cat} id="Art" onChange={e => setCat(e.target.id)} />
            <label htmlFor="art">Art</label>
          </div>

          <div className="cat">
            <input type="radio" checked={cat === "Science"} name="cat" value={cat} id="Science" onChange={e => setCat(e.target.id)} />
            <label htmlFor="science">Science</label>
          </div>

          <div className="cat">
            <input type="radio" checked={cat === "Technology"} name="cat" value={cat} id="Technology" onChange={e => setCat(e.target.id)} />
            <label htmlFor="technology">Technology</label>
          </div>

          <div className="cat">
            <input type="radio" checked={cat === "Design"} name="cat" value={cat} id="Design" onChange={e => setCat(e.target.id)} />
            <label htmlFor="design">Design</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write
