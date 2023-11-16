import { signInWithGoogle } from "../../firebase";

const Login = () => {

   return (
      <div className="dashboard">
         <button onClick={signInWithGoogle}>
            Sign in using google
         </button>
      </div>
   )
}

export default Login;