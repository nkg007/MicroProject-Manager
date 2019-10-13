import React  from "react";
import MainCard from "./MainCard";

const MainList=({title})=>{
    return (
        <div sytyle={styles.container}>
        <h4>{title}</h4>
        <MainCard/>
        </div>
    )
};

const styles={
    container:
    {
        backgroundColor:"#ccc",
        borderRadius:3,
        width:300,
        paddind:8
    }
};
export default MainList;