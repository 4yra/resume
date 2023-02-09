import { SkillBAr } from "../components/SkillBar"
import BatteryCharging20Icon from '@mui/icons-material/BatteryCharging20';
import BatteryCharging30Icon from '@mui/icons-material/BatteryCharging30';
import BatteryCharging50Icon from '@mui/icons-material/BatteryCharging50';
// import BatteryCharging80Icon from '@mui/icons-material/BatteryCharging80';
import BatteryCharging90Icon from '@mui/icons-material/BatteryCharging90';
import { Stack } from "@mui/material";
export const Skills = () => {
    const style = {
        transform:'rotate(90deg)',
        color:'#0045EB'
       }
    return (
        <div style={{ maxWidth:'500px',  width:'90vw', margin:'20px auto'}}>
            <Stack spacing={1} direction="row" >
                <div>
                    <SkillBAr title={'Python'} skillIcon=
                    {<BatteryCharging90Icon style={style}/>}/>
                    <SkillBAr title={'JavaScript'} skillIcon={<BatteryCharging90Icon style={style}/>}/>
                    <SkillBAr title={'React JS'} skillIcon={<BatteryCharging50Icon style={style}/>}/>
                    <SkillBAr title={'Firebase'} skillIcon={<BatteryCharging30Icon style={style}/>}/>
                    <SkillBAr title={'Solidity'} skillIcon={<BatteryCharging20Icon style={style}/>}/>
                </div>
                <p style={{textAlign:'left', width:'90%', margin:'8px auto'}}>
                <b>Python</b>for datas analysis, machine learning and backend structures. 
                    <br/> <b>JavaScript</b> for user experincce and web desing. 
                    <br/> <b>Solidity</b> for blockchain development.

                </p>
            </Stack>
        </div>
    )
}