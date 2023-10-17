import { useEffect } from "react";
import {ThemeProvider, responsiveFontSizes, createTheme, Typography} from '@mui/material';
let theme = createTheme();
theme = responsiveFontSizes(theme);

function Notfound() {

    useEffect(() => {
        document.title = "Centichain - Not found"
    }, [])

    return ( 
        <div style={{width:"100%",height:"500px", display:"grid", justifyContent:"center", alignContent:"center"}}>
            <ThemeProvider theme={theme}>
                <Typography variant="h1">
                    Sorry - Page Not Found
                </Typography>
            </ThemeProvider>
        </div>
     );
}

export default Notfound;