import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Icon from './icon';


export default function IconTabs() {
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <Paper square>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="auto"
        indicatorColor="default"
      >
        <Tab icon={<Icon name = "location_on"/>} aria-label="Destacados" className="tabsIcon"/>
        <Tab icon={<Icon name = "start" />} aria-label="Explorar" />
        <Tab icon={<Icon name = "start" />} aria-label="configuracion" />
      </Tabs>
    </Paper>
  );
}
