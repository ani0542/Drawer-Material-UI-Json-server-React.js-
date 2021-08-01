import React from 'react'
import { makeStyles } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { format } from 'date-fns'
import Avatar from '@material-ui/core/Avatar'
// import Divider from '@material-ui/core/Divider';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import {menuItems} from "../Router/Router"
import Lists from '../Router/Lists'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  page: {
    background: '#f9f9f9',
    width: '100%',
    padding: theme.spacing(3),
    height:'100vh'
},
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },

  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
 
date: {
    flexGrow: 1
  },

  toolbar: theme.mixins.toolbar,

  avatar: {
    marginLeft: theme.spacing(2)
  },

  title: {
    padding: theme.spacing(2),   //means 2 * 8 px  = 16px

  },

  drawerPaper: {
    width: drawerWidth,
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  
}));



function Layout({children}) {

    const classes = useStyles()
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };

      const drawer = (
        <div>
          <div className={classes.toolbar} />
                   <div>
                       <Typography variant="h5" className={classes.title}>
                              Animesh Awasthi
                        </Typography>
                    </div>
           {/* <Divider /> */}
            <List>
                             <Lists menuItems={menuItems}/>     
            </List>
          {/* <Divider /> */}
        </div>
      );


  

    return (
        <div className={classes.root}>
        <CssBaseline />
            <AppBar 
                position="fixed" 
                className={classes.appBar}
                elevation={0}
                color="secondary"
            >
                <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    className={classes.menuButton}
                   >
              <MenuIcon />
            </IconButton>
                <Typography className={classes.date}>
                    Today is the {format(new Date(), 'do MMMM Y')}
                </Typography>
                <Typography>AnimeshTechnical</Typography>
                   <Avatar className={classes.avatar} src="/mario-av.png" />
                </Toolbar>
            </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
            //   container={container}
              variant="temporary"
            //   anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            anchor='left'
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
       

                      <div className={classes.page}>
                        <div className={classes.toolbar}></div>
                                { children }
                        </div>  
        </div>
    )
}

export default Layout
