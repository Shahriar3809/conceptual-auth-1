import { useContext } from "react";
import { AuthContext } from "./AuthProvider";


const Register = () => {
    const {registerUser} = useContext(AuthContext)
    console.log(registerUser)


    const handleRegister = (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const photo = event.target.photo.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        console.log(name, photo, email, password, confirmPassword)
        registerUser(email, password)
    }


    return (
      <div className="flex justify-center items-center">
        <form onSubmit={handleRegister} action="" className="w-2/6 space-y-4">
          <div>
            <p>Name</p>
            <input
              type="text"
              name="name"
              placeholder="Your Name Here"
              className="input input-bordered w-full "
            />
          </div>
          <div>
            <p>Photo</p>
            <input
              type="text"
              name="photo"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
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
          <div>
            <p>Confirm Password</p>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="input input-bordered w-full "
            />
          </div>
          <input
            className="btn btn-primary w-full"
            type="submit"
            value="Register"
          />
        </form>
      </div>
    );
};

export default Register;