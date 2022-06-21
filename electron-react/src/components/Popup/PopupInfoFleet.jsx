import React from "react";
import "./PopupInfo.scss";
import moment from "moment";
import EightMpOutlinedIcon from '@mui/icons-material/EightMpOutlined';
import CarCrashOutlinedIcon from '@mui/icons-material/CarCrashOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import axios from "axios";
import {useEffect} from "react";
function PopupInfoFleet(props){
    
    const getChauffeur=(ID)=>{
                axios.get(`http://localhost:3001/VehiculeAPI/single?id=${ID}`).then(res=>{
    // const getChauffeur=(ID)=>{
    //             axios.get(`https://qlogisticsapp.herokuapp.com/VehiculeAPI/single?id=${ID}`).then(res=>{

            if(res.data.success){
                console.log(res.data.vehicule);

            }
        }
        )
    }
    const today= new Date();
    const calcDate = (date1, date2)=>{
        /*
        * calcDate() : Calculates the difference between two dates
        * @date1 : "First Date in the format M-D-Y"
        * @date2 : "Second Date in the format M-D-Y"
        * return : Array
        */
        //Initiate date object
        const dt_date1 = new Date(date1);
        const dt_date2= new Date(date2);
        console.log(dt_date1,"dt_date1")
        console.log(dt_date2,"dt_date2")
        //Get the Timestamp
        var date1 =dt_date1.getTime();
        var date2 = dt_date2.getTime();
        
        var calc;
        //Check which timestamp is greater
        if (date1 > date2){
            calc = new Date(date1 - date2) ;
        }else{
            calc = new Date(date2 - date1) ;
        }
        //Retrieve the date, month and year
        var calcFormatTmp = calc.getDate() + '-' + (calc.getMonth()+1)+ '-'+calc.getFullYear();
        //Convert to an array and store
        var calcFormat = calcFormatTmp.split("-");
        //Subtract each member of our array from the default date
        var days_passed = parseInt(Math.abs(calcFormat[0]) - 1);
        var months_passed = parseInt(Math.abs(calcFormat[1]) - 1);
        var years_passed = parseInt(Math.abs(calcFormat[2] -   1970));
        
        //Set up custom text
        const yrsTxt =["year", "years"];
        const mnthsTxt = ["month", "months"];
        const daysTxt = ["day", "days"]; 
        
        //Convert to days and sum together
        var total_days = (years_passed * 365) + (months_passed * 30.417) + days_passed;
        
        //display result with custom text
        const result = ((years_passed == 1) ? years_passed+ ' '+ yrsTxt[0] + ' ' : (years_passed > 1 )  ? 
        years_passed+ ' ' + yrsTxt[1] + ' ' : '') + 
        ((months_passed == 1) ? months_passed+ ' ' + mnthsTxt[0] :  (months_passed > 1) ? 
         months_passed+ ' ' + mnthsTxt[1] + ' ' : '') +
        ((days_passed == 1) ? days_passed+ ' ' + daysTxt[0] : (days_passed > 1) ? 
        days_passed+ ' ' + daysTxt[1] : '' );
        
        //Build our return value
        const retval = {
            "total_days" : Math.round(total_days),
            "result" :  result
        }
        //return the result
        console.log(retval);
        }
// const getDef = (date) => {
//     console.log(today)
//     let def =new Date(moment(date).format("YYYY/DD/MM"));
//     let tod= today.getFullYear()+"/"+today.getDate()+"/"+today.getMonth();
//     console.log(def,tod)
//     var Difference_In_Time = tod.getTime() - def.getTime();
//     console.log(Difference_In_Time)
//     var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
//     console.log(Difference_In_Days)
// }
    useEffect(()=>{
        getChauffeur(props.id)
    //     calcDate(moment(props.data.Maintenance).format("MM-DD-YYYY"),moment(today).format("MM-DD-YYYY"))
    // } )
    })
    return (props.trigger) ? (
        <div className="popupinfo">
            <div className="popup-innerinfo">
            <h3> Vehicle Informations</h3>
                <div className="formulerinfo">
                <div className="formleft">
               
            <div className="forminfo">
                <div className="infoname">
            <DirectionsCarFilledOutlinedIcon className="iconinfo" fontSize="small"/><span>Vehicle Name:</span>
            </div>
            <div className="attribinfo">{props.data.name}</div>
            </div>
            
    
            
            <div className="forminfo">
                <div className="infoname">
            <EightMpOutlinedIcon className="iconinfo" fontSize="small"/><span>Matricule:</span>
            </div>
            <div className="attribinfo">{props.data.Matricule}</div>
            </div>
            
            <div className="forminfo">
                <div className="infoname">
            <DirectionsCarFilledOutlinedIcon className="iconinfo" fontSize="small"/><span>Driver:</span>
            </div>
            <div className="attribinfo">{props.data.Driver.name}</div>
            </div>
            </div>
            <div className="formright">
            <div className="forminfo">
                <div className="infoname">
            <LocalOfferOutlinedIcon className="iconinfo" fontSize="small"/><span>Category:</span>
            </div>
            <div className="attribinfo">{props.data.Category}</div>
            </div>
            
            <div className="forminfo">
                <div className="infoname">
            <CarCrashOutlinedIcon className="iconinfo" fontSize="small"/><span>Last maintenance:</span>
            </div>
            <div className="attribinfo">{moment(props.data.Maintenance).format("DD/MM/YYYY")}</div>
            </div>
            <div className="forminfo">
                <div className="infoname">
            <HelpOutlineOutlinedIcon className="iconinfo" fontSize="small"/><span>status:</span>
            </div>
            <div className="attribinfo">{props.data.status}</div>
            </div>
            </div>
            </div>
                <div className="buttonpopinfo">
                <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupInfoFleet;