import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

const ProfileSettings = () => (
  <div>
    <List>
      <ListItem>Hooray</ListItem>
      <ListItem>Hooray</ListItem>
      <ListItem>Hooray</ListItem>
    </List>
    <Divider inset={true}/>
    <List>
      <ListItem>Oh KNOW</ListItem>
      <ListItem>Oh KNOW</ListItem>
      <ListItem>Oh KNOW</ListItem>
    </List>
  </div>
);

export default ProfileSettings;
