import profilePic from './ProfilePic.png'
import {Portfolio} from './Portfolio'
import {Skills} from './Skills'
import { Stack } from '@mui/system'

export const About = () => {
    return (
        <div style={{margin:'4vh auto', maxWidth:'600px', width:'90vw'}}>
            <Stack style={{margin:'0 auto', width:'fit-content'}} spacing={4} direction="row" alignItems="center">
                <div style={{width:'130px'}}>
                    <img style={{width:'130px', height:'auto', borderRadius:'50%', boxShadow: '0px 0px 10px #36363669', backgroundColor: '#F5C400'}} src={profilePic} alt="" />
                </div>
                <div>
                    <h2 style={{textAlign: 'left', margin: '0 0 5px 0'}}>Karl-Fredrik Hagman</h2>
                    <h4>Full-stack developer</h4>
                </div>
            </Stack>
            <h2>About Me</h2>
            <p>    
                <b>Started</b> programming 2018, studyed interaction desing 2020 and June 2023 I'm graduating a 2yr data science degree. 
            </p>
            <br />
            <p>    
                <b>Blockchain became an interest</b> about the same time i started exporling web development, but it took me up intill 2023 to start coding smart contracts. Im always interest in new technologys, and because of that i've chosen to pursue a career in the top 3 GOAT technology's. The internet, blockchain and arteficial inteligence.
            </p>

            <hr style={{margin:'20px 0 40px 0'}} />
            <h2>Syntax</h2>
            <Skills />

            <hr />
            <h2>Portfolio</h2>
            <Portfolio />
        </div>
    )
}