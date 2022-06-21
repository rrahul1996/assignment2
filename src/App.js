import { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [newdata, setNewdata] = useState({
    firstname: '',
    lastname: ''
  });
  const addnewdataHandle = (e) => {
    e.preventDefault();

    const fieldname = e.target.getAttribute('name');
    const fieldvalue = e.target.value;

    const newFormData = { ...newdata};
    newFormData[fieldname] = fieldvalue;

    setNewdata(newFormData);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = {
      firstname: newdata.firstname,
      lastname: newdata.lastname
    }

    const newDatas = [...data, newData]
    setData(newDatas);
  }

console.log()
  return (
    <div className="app-container">
      <h2>Add New Data</h2>
      <form  onSubmit={handleSubmit}>
      <label>First Name :</label>
        <input 
          type="text"
          name="firstname"
          placeholder="Enter First Name..."
          onChange={addnewdataHandle}
        />
        <input 
          type="text"
          name="lastname"
          placeholder="Enter First Name..."
          onChange={addnewdataHandle}
        />
        <button type="submit" class="btn btn-primary"  >Add</button>
      </form>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((c) => (
                <tr>
                <td>{c.firstname}</td>
                <td>{c.lastname}</td>
              </tr>
              ))
            }
          </tbody>
        </table>
    </div>
  );
}

export default App;
