import React, { useContext, useState } from 'react'
import PopUp from './PopUp/PopUp'
import { myContext } from './Context/Context'
import "./Empoy.css"
import ImageUpload from './UploadImg/ImageUpload'

const Employ = () => {


    const { empoydata, data, popup, setpopup } = useContext(myContext)
    console.log(data);
    const handlePopUp = () => {
        setpopup(!popup)
    }
    return (
        <div className='Employ'>
            <header>
                <h2>Employee</h2>
                <button onClick={handlePopUp}>+</button>
            </header>

            <div className="CardContainer">
                {data.length > 0 ?
                    data.map((ele) => {
                        return <>
                            <div className="Card">
                                <div className="Card-top">

                                    <div className='img'>
                                        {ele.img === ''
                                        ?<>
                                        
                                        {ele.firstname[0]} {ele.lastName[0]}
                                        </>
                                        
                                        : <>
                                   <img src={ele.img} alt="profile" />
                                   </>
                                    }
                                      </div>  
                                    <p>{ele.firstname} {ele.lastName}</p>

                                </div>
                                <div className='designatin'>
                                    <div>

                                        <span>Department</span>
                                        <p>{ele.Department}</p>
                                    </div>
                                    <div>
                                        <span>Designation</span>
                                        <p>{ele.Designation}</p>

                                    </div>
                                </div>
                                <div className='designatin'>
                                    <div>

                                        <span>Date Of Joining</span>
                                        <p>{ele.date}</p>

                                    </div>
                                    <div>

                                        <span>Salary</span>
                                        <p>{ele.salary}</p>
                                    </div>
                                </div>



                            </div>
                        </>
                    })
                    : <h2>Please Add Emoployee...</h2>}
            </div>

            {popup ? <PopUp /> : null}

            {/* <ImageUpload/> */}

        </div>
    )
}

export default Employ