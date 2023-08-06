import { useState } from "react"
import "./FormStyle.css"
// import Modal from './Modal'

const LoanForm = () => {
    const [loanInputs, setLoanInputs] = useState({
      name:"",
      phoneNumber:"",
      age:"",
      isEmployee: false,
      salaryRange: ""
    });

    function handleSubmit(event){
      event.preventDefault();
      alert("hello") 
    }

    const btnIsDisabled =
    loanInputs.name == "" ||
    loanInputs.age == "" ||
    loanInputs.phoneNumber == "";

    

  return (
    <div className="flex" style={{ flexDirection: "column"}}>

      <form className="flex" id='loan-form' style={{flexDirection:"column"}}>
      <h1>Requesting a Loan</h1>
        <hr />
        <label>Name:</label>
        <input value={loanInputs.name} onChange={(e) => setLoanInputs({...loanInputs, name: e.target.value})}/>

        <label>Phone Number:</label>
        <input value={loanInputs.phoneNumber} onChange={(e) => setLoanInputs({...loanInputs, phoneNumber: e.target.value})}/>

        <label>Age:</label>
        <input value={loanInputs.age} onChange={(e) => setLoanInputs({...loanInputs, age: e.target.value})} />

        <label style={{marginTop:"30px"}}>Are You Employee?</label>
        <input type="checkbox" checked={loanInputs.checked} onChange={(e) => setLoanInputs({...loanInputs, isEmployee: e.target.checked})}/>

        <label>Salary</label>
        <select value={loanInputs.salaryRange} onChange={(e) => setLoanInputs({...loanInputs, salaryRange: e.target.value})} >
            <option>Less Than 500$</option>
            <option>Between 500$ and 2000$</option>
            <option>Above 2000$</option>
        </select>

        <button 
           id="submit-loan-btn" 
           className={btnIsDisabled ? "disabled" : "" }
           onClick={handleSubmit}
           disabled={
            btnIsDisabled
            }
         >
         Submit
         </button>
        
      </form>
      {/* <Modal  /> */}
        
    </div>
  )
}

export default LoanForm