import React, { useContext, useState } from 'react'
import { myContext } from '../Context/Context'
import "./PopUp.css"
import ImageUpload from '../UploadImg/ImageUpload'
const PopUp = () => {
  const { empoydata, setempoydata, intialData, data, setdata, setpopup, popup } = useContext(myContext)



  const cardData = () => {
    if (empoydata.firstname === '' ||
      empoydata.lastName === '' ||
      empoydata.Department === '' ||
      empoydata.Designation === '' ||
      empoydata.date === '' ||
      empoydata.salary === ''
    ) {

      alert("Please add all details")
    } else {
      setdata([...data, empoydata])

      setempoydata(intialData)
      setpopup(!popup)

    }
  }

  return (
    <div className='popupContainer'>
      <div className="popup">
        <h3>Create New Employee</h3>
        <div className='first'>
          <div>
            <label >First Name</label>
            <input type="text" value={empoydata.firstname}
              onChange={(e) => setempoydata({ ...empoydata, firstname: e.target.value })} />

          </div>
          <div>

            <label >Last Name</label>
            <input type="text"  value={empoydata.lastName}
              onChange={(e) => setempoydata({ ...empoydata, lastName: e.target.value })} />
          </div>
        </div>

        <div className="first">
          <div>

            <label >Department</label>
            <input type="text" value={empoydata.Department}
              onChange={(e) => setempoydata({ ...empoydata, Department: e.target.value })} />

          </div>
          <div>

            <label >Designation</label>
            <input type="text" value={empoydata.Designation}
              onChange={(e) => setempoydata({ ...empoydata, Designation: e.target.value })} />
          </div>
        </div>

       
        <div className="first">
<div>

              <label >Date Of Joining</label>
              <input type="date" placeholder='date' value={empoydata.date}
                onChange={(e) => setempoydata({ ...empoydata, date: e.target.value })} />
</div>
           <div>

              <label >Salary</label>
              <input type="text"  value={empoydata.salary}
                onChange={(e) => setempoydata({ ...empoydata, salary: e.target.value })} />
           </div>

        </div>
            
            
          
       
        <ImageUpload />
        <div className="createbtn">

        <button onClick={cardData}>Create</button>
        </div>
      </div>
    </div>
  )
}

export default PopUp