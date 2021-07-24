import firebase from "./firebase";
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';



function App() {
  const responseGoogle = (response) => {
    const credential = firebase.auth.GoogleAuthProvider.credential(
      response.tokenObj.id_token
    )
    firebase.auth().signInWithCredential(credential).then((response) => {
      firebase.auth().currentUser.getIdToken(true).then((response) => {
        console.log(response)
      })
    })
  }

  const responseFacebook = (response) => {
    const credential = firebase.auth.FacebookAuthProvider.credential(response.accessToken)
    firebase.auth().signInWithCredential(credential).then((response) => {
      firebase.auth().currentUser.getIdToken(true).then((response) => {
        console.log(response)
      })
    })
  }


  return (
    <div className="App">
      <header className="App-header">
        <center>
          <h3>Social Authentication by using Firebase</h3>
          <GoogleLogin
            clientId="984769911314-o6s21u9fn9t415hi6etehdih1e6lvkt1.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
          <br></br>
          <FacebookLogin
            appId="1064692507684635"
            autoLoad={true}
            fields="name,email,picture"
            callback={responseFacebook}
          />

        </center>
      </header>
    </div>
  );
}

export default App;
