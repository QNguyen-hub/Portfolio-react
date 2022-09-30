import React from "react";
export default function Contact() {
  return (
    <form className="p-2" action="mailto:qnguyen303@gmail.com">
      <div className="form-group p-2">
        <label className="control-label">Name</label>
        <input
          type="name"
          className="form-control p-2"
          id="name"
          name="person"
        ></input>
      </div>
      <div className="form-group p-2">
        <label className="control-label">Email</label>
        <input
          type="email"
          className="form-control p-2"
          id="email_id"
          name="email_name"
        ></input>
      </div>
      <div className="form-group p-2">
        <textarea name="comments" rows="10" cols="50"></textarea>
      </div>

      <div className="form-group p-2">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
}
