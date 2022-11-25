import React, {Component, useState} from "react";
import Sidebar from './Sidebar';
import Body from './Body'
import {list} from './students'


export const YouTube =()=>{

    const[data, setData] = useState(list);

    const onDelete =(id)=>{
        let res = data.filter(vl => vl.id!== id);
        setData(res)
    };

    return(
        <>
        <div>
            <Sidebar data={data}/>
            <Body data={data} onDelete={onDelete}/>
        </div>
        </>
    )
}
export default YouTube
