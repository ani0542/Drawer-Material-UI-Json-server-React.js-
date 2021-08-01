import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { useHistory, useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    active:{
        background:"#ff6600"
    }
}));



function Lists({menuItems}) {
    const history = useHistory()
    const location = useLocation()
    const classes = useStyles()



//jsx abstraction------------------------------
    const rendermap =(values)=>{
        return (
            <>
                               <ListItem 
                                  button 
                                  key={values.text} 
                                  onClick={() => history.push(values.path)}
                                  className={location.pathname === values.path ? classes.active : null}
                                >
                                    <ListItemIcon>{values.icon}</ListItemIcon>
                                    <ListItemText primary={values.text} />
                                    </ListItem>
            </>
        )
    }

    //jsx------------------------
    return (
        <>
                              
                                {menuItems.map(rendermap)}                    
        </>
    )
}

export default Lists
