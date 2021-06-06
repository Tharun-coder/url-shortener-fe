import React, { useState } from "react";
import "../styles/Modal.css";

function Modal({ closeModal }) {
  const [url, setUrl] = useState("");

  const handleClick = async () => {
    url === ""
      ? alert("Enter Full Url to proceed")
      : await fetch("https://urlshortener-be.herokuapp.com/home/shorten_url", {
          method: "POST",
          body: JSON.stringify({ full_url: url }),
          headers: {
            "Content-type": "application/json",
          },
        });
    closeModal();
  };

  return (
    <div className="Modal">
      <div className="content">
        <div className="header-modal">
          <h5>Create Short URL</h5>
          <button className="close-modal" onClick={closeModal}>
            <i class="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>
        <label htmlFor="full-url">Enter URL to be shortened</label>
        <input
          type="text"
          id="full-url"
          className="form-group inp-modal"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          autoComplete="off"
        />
        <button className="btn btn-primary btn-modal" onClick={handleClick}>
          Generate Short URL
        </button>
      </div>
    </div>
  );
}

export default Modal;
