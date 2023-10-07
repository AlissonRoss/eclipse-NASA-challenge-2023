
import AppBar from '@mui/material/AppBar';
import {Menu} from '@mui/base';
import Button  from '@mui/material/Button';

export default function NavBar() {
    return (
       <AppBar>
            <Menu className='NavBar-Menu'>
                <Button variant='h6' >
                    Header
                </Button>
                <Button variant='h6' >
                    Body
                </Button>
            </Menu>
        </AppBar>
    );
}