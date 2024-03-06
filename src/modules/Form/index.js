import React from "react";
import { useState } from "react";
import InputComp from "../../components/Input/InputComp";
import ButtonComp from "../../components/button";
import { useNavigate } from "react-router-dom";

const Form = ({ isSignInPage = true }) => {
  const [data, setData] = useState({
    ...(!isSignInPage && {
      fullName: "",
    }),
    email: "",
    password: "",
  });

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:8000/api/${isSignInPage ? 'login' : 'register'}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    if (res.status === 400) {
      alert('Invalid Credentials')
    } else {
      const resData = await res.json()
      if (resData.user.token) {
        console.log('Reached here first')
        localStorage.setItem('user:token', resData.token)
        localStorage.setItem('user:detail', JSON.stringify(resData.user))
        console.log('Reached here');
        navigate('/')
      }
    }
  }

  return (
    <div className="bg-white w-[600px] h-[800px] shadow-lg flex flex-col justify-center items-center">
      <div>Welcome{isSignInPage && "Back"}</div>
      <div>Sign up to get started</div>
      <form action="" className="flex flex-col gap-6 mt-10" onSubmit={(e) => handleSubmit(e)}>
        {!isSignInPage && (
          <InputComp
            label="Full Name"
            name="name"
            placeholder="Enter your name"
            value={data.fullName}
            onChange={(e) => setData({ ...data, fullName: e.target.value })}
          />
        )}
        <InputComp
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <InputComp
          label="Password"
          name="password"
          type="password"
          placeholder="Enter your password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <ButtonComp
          name={isSignInPage ? "Sign In" : "Sign Up"}
          className="mt-4"
          type="Submit"
        />
        <div>
          {isSignInPage ? 'Dont have an account?"' : "Already have an account"}{" "}
          <span className="text-primary cursor-pointer" onClick={() => navigate(`/users/${isSignInPage ? 'sign_up' : 'sign_in'}`)}>
            {isSignInPage ? "Sign Up" : "Sign In"}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Form;
