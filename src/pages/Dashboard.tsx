import React, {useState} from 'react'
import Header from '../components/Header'
import Heading from '../components/Heading'
import Button from '../components/Button'
import Modal from '../components/Modal'

import '../assets/styles/App.scss'
import '../assets/styles/components/Dashboard.scss'

import Tooltip from '@mui/material/Tooltip'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

// Dashboard Cards
import dashboardCards from '../data/dashboard-cards';
import { DashboardCard } from '../types/DashboardCard';

// Icons & Tooltips
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import SavingsIcon from '@mui/icons-material/Savings';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AddCardIcon from '@mui/icons-material/AddCard';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AddTaskIcon from '@mui/icons-material/AddTask';
import ApiIcon from '@mui/icons-material/Api';
import LogoutIcon from '@mui/icons-material/Logout';

import { TooltipItem } from '../types/TooltipItem';
import { create } from '@mui/material/styles/createTransitions'

const dashboardFilterIcons: TooltipItem[] = [
    // {title: 'Main', icon: <DashboardIcon/>, filter: true},
    {title: 'Projects', icon: <AccountTreeIcon/>, filter: true},
    {title: 'Spending', icon: <ShoppingCartCheckoutIcon/>, filter: true},
    {title: 'Savings', icon: <SavingsIcon/>, filter: true},
    {title: 'Debt', icon: <CreditCardIcon/>, filter: true},
    {title: 'Utilities', icon: <ElectricBoltIcon/>, filter: true},
    {title: 'Reset filters', icon: <RestartAltIcon/>, filter: true},
];

const dashboardIcons: TooltipItem[] = [
    {title: 'Account balance', icon: <AccountBalanceIcon/>},
    {title: 'Add a card', icon: <AddCardIcon/>},
    {title: 'Admin panel settings', icon: <AdminPanelSettingsIcon/>},
    {title: 'Add a task', icon: <AddTaskIcon/>},
    {title: 'API tool', icon: <ApiIcon/>},
    {title: 'Logout', icon: <LogoutIcon/>},
];

function Dashboard() {
    const [cardFilter, setCardFilter] = useState<string[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const iconStyle = {fill: '#29ABE2'};
    const activeCard = {boxShadow: '0 0 8px rgba(41, 171, 226, 0.7), 0 0 20px rgba(41, 171, 226, 0.35)'};
    const [modalStatus, setModalStatus] = useState(false);

    function showModal() {
        setModalStatus(true);
    }

    function hideModal() {
        setModalStatus(false);
    }
    
    const renderedDashboardCards = dashboardCards.filter(card => {
        
        const matchesFilter =
            cardFilter.length === 0 ||
            cardFilter.includes(card.filter);

        const matchesSearch =
            searchTerm === '' ||
            card.title.toLowerCase().includes(searchTerm.toLowerCase())  ||
            card.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            card.filter.toLowerCase().includes(searchTerm.toLowerCase())

        return matchesFilter && matchesSearch;
    });

    function createCard(CardItem: DashboardCard, index: number) {

        return (
            <Card
                style={
                    cardFilter.includes(CardItem.filter) || 
                    searchTerm.length > 0 && CardItem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    searchTerm.length > 0 && CardItem.description.toLowerCase().includes(searchTerm.toLowerCase()) ? 
                    activeCard : undefined
                }
                key={index}
                sx={{ 
                    maxWidth: 
                        { 
                            xs: '100%', 
                            md: CardItem.width,
                        }
                    }}
                >
                <CardContent>
                    {CardItem.project ? 
                        <h2 className="dashboard__card-project">{CardItem.title}</h2>
                    :
                        <h2>{CardItem.title}</h2>
                    }
                    {CardItem.value &&  
                        <h3 className="mb-0 mt-4">{CardItem.value}</h3> 
                    }
                    <p className="mb-0 mt-2">{CardItem.description}</p>
                    {CardItem.footer && CardItem.link ?
                        <div className="button-wrapper mb-0 mt-4">
                            <Button
                                spaceship={true} 
                                target={CardItem.blank ? "_blank" : "_self"} 
                                rel="noopener noreferrer" 
                                text={CardItem.footer[0]} 
                                to={CardItem.link[0]} 
                            />
                            {CardItem.footer[1] &&
                            <Button
                                spaceship={true} 
                                target={CardItem.blank ? "_blank" : "_self"} 
                                rel="noopener noreferrer" 
                                text={CardItem.footer[1]} 
                                to={CardItem.link[1]} 
                            />}
                        </div>
                    : CardItem.footer &&
                        <div className="dashboard__card-footer">
                            <p>{CardItem.footer}</p>
                        </div>
                    }
                    <div className="dashboard__card-filter">
                        <p>{CardItem.filter}</p>
                    </div>
                </CardContent>
            </Card>
        )
    }

    function createTooltip(item: TooltipItem) {

        return (
            <Tooltip 
                title={item.title} 
                style={cardFilter.includes(item.title) ? iconStyle : undefined}
                arrow placement="right" 
                onClick={
                    item.filter ?
                    // If the item is filtered, run the function.
                    () => {
                        // If the item is the reset filters button, empty the filter array.
                        item.title == 'Reset filters' ? setCardFilter([]) 
                        // Else check the filter array.
                        : setCardFilter(prev => 
                            prev.includes(item.title) 
                            // If the filter array includes the selected item title, remove the item from the array.
                            ? prev.filter(f => f !== item.title)
                            // Else add the item to the array.
                            : [...prev, item.title]
                        )
                    } 
                    : item.modal ? 
                    () => {
                        setModalStatus(true);
                    }
                    : undefined
                }>
                {item.icon}
            </Tooltip>
        )
    }

    return (
        <>
            { /* Starfield Background */}
            <div className="starfield">
                <div className="stars"></div>
            </div>
            
            {/* Header */}
            <Header />
                
           {/* Dashboard */}
            <section className="dashboard">
                <div className="container">
                    <div className="row">
                        <div className="col col-12">
                            <Heading title="Dashboard" subheading="The Dashboard component serves as the central interactive hub of the application. It is responsible for displaying a dynamic collection of cards that represent different tools, actions, or sections of the app. The component combines filtering, search, and UI state management to give users a fast and intuitive way to navigate content." />
                        </div>
                    </div>
                    <div className="row mt-5 mb-0">
                        <div className="col col-12 col-lg-1 dashboard__sticky-container">
                            {/* Toolbar */}
                            <div className="dashboard__menu-top">
                                {dashboardFilterIcons.map(createTooltip)}
                            </div>
                            <div className="dashboard__menu-bottom">
                                {dashboardIcons.map(createTooltip)}
                            </div>
                        </div>
                        {/* Content Wrapper */}
                        <div className="col col-12 col-lg-11 dashboard__card-wrapper">
                            {/* Search Bar */}
                            <div className="dashboard__search">
                                <input 
                                    type="text" 
                                    placeholder="Search.."
                                    onChange={e => setSearchTerm(e.target.value)}
                                    value={searchTerm}>
                                </input>
                            </div>

                            {/* Card Item */}
                            {
                                renderedDashboardCards.length === 0 ?
                                // No results
                                <div className="dashboard__no-results"><h3>No Results Found.</h3></div>
                                // Filtered items
                                : renderedDashboardCards.map(createCard)
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Dashboard;