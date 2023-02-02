import { Outlet, Link} from "react-router-dom";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import BarChartIcon from '@mui/icons-material/BarChart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import './Components.module.css';

export const Navbar = () => {
    return (
        <div>
            <nav>
                <Link to="/">
                    <div>
                        <AccountCircleIcon />
                        <p>Resume</p>
                    </div>
                </Link>
                {/* <Link to="/skills">
                    <div>
                        <BarChartIcon />
                        <p>Skills</p>
                    </div>
                </Link> */}
                {/* <Link to="/portfolio">
                    <div>
                        <FolderOpenIcon />
                        <p>Portfolio</p>
                    </div>
                </Link> */}
                
                <Link to="https://github.com/4yra">
                    <div>
                        <GitHubIcon />
                        <p>Github</p>
                    </div>
                </Link>
                <Link to="https://www.linkedin.com/in/karl-fredrik-hagman-58a748225/">
                    <div>
                        <LinkedInIcon />
                        <p>LinkedIn</p>
                    </div>
                </Link>
                <Link to="/contact">
                    <div>
                        <MailOutlineIcon />
                        <p>Contact</p>
                    </div>
                </Link>
            </nav>
            <Outlet />
        </div>
    )
}