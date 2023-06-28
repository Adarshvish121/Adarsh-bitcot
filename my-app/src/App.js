import "./App.css";
import React, { useState } from "react";
import logo from './icon/icons8-delete.svg';
import editlogo from './icon/icons8-edit.svg';
import previewlogo from './icon/icons8-preview-30.png';
import addlogo from './icon/icons8-add-30.png';
import contacticon from './icon/icons8-male-user-30.png';
function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
  });
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, input]);
    setInput({
      name: "",
      email: "",
      address: "",
      phoneNumber: "",
    });
  };
  const handleDelete = (index) => {
    const filterdata = data.filter((item, i) => i !== index);
    setData(filterdata);
  };

  const handleEdit = (index) => {
    const editData = data[index];
    setInput({
      name: editData.name,
      email: editData.email,
      phoneNumber: editData.phoneNumber,
      address: editData.address,
    });
  };
  
  const handleReset = (e) => {
    setInput({
      name: "",
      email: "",
      address: "",
      phoneNumber: "",
    });
    console.log(data)
  };
  const handlePreview = (e) => {
   console.log(data )
  };
  
  return (
    <>
    <div className="Header">
    <div>
    <h3>All Contacts<img src={addlogo} alt="Logo" /></h3>
    <div class="card-group">
  <div class="card bg-dark">
    <div class="card-body">
    <table className="table" id="mytable">
        <tbody>
          {data.map((item, i) => (
            <tr>
              <td>{i + 1}</td>
              <td><img src={contacticon} alt="Logo" /></td>
              <td></td>
              <td>
                {item.name} <br />
                {item.phoneNumber}
              </td>
              <td>
                <button className="m-2" onClick={() => handlePreview(i)}><img src={previewlogo} alt="Logo" /></button>
                <button className="m-2" onClick={() => handleDelete(i)}><img src={logo} alt="Logo" /></button>
                <button className="m-2" onClick={() => handleEdit(i)}><img src={editlogo} alt="Logo" /></button>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  </div>
</div>

    </div>
      
      <form onSubmit={handleSubmit}>
        <label> name :</label>
        <br />
        <input
          placeholder="Enter Your Name"
          name="name"
          value={input.name}
          onChange={handleChange}
        />
        <br />
        <label> email :</label>
        <br />
        <input
          placeholder="Enter Your Email"
          name="email"
          value={input.email}
          onChange={handleChange}
        />
        <br />
        <label> PhoneNumber :</label>
        <br />
        <input
          type="text"
          placeholder="Enter Your Phone Number"
          name="phoneNumber"
          value={input.phoneNumber}
          onChange={handleChange}
        />
        <br />
        <label> address :</label>
        <br />
        <input
          type="text"
          placeholder="Enter Your Address"
          name="address"
          value={input.address}
          onChange={handleChange}
        />
        <br />
        <button type="submit" className="btn btn-primary mx-2 my-2">
          Submit
        </button>
        <button type="button" className="btn btn-success" onClick={handleReset}>
          Reset
        </button>
      </form>
    </div>
  
    </>
   
  );
}

export default App;
