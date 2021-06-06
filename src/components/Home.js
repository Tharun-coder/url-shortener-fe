import React, { useEffect, useState } from "react";
import trim from "../functions";
import "../styles/Home.css";
import Modal from "./Modal";

function Home() {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(async () => {
    let res = await fetch("https://urlshortener-be.herokuapp.com/home");
    let records = await res.json();
    // console.log(records);
    setData(records.data);
  }, [data]);

  const closeModal = () => {
    setModal(false);
  };

  const openModal = () => {
    setModal(true);
  };

  const handleOpen = async (str) => {
    await fetch(
      `https://urlshortener-be.herokuapp.com/home/shorten_url/${str}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
  };

  return (
    <div className="container-fluid home">
      <div className="row header">
        <div className="col-lg-8">
          <h1>URL Shortener makes life ease</h1>
        </div>
        <div className="col-lg-4">
          <button className="btn btn-primary" onClick={openModal}>
            Create Short URL
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <h4 className="table-header">Generated URLs and Respective clicks</h4>
        </div>
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Full URL</th>
                <th scope="col">Short URL</th>
                <th scope="col">Total Clicks</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((e, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <a href={e.full} target="_blank">
                          {trim(e.full)}
                        </a>
                      </td>
                      <td>
                        <a
                          href="/home"
                          onClick={(e) => {
                            e.preventDefault();
                            handleOpen(e.target.computedName);
                          }}
                        >
                          {e.short}
                        </a>
                      </td>
                      <td>{e.clicks}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
      {modal && <Modal closeModal={closeModal} />}
    </div>
  );
}

export default Home;
