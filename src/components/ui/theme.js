import { createTheme } from '@mui/material/styles';

const navy = "#292C6D"
const rose = "FAEDF0"

export default createTheme({
    palette: {
        common: {
            NavyBlue: `${navy}`,
            DustyRose: `${rose}`,	
        },
        primary: {
            main: `${navy}`,	
        },
        secondary: {
            main: `${rose}`,
        }
        }
});