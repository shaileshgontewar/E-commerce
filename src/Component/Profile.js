import React from "react";

const Profile = () => {
  return (
    <>
      <div className="login-main">
        <h2>Sigin Form</h2>
        <form action="" className="form">
          <div className="username">
            <label htmlFor="">Username</label>
            <input type="text" />
          </div>
          <div className="username">
            <label htmlFor="">email</label>
            <input type="email" />
          </div>
          <div className="username">
            <label htmlFor="">Password</label>
            <input type="password" />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Profile;
