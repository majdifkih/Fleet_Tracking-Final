import React from "react";
import { useNavigate } from "react-router-dom";
import "./UserBlock.scss";

function UserBlock(){
    const navigate=useNavigate()
    return (
        <div className="pageuser-main">
            <div className="pageuser">
            <h1> This page private to the administrator</h1>
                
                <button  onClick={() => navigate(-1)} className="return-btn">Return </button>
                
                
            </div>

        </div>
    );
}
export default UserBlock;