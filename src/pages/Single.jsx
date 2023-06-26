import React from 'react'
import { Link } from 'react-router-dom'
import Delete from '../img/delete.png'
import Edit from '../img/edit.png'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://img.freepik.com/foto-gratis/santa-maddalena-cordillera-dolomitastirol-sur_661209-237.jpg?w=740&t=st=1687764326~exp=1687764926~hmac=6868e4607e0a2d2376a6feb151c899c0e0ba0f4cb8131ec2ac27ce8c93428b64" alt="" />
        <div className="user">
          <img src="https://scontent-fco2-1.xx.fbcdn.net/v/t39.30808-6/251982745_10225882112067034_4327335148772870748_n.jpg?_nc_cat=102&cb_f2e=test&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=P_JBUY95Zh0AX_Sk6IU&_nc_ht=scontent-fco2-1.xx&oh=00_AfArBYNyXecK85dWdixdoLKC2-43VFUOSDiw-JaIUDAA1A&oe=649E6253" alt="" />
          <div className="info">
            <span>José</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit</h1>
        <p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget mi lacus. Nullam eu ultrices turpis. Nunc elementum nisl at lectus rhoncus lacinia. Vivamus nec nunc rhoncus, scelerisque lorem quis, interdum massa. Curabitur ut mi sed dolor sodales sodales et nec nunc. Nulla magna ligula, tincidunt nec tincidunt sed, dapibus quis risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non nunc leo.
          </p>
          <p>
            Vestibulum commodo non augue eget ornare. Morbi molestie porttitor mauris a varius. Donec ornare elit lobortis, feugiat ante quis, viverra augue. Suspendisse quis nulla diam. Praesent blandit lorem id dolor pretium, eu finibus tortor luctus. Maecenas mollis, libero imperdiet maximus mattis, odio sem scelerisque justo, sit amet mollis justo tortor a urna. Vivamus ut dapibus urna, nec scelerisque purus. In et ex lorem. Quisque nec convallis libero. Suspendisse dui mi, mattis nec mauris quis, feugiat molestie nulla. Etiam faucibus tristique massa, vitae lacinia dolor consectetur commodo. Curabitur venenatis erat condimentum, fermentum lacus ut, pretium erat. Donec nec ex pellentesque, condimentum lacus quis, consectetur velit.
          </p>
          <p>
            Curabitur vehicula lorem at magna vehicula, eu feugiat leo ullamcorper. Curabitur euismod, odio in tincidunt cursus, ipsum sem ullamcorper augue, a ultricies elit nunc in nisl. Curabitur finibus sit amet quam ut facilisis. Vestibulum ultrices feugiat elementum. Curabitur consectetur vulputate sapien finibus porta. In hac habitasse platea dictumst. Integer magna tortor, finibus nec aliquet nec, commodo id sapien.
          </p>
        </p>
      </div>
      <Menu/>
    </div>
  )
}

export default Single
