import React from "react";

const NoteItem = (props) => {
  const { note } = props;
  return (
    <div className="card">
      <div
        className="card-body"
        style={{
          backgroundImage: `url("/white-texture-background.jpg")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <h5 className="card-title">{note.title}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">01-06-2021</h6>
        <p className="card-text">{note.description}</p>
        <a href="#" className="card-link">
          Card link
        </a>
        <a href="#" className="card-link">
          Another link
        </a>
      </div>
    </div>
  );
};

export default NoteItem;
