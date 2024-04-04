import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";


const Register = () => {
    const { registerUser, setUser } = useContext(AuthContext);
    // console.log(registerUser)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleRegister = (event) => {
        setError('')
        event.preventDefault()
        const name = event.target.name.value;
        const photo = event.target.photo.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        console.log(name, photo, email, password, confirmPassword)

        // Email Validation
        if(!/@gmail\.com$/.test(email)){
          setError('Your email must be ends with gmail.com')
          return;
        }

        //Password Length Validation
        if(password.length< 6){
          setError('Password must be 6 character')
          return;
        }

        //Password matched Validation
        if(password !== confirmPassword) {
          setError("Password didn't match")
          return;
        }

        //Password Ends with at least 2 numbers validation
        if(!/\d{2,}$/.test(password)) {
          setError('Password must end with at least 2 number.')
          return;
        }

        // Password with special character validation
        if(!/[@#$%*]/.test(password)) {
          setError("Please add some spacial character.")
          return;
        }


        registerUser(email, password)
          .then((result) => {
            setUser(result.user)
            setSuccess('User Created Successfully..')
          })
          .catch((error) => {
            console.log(error.message)
            setError(error.message.split('/')[1])
          });
    }



   


    return (
      <div className="flex flex-col gap-3 justify-center items-center">
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
              required
              placeholder="Your Email"
              className="input input-bordered w-full "
            />
          </div>
          <div>
            <p>Password</p>
            <input
              type="password"
              name="password"
              required
              placeholder="Create a password"
              className="input input-bordered w-full "
            />
          </div>
          <div>
            <p>Confirm Password</p>
            <input
              type="password"
              required
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
        {error && <p className="text-red-600 text-xl">{error}</p>}
        {success && <p className="text-green-600 text-xl">{success}</p>}

        
      </div>
    );
};

export default Register;