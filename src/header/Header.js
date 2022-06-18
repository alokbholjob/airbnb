import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LanguageIcon from '@material-ui/icons/Language';
import { Avatar, Grid } from "@material-ui/core";
import ScrollDialog from '../modal/ModalFilter';
//import { Link } from "react-router-dom";

function Header() {
    let image = "https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png";
    return (
        <>
        <div className='header'>
           
                <img
                    className="header__icon"
                    src={image}
                    alt="Home Icon"
                />
           
           
            <div className='header__center'>
                <input type="text" placeholder='Any Where | Any Weekend'/>
                <SearchIcon className='search__icon'/>
            </div>

            <div className='header__right'>
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
        <Grid className='filter__section'
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '5vh' }}
        >
        <ScrollDialog />
        </Grid>
    </> 
    )
}

export default Header;