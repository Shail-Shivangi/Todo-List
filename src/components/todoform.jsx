import  './todo.css';
import React,{useState} from 'react';
export const Todoform=({onAddtodo})=>{
    const[inputvalue,setinputvalue]=useState({});

    const onchangehandler=(value)=>{
        setinputvalue({id:value, content:value, checked:false});
    };

    const handleFormSubmit=(event)=>{
        event.preventDefault();
        onAddtodo(inputvalue);
        setinputvalue({id:"",content:"", checked:false}); 
    };

    return(
        <><section>
        <form onSubmit={handleFormSubmit}>
            <div>
                <input style={{marginLeft:'50px'}} type="text" className='todo-input' placeholder='Enter Any Task' autoComplete='off' value={inputvalue.content} onChange={(event)=>onchangehandler(event.target.value)}/>
            </div>
            <div>
                <button type='submit' className='todo-task'>Add Task</button>
            </div>
        </form>
    </section>
        </>
    )
}