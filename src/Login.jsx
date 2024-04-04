import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";


const Login = () => {

    const {loginUser, googleLogin,facebookLogin, setUser} = useContext(AuthContext)
    const [error, setError] = useState("");


    const handleLogin = (event) => {
      setError('')
      event.preventDefault();
      const email = event.target.email.value;
      const password = event.target.password.value;
      console.log(email, password);
      loginUser(email, password)
        .then((result) => {
          
          console.log(result.user);
        })
        .catch((error) => {
          setError(error.message);
          console.log();
        });
    };

     const handleGoogleLogin = () => {
       googleLogin()
         .then((result) => {
           setUser(result.user);
         })
         .catch((error) => console.log(error.message));
     };


     const handleFacebookLogin = () => {
       facebookLogin()
         .then((result) => {
           setUser(result.user);
         })
         .catch((error) => console.log(error.message));
     };




    return (
      <div className="flex justify-center flex-col space-y-3 items-center">
        <form onSubmit={handleLogin} action="" className="w-2/6 space-y-4">
          <div>
            <p>Email</p>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered w-full "
            />
          </div>
          <div>
            <p>Password</p>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              className="input input-bordered w-full "
            />
          </div>

          <input
            className="btn btn-primary w-full"
            type="submit"
            value="Login"
          />
        </form>
        <button onClick={handleGoogleLogin} className="btn">
          Google Login
        </button>
        <button onClick={handleFacebookLogin} className="btn">
          Facebook Login
        </button>
        {error && <p className="text-red-600">{error}</p>}
      </div>
    );
};

export default Login;