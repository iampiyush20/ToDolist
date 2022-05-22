import React from 'react'
// import {BsPencil} from 'react-icons/bs'
const Tasks = ({taskData,gettask,ShowUpdate,id5,Delete,Update,id,id2,id3,id4,Completed}) => {

  return (
    <div className="container border m-2 p-2" id={id}>
        <div className="row">
            <div className="col " id={id4}>
               <h4 id={id5}> {taskData}</h4>
            </div>
  
            <div className="col" >
            <button onClick={()=>Delete()} className='btn btn-danger'>x</button>
            </div>
            <div className="col" >
              <button onClick={()=>ShowUpdate()} className='btn btn-success'>S</button>
            </div>
             <div className="col" >
              <button onClick={()=>Completed()} className='btn btn-success'>C</button>
            </div>
            
        </div>
        <div id={id2} className="row m-3" style={{'display':'none'}}>
              <input className="form-control col" type="text" id={id3} />
              <button className="btn btn-success col mt-2"  onClick={()=>Update()}>up</button>
            </div>
    </div>
  )
}

export default Tasks