import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={`number-badge ${className}`}>
      <div className="number-badge1">
        <b className="log-in">Log in</b>
        <div className="exploration-message">
          <div className="enter-to-continue1">
            enter to continue and explore within your grasp.
          </div>
        </div>
      </div>
      <div className="email-addres-parent">
        <div className="email-addres2">Email Addres</div>
        <input
          className="youraddresemailcom1"
          placeholder="Youraddres@email.com"
          type="text"
        ></input>
        <img
          className="email-separator-icon"
          alt=""
          src="/email-separator.svg"
        />
      </div>
      <div className="password-parent">
        <div className="password4">Password</div>
        <div className="password-input2">
          <div className="enter-your-password1">Enter your password</div>
          <div className="password-visibility">
            <img className="eyes-icon1" loading="lazy" alt="" src="/eyes.svg" />
          </div>
        </div>
        <img
          className="password-separator-icon"
          loading="lazy"
          alt=""
          src="/email-separator.svg"
        />
      </div>
      <div className="action-container-wrapper">
        <div className="action-container">
          <div className="login-signup">
            <div className="login-button-container">
              <div className="login-button-background" />
              <div className="login-button-background1" />
              <div className="login-to-continue2">Login to Continue</div>
            </div>
          </div>
          <div className="dont-have-an-container2">
            <span>{`Don’t have an account ? `}</span>
            <b className="sign-up3">Sign up</b>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
