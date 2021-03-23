import { List } from '@material-ui/core'
import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import MenuIcon from '@material-ui/icons/Menu'
import LinkedinIcon from '@material-ui/icons/LinkedIn'
import GithubIcon from '@material-ui/icons/GitHub'


const Nav = () => {
  const [state, setState] = React.useState(false)

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(open);

  };

  const list = () => (
    <div onClick={toggleDrawer(true)}>
        <List>
  <ListItem button component="a" href="#about">
    <ListItemText primary="About" />
  </ListItem>

  <ListItem button component="a" href="#projects">
    <ListItemText primary="Projects" />
  </ListItem>

  <ListItem button component="a" href="#resume">
    <ListItemText primary="Resume" />
  </ListItem>

  <ListItem button component="a" href="#contact">
    <ListItemText primary="Contact" />
  </ListItem>

</List>
<Divider/>
<List>
  <ListItem button component="a" href="https://www.linkedin.com/in/stefanietinsley/">
    <LinkedinIcon/>
  </ListItem>

  <ListItem button component="a" href="https://github.com/stefaniepires/">
    <GithubIcon/>
  </ListItem>

  </List>
   </div>
  )

  return (
<div>
<Button onClick={toggleDrawer(true)}><MenuIcon/></Button>
<Drawer
anchor={'left'}
open={state}
onClose={toggleDrawer(false)}
>
  {list()}
</Drawer>
</div>
  )
}

export default Nav