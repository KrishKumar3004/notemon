import React from "react";
import Notes from "./Notes";

const Home = () => {
  return (
    <div className="w-75 mx-auto">
      <h2 className="text-center">CREATE YOUR NOTES</h2>
      <form
        action=""
        className="p-3 my-3 border"
        style={{
          backgroundImage: `url("/white-texture-background.jpg")`,
        }}
      >
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter title here"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="note" className="form-label">
            Note
          </label>
          <textarea className="form-control" id="note" rows="3"></textarea>
        </div>
        <div>
          <button type="submit" className="btn btn-dark mb-3">
            Save
          </button>
        </div>
      </form>
      <Notes />
    </div>
  );
};

export default Home;
