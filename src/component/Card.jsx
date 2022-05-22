import React, { useState } from 'react'
import Tasks from './Tasks'
const Card = () => {
    const [val,setVal]= useState('');
    const [task,setTask]=useState([]);
    const handleInput=(e)=>{
        // console.log(e);
        setVal(e.target.value);
    }

    const submitData=(e)=>{
         e.preventDefault();
         const newData=val;
         setTask([...task,newData]);
         setVal('')
        console.log(val)
    }
const Delete=(a)=>{
const del=task.filter((currElem,index)=>{
    return index !=a;
})
console.log('a')
console.log(del)
setTask(del)
}
const Update=(b)=>{
   const data= document.getElementById(`hhz${b}`).value;
   task[b]=data;
   document.getElementById(`mak`+b).innerHTML=data;
  console.log(data);
  console.log(task);
  // console.log('wdfwf')
}
const ShowUpdate=(curElem,index)=>{

      console.log(1+index)
      document.getElementById(`hhz${index}`).value=curElem;
      if(document.getElementById(`hhy${index}`).style.display=='block'){
        document.getElementById(`hhy${index}`).style.display="none";
      }else{
        document.getElementById(`hhy${index}`).style.display="block";
      }
}

const Completed=(index)=>{
   document.getElementById(`mak`+index).className='completed';
   document.getElementById(index).className='comgreen';
}
  return (
    <div className="container border p-5">
        <div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Enter Task</label>
    <input type="text" class="form-control" name='val' onChange={handleInput} id="exampleInputEmail1" value={val}/>
    </div>
  {
      task.map((curElem,index)=>{
          return (
            <Tasks
                taskData={curElem}
                key={index}
                Delete={()=>{Delete(index)}}
                Update={()=>{Update(index)}}
                id={index}
                id4={'dat'+index}
                id2={'hhy'+index}
                id3={'hhz'+index}
                id5={'mak'+index}
                ShowUpdate={()=>{ShowUpdate(curElem,index)}}
                Completed={()=>{Completed(index)}}
            />
          )
      })
  }
  <button type="submit" class="btn btn-primary" onClick={submitData}>Submit</button>
</div>
    </div>
  )
}

export default Card