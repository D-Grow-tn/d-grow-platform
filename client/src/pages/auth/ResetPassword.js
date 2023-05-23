import "../../assets/css/login.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { RiEyeFill, RiEyeCloseFill } from "react-icons/ri";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";

function ResetPassword() {
  const [showModal, setShowModal] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [showPasswordInputs, setShowPasswordInputs] = useState(false);
  const [isCodeValid, setIsCodeValid] = useState(true);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowPasswordInputs(false);
   
  };

  const handleSaveChanges = () => {
    // Handle saving changes to the password here
    // You can write the necessary code or call a function
    handleCloseModal();
  };
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const handleVerifyCode = () => {
    // Add your code here to verify the entered code from email
    // For example, you can compare the entered code with the expected code
    const expectedCode = '123456'; // Replace with your expected verification code
    if (verificationCode === expectedCode) {
      setShowPasswordInputs(true);
    }
  else {
    setIsCodeValid(false)
    // Display an error message or take any necessary actions
  }
  };

  useEffect(() => {
    if (!showModal) {
      
      setNewPassword("");
      setConfirmPassword("");
      setVerificationCode('');
      setShowConfirmPassword(false);
      setIsCodeValid(true)
    }
  }, [showModal]);

  return (
    <div className="d-flex flex column ">
      <div
        className=""
        style={{
          backgroundColor: "#fff",
          height: "380px",
          borderRadius: "20px",
          position: "relative",
        }}
      >
        <h3>
          <i
            className="fa fa-lock fa-4x d-flex justify-content-center align-itels-center"
            style={{
              position: "absolute",
              top: "-17%",
              left: "50%",
              transform: "translateX(-50%)",
              textAlign: "center",
            }}
          ></i>
        </h3>
        <div className="p-4">
        <h2 className="text-center "  style={{
          marginTop: "3rem" ,
                  color: "#181f38",
                  fontSize: "36px",
                  lineHeight: "44px",
                  fontWeight: 700,
                }}>Forgot Password?</h2>

          <p className="mt-4 text-decoration-underline fs-5 ">Enter your valid email.</p>
          <div className="panel-body ">
            <div style={{ display: "flex", justifyContent: "center" }} className="mt-0">
              <input
                id="email"
                name="email"
                placeholder="email address"
                className="form-control form-control-lg"
                type="email"
                style={{ width: "450px" }}
              />
            </div>

            <div className="form-group mt-3">
              <Button variant="primary" onClick={handleShowModal}>
                Change Password
              </Button>
              <p className="small fw-bold mt-1 pt-1 mb-0">
                Remember your password ?{" "}
                <Link to="/auth" className="link-danger">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>

        <>
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>Change Password</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            {showPasswordInputs ? (
              <form>
                {/* <div className="mb-3">
                  <label htmlFor="oldPassword" className="form-label">
                    Old Password
                  </label>
                  <div className="input-group">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control"
                      id="oldPassword"
                      required
                      value={oldPassword}
                      onChange={(e) => setOldPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={handleTogglePasswordVisibility}
                    >
                      {showPassword ? <RiEyeFill /> : <RiEyeCloseFill />}
                    </button>
                  </div>
                </div> */}
                <div className="mb-3">
                  <label htmlFor="newPassword" className="form-label">
                    New Password
                  </label>
                  <div className="input-group">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control"
                      id="newPassword"
                      required
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={handleTogglePasswordVisibility}
                    >
                      {showPassword ? <RiEyeFill /> : <RiEyeCloseFill />}
                    </button>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm New Password
                  </label>
                  <div className="input-group">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      className="form-control"
                      id="confirmPassword"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={ handleToggleConfirmPasswordVisibility}
                     
                    >
                      {showConfirmPassword ? <RiEyeFill /> : <RiEyeCloseFill />}
                    </button>
                  </div>
                </div>
              </form>):(
             <div>
             <p>Please enter the validation code:</p>
             <div className="mb-3">
               <input
                 type="text"
                 className="form-control"
                 value={verificationCode}
                 onChange={(e) => setVerificationCode(e.target.value)}
               />
             </div>
             {isCodeValid === false && (
        <div className="alert alert-danger" role="alert">
          Incorrect verification code. Please try again.
        </div>
      )}
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleVerifyCode}
      >
        Validate Code
      </button>
    </div>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
              {showPasswordInputs && (
    <Button variant="primary" onClick={handleSaveChanges}>
      Save changes
    </Button>
  )}
            </Modal.Footer>
          </Modal>
        </>
      </div>
    </div>
  );
}

export default ResetPassword;
