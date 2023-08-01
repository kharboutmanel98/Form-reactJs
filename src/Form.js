import {useState} from 'react';

const Form = () => {

const [formData, setFormData]= useState({
    name: "",
    PhoneNumber: "",
    Age: "",
    isEmployee: false,
    salary: ""

})

function handleCheckBox(e){
    setFormData({...formData, isEmployee: e.target.checked})
}




  return (
    <>
      <h3>Requesting a Loan</h3>
      <hr />
      <form className="form">

        <label>Name:</label>
        <div>
          <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
        </div>
        <br />

        <label>Phone Number:</label>
        <div>
          <input type="text" value={formData.PhoneNumber} onChange={(e) => setFormData({...formData, PhoneNumber: e.target.value})}  />
        </div>  
        <br />

        <label>Age:</label>
        <div>
          <input type="number" value={formData.Age} onChange={(e) => setFormData({...formData, Age: e.target.value})} />
        </div>
        <br />

        <label>Are you an employee?</label>
        <div>
          <input type="checkbox" checked={formData.checked} onChange={handleCheckBox}/>
        </div>
        <br />

        <label>Salary</label>
        <div>
          <input type="text" />
        </div>
        <br />


        <button type="submit" style={{backgroundColor:'red' , color: 'white', fontSize:'25px', borderRadius:'10px'}}>Submit</button>
      </form>
    </>
  );
};

export default Form;
