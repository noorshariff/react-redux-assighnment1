import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';



export class Header extends Component {

    render() {
        return (
            <div >
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            {/* <MenuIcon /> */}
                        </IconButton>

                        <Button color="inherit">Assighnment</Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default Header
