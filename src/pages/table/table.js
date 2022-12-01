import React from "react";

const Table = (props) => {
  let tableData = props.data || [];
  console.log(props);
  return (
    <>
      <div className="table">
        <table>
          <tr>
            <th>First Name</th>
            <th>Full Name</th>
            <th>Name</th>
            <th>Degree</th>
            <th>Languages Known</th>
            <th>Framework Known</th>
          </tr>
          <tbody>
            {props.data.map((rowData, index) => {
              return (
                <tr key={index}>
                  <td>{rowData.fname}</td>
                  <td>{rowData.lname}</td>
                  <td>{rowData.name}</td>
                  <td>{rowData.degree}</td>
                  <td>{rowData.lang}</td>
                  <td>{rowData.framework}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button
          onClick={() => props.onClear()}
          className="clearTable"
          type="button"
          variant="contained"
        >
          Clear
        </button>
      </div>
    </>
  );
};

export default Table;
