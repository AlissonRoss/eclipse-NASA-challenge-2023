import BasicCard from '../Card1'
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

export default function NavBar() {
    return (
        <div className="App-body"> 
        <Stack direction="row" spacing={2}>
            <DemoPaper>
                <BasicCard/>
            </DemoPaper>
        </Stack>
        </div>
    );
}

const DemoPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
    backgroundColor: 'transparent'
  }));