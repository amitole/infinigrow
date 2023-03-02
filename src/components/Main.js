import * as React from 'react';
import TabContext from '@material-ui/lab/TabContext';
import Box from '@material-ui/core/Box';
import Tab from '@material-ui/core//Tab';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import  Accordion  from './Accordion';

import './Main.css'


const Main = () => {

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => { setValue(newValue); };


  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Tab 1" value="1" />
            <Tab label="Tab 2" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Accordion />
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
      </TabContext>
    </Box>
  )
}


export default Main