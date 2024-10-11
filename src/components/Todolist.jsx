import { FaRegCheckSquare } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlinePendingActions } from "react-icons/md";
import  './todo.css';
import React,{useState} from 'react';
export const Todolist=({key,data,onHandleDelete,checked, onHandleChecked})=>{
    return(
        <> <li key={key} className='todo-items' >
        <span className={checked?"checkdata":"notcheckdata"} style={{fontSize:'20px', paddingBottom:'10px'}}>{data}</span>

        <button className='check-btn' style={{border:'none',backgroundColor:'transparent'}} onClick={()=>onHandleChecked(data)}><FaRegCheckSquare className={checked?"checklist":"notchecklist"} size={'25px'}/></button>

        <button className='del-btn' style={{border:'none', backgroundColor:'transparent'}}onClick={()=>onHandleDelete(data)}><RiDeleteBin6Line size={'26px'} /></button>

        <button className='pending' style={{border:'none',backgroundColor:'transparent'}} onClick={()=>onHandleChecked(data)}><MdOutlinePendingActions className={!checked?"checkpending":"notcheckpending"} size={'26px'} /></button>
    </li>
        </>
    )
}