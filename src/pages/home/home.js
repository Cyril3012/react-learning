import React, { useState } from "react";
import "./home.css";
import Table from "../table/table";

const Home = () => {
  const [tableData, setTabledata] = useState([]);

  const submit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    formData = Object.fromEntries(formData);
    let newData = [];
    newData.push(formData);
    setTabledata([...tableData, ...newData]);

    e.target.reset();
  };
  const clearTable = () => {
    setTabledata([]);
  };
  return (
    <>
      <div className="homeContainer">
        <div className="from">
          <form onSubmit={(e) => submit(e)}>
            <div className="fnameLname">
              <p>Name:</p>
              <input
                type="text"
                name="fname"
                id="fname"
                placeholder="First name"
              />
              <input
                type="text"
                name="lname"
                id="lname"
                placeholder="Last name"
              />
            </div>
            <p>Full Name:</p>
            <input type="text" name="name" id="name" placeholder="Full name" />
            <p>Degree:</p>
            <input type="text" name="degree" id="degree" placeholder="eg:MCA" />
            <p>Languages Known:</p>
            <input
              type="text"
              name="lang"
              id="lang"
              placeholder="eg:JAVA,Python"
            />
            <p>Frameworks:</p>
            <input
              type="text"
              name="framework"
              id="framework"
              placeholder="eg:Django,React,Anglar"
            />
            <button className="formSubmit" type="submit" variant="contained">
              Submit
            </button>
          </form>
        </div>

        <br></br>
        <br></br>
        <div className="table">
          <Table data={tableData} onClear={() => clearTable()} />
        </div>
      </div>
    </>
  );
};

export default Home;
