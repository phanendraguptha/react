import React from "react";

export default function MovieForm({ history, match }) {
  return (
    <div>
      <h1>Movie form {match.params.id}</h1>
      <button
        className="btn btn-primary"
        onClick={() => history.push("/movies")}
      >
        save
      </button>
    </div>
  );
}
