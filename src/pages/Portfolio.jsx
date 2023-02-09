import { ProjectComp } from "../components/ProjectComp"
import CalculateIcon from '@mui/icons-material/Calculate';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const arithemticDescriptoin = 'Elementary mathematics game'
const ABCDescriptoin = 'A social platform for hosting book clubs'
const TTTescriptoin = 'Learn fundamental skills with interactive tools'


export const Portfolio = () => {
    return (
        <>
            {/* <ProjectComp 
                title={'Arithemtic'} 
                description={arithemticDescriptoin} 
                icon={<CalculateIcon style={{fontSize: '1.8rem'}}/>}
                github={'https://book-club-sandbox.netlify.app/'}
                launch={'https://book-club-sandbox.netlify.app/'}
            /> */}
            {/* <hr style={{width:'50%', margin:'20px auto'}}/> */}
            <ProjectComp 
                title={'Book Club'} 
                description={ABCDescriptoin} 
                icon={<MenuBookIcon style={{fontSize: '1.8rem'}}/>}
                github={'https://github.com/4yra/Book-Club'}
                launch={'https://book-club-sandbox.netlify.app/'}
            />
            {/* <hr style={{width:'50%', margin:'20px auto'}}/> */}
            {/* <ProjectComp 
                title={'Funadmentas'} 
                description={TTTescriptoin} 
                icon={<MenuBookIcon style={{fontSize: '1.8rem'}}/>}
                github={'https://github.com/4yra/tic-tac-toe'}
                launch={'https://ttt-lets-go.netlify.app/'}
            /> */}
        </> 
    )
}