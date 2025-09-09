import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import styles from './MyList.module.css';

export default function MyList() {
  return (
    <List>
      <ListItem className={styles.myListItem} selected>
        <ListItemText primary="Selected item" />
      </ListItem>
      <ListItem className={styles.myListItem}>
        <ListItemText primary="Regular item" />
      </ListItem>
    </List>
  );
}