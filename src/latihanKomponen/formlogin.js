import React, { useState } from "react";
import ApiLogin from "../Api/apiLogin";
import  {useNavigate}  from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState(0);
  const [password, setPassword] = useState(0);
  const [hasil, setHasil] = useState([]);
  const navigate = useNavigate()

  const Submit = async (e) => {
    e.preventDefault();
    const result = await ApiLogin.login(username, password);
    setHasil(result);
    if(result.message === 'Login Berhasil'){
        localStorage.setItem('token', result.token)
        navigate('/table')
    } 
  };

  return (
    <div>
      <form class="row g-3 needs-validation">
        <div>
            Status : {hasil.message}
        </div>
        
        <div class="col-12">
          <label for="yourUsername" class="form-label">
            Username
          </label>
          <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend">
              @
            </span>
            <input
              type="text"
              name="username"
              class="form-control"
              id="yourUsername"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <div class="invalid-feedback">Please enter your username.</div>
          </div>
        </div>

        <div class="col-12">
          <label for="yourPassword" class="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            class="form-control"
            id="yourPassword"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div class="invalid-feedback">Please enter your password!</div>
        </div>

        <div class="col-12">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              name="remember"
              value="true"
              id="rememberMe"
            />
            <label class="form-check-label" for="rememberMe">
              Remember me
            </label>
          </div>
        </div>
        <div class="col-12">
          <button class="btn btn-primary w-100" type="button" onClick={Submit}>
            Login
          </button>
        </div>
        <div class="col-12">
          <p class="small mb-0">
            Don't have account?{" "}
            <a href="pages-register.html">Create an account</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
