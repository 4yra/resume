import style from './Components.module.css';
import { Stack } from '@mui/material';
import { Box } from '@mui/material';
import { Link} from "react-router-dom";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import GitHubIcon from '@mui/icons-material/GitHub';

export const ProjectComp = (props) => {
    return (
        <div style={{width:'fit-content', margin:'10px auto'}}>
            <div className={style.projectComp}>

                <Box sx={{ width: "300px" }}>
                    <Stack spacing={1} direction='row' alignitems="center">
                        <div>
                            <div style={{display:'flex', alignItems:"center", margin:'0 auto', width:'fit-content'}} >
                                <h4 style={{margin: '0'}}>{props.title}</h4>
                                {/* {props.icon} */}
                            </div>
                        </div>
                    </Stack>
                    <p style={{ textAlign:'left'}}>{props.description}</p>
                </Box>
                
                <Link to={props.github}>
                    <div style={{borderRadius: '10px', border:'solid black 1px', width: '60px', height:'50px', paddingTop:'10px'}}>
                        <GitHubIcon />
                        <p>Code</p>
                    </div>
                </Link>
                <Link to={props.launch}>
                    <div style={{borderRadius: '10px', border:'solid black 1px', width: '60px', height:'50px', paddingTop:'10px'}}>
                        <RocketLaunchIcon />
                        <p>Launch</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}