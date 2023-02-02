import { ProjectComp } from "../components/ProjectComp"
import CalculateIcon from '@mui/icons-material/Calculate';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const arithemticDescriptoin = 'Elementary mathematics game'
const ABCDescriptoin = 'A social platform for managing book clubs'
const TTTescriptoin = 'Tic Tac Toe'


export const Portfolio = () => {
    return (
        <>
            <ProjectComp 
                title={'Arithemtic'} 
                description={arithemticDescriptoin} 
                icon={<CalculateIcon style={{fontSize: '1.8rem'}}/>}
                projectPage={'https://github.com/4yra'}
            />
            <hr style={{width:'50%', margin:'20px auto'}}/>
            <ProjectComp 
                title={'Audio Book Club'} 
                description={ABCDescriptoin} 
                icon={<MenuBookIcon style={{fontSize: '1.8rem'}}/>}
                projectPage={'https://github.com/4yra'}
            />
            <hr style={{width:'50%', margin:'20px auto'}}/>
            <ProjectComp 
                title={'Tic Tac Toe'} 
                description={TTTescriptoin} 
                icon={<MenuBookIcon style={{fontSize: '1.8rem'}}/>}
                projectPage={'https://github.com/4yra'}
            />
        </> 
    )
}