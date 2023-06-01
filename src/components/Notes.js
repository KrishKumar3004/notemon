import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";

const Notes = () => {
  const context = useContext(NoteContext);
  const { notes, setNotes } = context;
  return (
    <div>
      <h2 className="text-center">NOTES</h2>
      <div className="row">
        {notes.map((note) => {
          return (
            <div className="col-md-6">
              <NoteItem key={note._id} note={note} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Notes;
