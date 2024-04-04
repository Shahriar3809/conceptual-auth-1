import { useContext } from "react";
import { AuthContext } from "./AuthProvider";


const Login = () => {


    const {loginUser} = useContext(AuthContext)

    const handleLogin = (event) => {
      event.preventDefault();
      const email = event.target.email.value;
      const password = event.target.password.value;
      console.log(email, password);
      loginUser(email, password)
    };


    return (
      <div className="flex justify-center items-center">
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
      </div>
    );
};

export default Login;