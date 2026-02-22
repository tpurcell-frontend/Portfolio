// Material UI
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

// Styles
import '../assets/styles/components/Header.scss'
import '../assets/styles/components/Menu.scss'

export default function Header() {

    return (
        <header>
            <div className="container">
                <div className="header-info">
                    <span><a href="/">Travis Purcell's Portfolio</a></span>
                    <nav className="menu">
                        <ul>
                            <li>
                                <a href="#">Projects</a>
                                <ul className="menu-dropdown">
                                    <li><a href="/projects/dashboard">Dashboard</a></li>
                                    <li><a href="/projects/planet-generator">Planet Generator</a></li>
                                    {/* <li><a href="/projects/sandwich-maker">Sandwich Maker</a></li> */}
                                    <li><a href="/projects/todo-list">ToDo List</a></li>
                                </ul>
                            </li>
                            <li><a target="_blank" rel="noopener noreferrer" href="mailto:travis.n.purcell@gmail.com">Email</a><ArrowOutwardIcon className="external"/></li>
                            <li><a target="_blank"  href="https://github.com/tpurcell-frontend">Github</a><ArrowOutwardIcon className="external"/></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}