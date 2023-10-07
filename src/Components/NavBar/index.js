
import AppBar from '@mui/material/AppBar';
import {Menu} from '@mui/base';
import Button  from '@mui/material/Button';

export default function NavBar() {
    return (
       <AppBar>
            <Menu className='NavBar-Menu'>
            {navbar.map((navbarItem) => (
                <a><Button variant='h6' >
                    {navbarItem.name}
                </Button></a>
            ))}
            </Menu>
        </AppBar>
    );

    
};
const navbar = [
    {
        name:'header'
    },{
        name:'body'
    }
    
];