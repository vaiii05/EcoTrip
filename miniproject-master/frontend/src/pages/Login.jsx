import React, { useState } from "react";
import { Container, Row, Col, FormGroup, Button, Form } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/login.css";
import loginImg from "../assets/images/login.png";
import userIcon from "../assets/images/user.png";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Newsletter from "../shared/Newsletter";
import Testimonials from "../components/Testimonial/Testimonials";
const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(data));
        alert("Login Successful!");
        setLoggedIn(true); // ✅ Set login success
      } else {
        setError(data.message || "Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  // ✅ If logged in, render the dashboard content here
  if (loggedIn) {
    return (
      <section>
        <Container>
          <Row>
            <Col lg="12" className="m-auto text-center">
              <h2>Welcome to TRAVEL HUB!</h2>
              <p>You have successfully logged in.</p>
              <FeaturedTourList /> 
              <h2 className="gallery_title">Discover Journeys Captured by Our Users</h2>
              <MasonryImagesGallery />
              <Newsletter />
              <h2 className="testimonial__title">What our fans and users say about us</h2>
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
    );
  }

  // ✅ Default Login Form
  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={loginImg} alt="Login" />
              </div>
              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="User" />
                </div>
                <h2>Login</h2>
                {error && <p className="error-message">{error}</p>}
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      id="email"
                      value={credentials.email}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      id="password"
                      value={credentials.password}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <Button className="btn secondary__btn auth__btn" type="submit" disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                  </Button>
                </Form>
                <p>
                  Don't have an account? <Link to="/register">Create</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
