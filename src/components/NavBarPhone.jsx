import * as React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import styled from 'styled-components'
import ComputerIcon from '@mui/icons-material/Computer';
import HomeIcon from '@mui/icons-material/Home';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import EmailIcon from '@mui/icons-material/Email';

const NavBarPhone = () => {

  const [userOnHomePage] = useState(location.pathname === "/");

  const [state, setState] = useState({right: false});

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  function ListItemLink(props) {
    const { icon, primary, to } = props;
  
    return (
      <List>
        <ListItem button component={Link} to={to}>
          {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
          <ListItemText primary={primary} />
        </ListItem>
      </List>
    );
  }

  function ListItemAnchor(props) {
    const { icon, primary, href } = props;
  
    return (
        <List>
        <ListItem button component="a" href={href}>
          {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
          <ListItemText primary={primary} />
        </ListItem>
        </List>
    );
  }

  const list = (anchor) => (
    <Box
      sx={{ width: 'auto', background:"linear-gradient(#0f2030, #718994bd)", fontFamily:"LarkenExtraBold", color:"#fff3af"}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {userOnHomePage ? 
      <List>
        {['Home', 'About Me', 'Projects', 'Get In Touch'].map(text => (
          <ListItem key={text} disablePadding>
          <>
          {text === "Home" && <ListItemLink to="/" primary={text} icon={<HomeIcon/>} />}

          {text === "Projects" && <ListItemAnchor href="#projectsSection" primary={text} icon={<ComputerIcon/>}/>}

          {text === "About Me" && <ListItemLink  to="/Aboutme" primary={text} icon={<EmojiPeopleIcon/>} />}
          
          {text === "Get In Touch" && <ListItemAnchor href="#getInTouchSection" primary={text} icon={<EmailIcon/>}/>}
        
        </>
          </ListItem>
        ))}
      </List>
      : 
      <List>
        <ListItem disablePadding>
        <ListItemLink to="/" primary={"Get Back Home"} icon={<HomeIcon/>} />
        </ListItem>
      </List>
      } 
        
      <Divider />
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
        <CustomButton onClick={toggleDrawer(anchor, true)}>
          <MenuOpenIcon />
        </CustomButton>          
        <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default NavBarPhone;

const CustomButton = styled.button`
    all: unset;
    position:absolute;
    right:10%;
    top:10%;
`
