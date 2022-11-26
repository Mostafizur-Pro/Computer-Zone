import React, { useContext, useState } from "react";
import Logo from "../Shared/Logo/Logo";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken";
import login from "../../assete/LoginSignin/login.png";
import useTitle from "../../hooks/useTitle";

const Login = () => {
  useTitle("Login");
  const { signIn, createGoogle } = useContext(AuthContext);
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";
  if (token) {
    navigate(from, { replace: true });
  }

  const handleLogin = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginUserEmail(data.email);
        // navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleGoogleSignIn = (event) => {
    event.preventDefault();
    createGoogle()
      .then((result) => {
        const user = result.user;
        const userInfo = { ...user, userType: "buyer" };
        // console.log(userInfo);
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("saveUser", data);
            // setCreatedUserEmail(email);
          });
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col  lg:flex-row">
          <div className="card flex-shrink-0 h-4/6 w-full max-w-sm shadow-2xl bg-base-100">
            <img
              alt=""
              src={login}
              className="max-w-sm h-max rounded-lg shadow-2xl"
            />
          </div>
          <div className="card flex-shrink-0 h-4/6 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="  m-5">
              <div className="w-6/12">
                <Link to="/">
                  <Logo></Logo>
                </Link>
              </div>
            </div>
            <form onSubmit={handleSubmit(handleLogin)} className="card-body">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  {...register("email", {
                    required: "Email Address is required",
                  })}
                  className="input input-bordered w-full max-w-xs"
                />
                {errors.email && (
                  <p className="text-red-600">{errors.email?.message}</p>
                )}
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be 6 characters or longer",
                    },
                  })}
                  className="input input-bordered w-full max-w-xs"
                />
                <label className="label">
                  {" "}
                  <span className="label-text">Forget Password?</span>
                </label>
                {errors.password && (
                  <p className="text-red-600">{errors.password?.message}</p>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p>
                New to Doctors Portal{" "}
                <Link className="text-primary" to="/signup">
                  Create new Account
                </Link>
              </p>
              <div className="divider">OR</div>
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-outline w-full mb-12"
              >
                CONTINUE WITH GOOGLE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
