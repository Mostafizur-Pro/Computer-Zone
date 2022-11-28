import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className=" mt-10">
      <div className="hero-content justify-around lg:flex-row-reverse">
        <div className=" ">
          <div className="footer  ">
            <div>
              <span className="footer-title">Services</span>
              <Link className="link link-hover">Branding</Link>
              <Link className="link link-hover">Design</Link>
              <Link className="link link-hover">Marketing</Link>
              <Link className="link link-hover">Advertisement</Link>
            </div>
            <div>
              <span className="footer-title">Company</span>
              <Link className="link link-hover">About us</Link>
              <Link className="link link-hover">Contact</Link>
              <Link className="link link-hover">Jobs</Link>
              <Link className="link link-hover">Press kit</Link>
            </div>
            <div>
              <span className="footer-title">Legal</span>
              <Link className="link link-hover">Terms of use</Link>
              <Link className="link link-hover">Privacy policy</Link>
              <Link className="link link-hover">Cookie policy</Link>
            </div>
          </div>
        </div>
        <div className="card  w-96 shadow-2xl ">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
