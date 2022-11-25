import React, {useState} from "react";
import {Container, Title} from './style';
import {list} from '../students'

export  const YouTube =({data, onDelete})=>{
    // const[data, setData] = useState(list);

    // const onDelete =(id)=>{
    //     let res = data.filter(vl => vl.id!== id);
    //     setData(res)
    // };
    
    return <Container>
        <Title >Students List: {data.length}</Title>
    {
        list.map((value)=>{
            return( 
            <h1 > 
            ID: {value.id} --
            name: {value.name} - {" "}
            <button onClick={()=> onDelete(value.id)}>delete</button> 
            </h1>
            );
        })
    }
    </Container>
    }
    
export default YouTube;
