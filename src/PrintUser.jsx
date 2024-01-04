import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSquareFacebook, faSquareGooglePlus, faSquareTwitter} from '@fortawesome/free-brands-svg-icons'
const PrintUser = ({ user }) => {
    return (
      <>
      <div className="conaitainer">
      {user && user.avatar_url && user.name && (
          <>
            <img src={user.avatar_url} alt="User Avatar" />
            <h1>{user.name}</h1>
            <h2> Web Developer - Web Designer</h2>
            <p>{user.bio}</p>
            <div className="logo">
              <a href="https://www.facebook.com/deividas.juodis.3" target='_blank'>
            <FontAwesomeIcon icon={faSquareFacebook} />
              </a>
              <a href="https://twitter.com/juodmanas" target='_blank'>
            <FontAwesomeIcon icon={faSquareTwitter} />
              </a>
            <FontAwesomeIcon icon={faSquareGooglePlus} />
            </div>
          </>
        )}
      </div>
      </>
    )
  }
  export default PrintUser