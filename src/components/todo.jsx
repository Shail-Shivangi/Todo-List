import React,{useEffect, useState} from 'react';
import { FaRegCheckSquare } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlinePendingActions } from "react-icons/md";
import  './todo.css';
import { Todoform } from './todoform.jsx';
import { Todolist } from './Todolist.jsx';

 const localkey="ToDo";
export const Todo=() =>{    
    const[task,settask]=useState(()=>{
        const storage=localStorage.getItem(localkey);
       // if(!storage) return [];
        return JSON.parse(storage);
});
    const[datetime,setdatetime]=useState("");

    const handleFormSubmit=(inputvalue)=>{
       const {id, content, checked}=inputvalue;

        if(!content)
            return;
        

        // if(task.includes(inputvalue)){           
        //     return;
        // }

        const isMatched=task.find((curr)=>curr.content===content);
        if(isMatched) return;
        settask((prevtask)=>[...prevtask,{id:id, content:content, checked:checked}]);
        
    };
    localStorage.setItem(localkey,JSON.stringify(task));
    useEffect(()=>{
        const interval=setInterval(()=>{
            const now=new Date();
            const formattedDate=now.toLocaleDateString();
            const formattedTime=now.toLocaleTimeString();
            setdatetime(`${formattedDate} - ${formattedTime}`)
            },1000);
            return ()=> clearInterval(interval);
    },[])

    const handledelete=(value)=>{
        const updateTask=task.filter((currvalue)=> currvalue.content!=value);
        settask(updateTask);
    };

    const handleClearAll=()=>{
        settask([]);
    };
    
    const handleChecked=(value)=>{
        const deleteUpdate=task.map((curr)=>{
            if(curr.content==value){
                return{...curr,checked:!curr.checked};
            }
            else{
                return curr;
            }
        });
        settask(deleteUpdate);
    }
  return (
    <div className='todo-container'>
        <header>
            <h1>Todo List</h1>
            <h2 className='date-time'>{datetime}</h2>
        </header>
       <Todoform onAddtodo={handleFormSubmit} />
        <section className='mylist'>
            <ul className='ullist'>
                {
                    task.map((currTask)=>{
                        return (
                           < Todolist key={currTask.id} data={currTask.content} onHandleDelete={handledelete} checked={currTask.checked} onHandleChecked={handleChecked}/>
                        );
                    })
                }
            </ul>
        </section>
        <section className='clr'>
            <button className='clr-btn'  onClick={handleClearAll}>Clear All</button>
        </section>
    </div>
  )
};
