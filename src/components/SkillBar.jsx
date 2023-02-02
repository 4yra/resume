
// import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
// import Slider from '@mui/material/Slider';
import style from './Components.module.css';

export const SkillBAr = (props) =>{
    return (
        <div className={style.page}>
            <Box sx={{ margin:'5px auto', width: "160px" }}>
                <Stack spacing={2} direction="row" alignItems="center" >
                    {props.skillIcon}
                    <h5>{props.title}</h5>
                </Stack>
            </Box>
        </div>
    )
}