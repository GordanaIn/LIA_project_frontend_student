import React, {FC, useEffect, useState} from "react";
import FavoriteList from "../components/favoriteComponents/FavoriteList";
import theme from "../../../Theme";
import {ThemeProvider} from "@mui/material";
import CssBaseline from "@material-ui/core/CssBaseline";
import ApiStudentClient from "../Api/ApiStudentClient";

import {useStyles} from "../styles/SearchStyles";


const Favorite = () =>{

    const classes = useStyles();

    const [userId, SetUserId] = useState('4d6e066e-6e92-4d32-b0a8-f2b87d517773');
    const [internships, setInternships] = useState([]);

    useEffect(() => {
        ApiStudentClient.getFavourite(userId).then(setInternships).catch(err=>console.log(err));
    },[]);



    return(
        <ThemeProvider theme={theme} >
            <React.Fragment>
                <CssBaseline/>
                 <div>
                   {
                    <div className="row">
                     </div>
                   }
                     {
                         internships?.map((internship,index) =>(
                             <div key={index} className={classes.root}  >
                                 <FavoriteList internship={internship} />
                             </div>

                         ))
                     }
             </div>
            </React.Fragment>
        </ThemeProvider>
    )

}
export default Favorite;
