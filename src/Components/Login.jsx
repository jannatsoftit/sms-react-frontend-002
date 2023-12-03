import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();

  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleInput = (e) => {
    setLoginInput({
      ...loginInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: loginInput.email,
      password: loginInput.password,
      password_confirmation: loginInput.password_confirmation,
    };

    fetch(`http://127.0.0.1:8000/api/login`, {
      body: JSON.stringify({
        ...data,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("auth_token", res.token);
          localStorage.setItem("auth_name", res.username);
          localStorage.setItem("role_id", res.role_id);

          const userRole = localStorage.getItem("role_id");
          console.log(userRole);
          if (userRole === "1") {
            navigate("/admin");
          } else if (userRole === "2") {
            navigate("/student/dashboard");
          } else if (userRole === "3") {
            navigate("/teacher/dashboard");
          } else if (userRole === "4") {
            navigate("/parent/dashboard");
          } else if (userRole === "5") {
            navigate("/accountant/dashboard");
          } else if (userRole === "6") {
            navigate("/librarian/dashboard");
          } else if (userRole === "7") {
            navigate("/public/dashboard");
          }
          console.log(res);
          Swal.fire({
            title: "Success!",
            text: "Login Successfully Completed!",
            icon: "success",
            confirmButtonText: "Ok",
          });
        } else {
          if (res.status === 401) {
            Swal.fire({
              title: "Warning!",
              text: "Login Unsuccessful",
              icon: "warning",
              confirmButtonText: "Ok",
            });
          }
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="login_body">
        <div className="wrapper">
          <div className="title">Login Form</div>
          <form onSubmit={handleSubmit}>
            <div className="field">
              <input
                type="email"
                name="email"
                value={loginInput.email}
                onChange={handleInput}
                required
              />
              <label>Email Address</label>
            </div>
            <div className="field">
              <input
                type="text"
                name="password"
                value={loginInput.password}
                onChange={handleInput}
                required
              />
              <label>Password</label>
            </div>
            <div className="field">
              <input
                type="text"
                name="password_confirmation"
                value={loginInput.password_confirmation}
                onChange={handleInput}
                required
              />
              <label>Password Confirmation</label>
            </div>
            <div className="field">
              <input type="submit" value="Login" />
            </div>
            <div className="signup-link">
              Don't have an account? <Link to="/register">Register now</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
