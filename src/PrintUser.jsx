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
            <FontAwesomeIcon icon={faSquareFacebook}  />
            <FontAwesomeIcon icon={faSquareTwitter} />
            <FontAwesomeIcon icon={faSquareGooglePlus} />
            </div>
          </>
        )}
      </div>
      </>
    )
  }
  export default PrintUser