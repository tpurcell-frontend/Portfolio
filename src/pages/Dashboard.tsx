import React, {useState} from 'react'
import Header from '../components/Header'
import Heading from '../components/Heading'
import Button from '../components/Button'

import '../assets/styles/App.scss'
import '../assets/styles/components/Dashboard.scss'

import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AddCardIcon from '@mui/icons-material/AddCard';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AddTaskIcon from '@mui/icons-material/AddTask';
import ApiIcon from '@mui/icons-material/Api';
import GridViewIcon from '@mui/icons-material/GridView';
import LogoutIcon from '@mui/icons-material/Logout';

import Filter1Icon from '@mui/icons-material/Filter1';
import Filter2Icon from '@mui/icons-material/Filter2';
import Filter3Icon from '@mui/icons-material/Filter3';

import Tooltip from '@mui/material/Tooltip'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import dashboardCards from '../data/dashboard-cards';
import { DashboardCard } from '../types/DashboardCard';

function Dashboard() {

    function createCard(CardItem: DashboardCard) {

        return (
            <Card sx={{ 
                maxWidth: 
                    { 
                        xs: '100%', 
                        md: CardItem.width,
                    }
                }}>
                <CardContent>
                    {CardItem.project ? 
                        <h2 className="dashboard__card-project">{CardItem.title}</h2>
                    :
                        <h2>{CardItem.title}</h2>
                    }
                    <h3 className="mb-0 mt-4">{CardItem.value}</h3>
                    <p className="mb-0 mt-2">{CardItem.description}</p>
                    {CardItem.footer && CardItem.link ?
                        <div className="button-wrapper mb-0 mt-4">
                            <Button spaceship={true} target={CardItem.blank ? "_blank" : "_self"} rel="noopener noreferrer" text={CardItem.footer} to={CardItem.link} />
                        </div>
                    : CardItem.footer &&
                        <div className="dashboard__card-footer">
                            <p>{CardItem.footer}</p>
                        </div>
                    }
                </CardContent>
            </Card>
        )
    }

    return (
        <>
            { /* Starfield Background */}
            {/* <div className="starfield">
                <div className="stars"></div>
            </div> */}
            
            {/* Header */}
            <Header />
                
           {/* Dashboard */}
            <section className="dashboard">
                <div className="container">
                    <div className="row">
                        <div className="col col-12 col-md-1 dashboard__menu">
                            <div className="dashboard__sticky-container">
                                <div className="dashboard__menu-top">
                                    {/* Account balance */}
                                    <Tooltip title="Account balance" arrow>
                                        <AccountBalanceIcon />
                                    </Tooltip>
                                    {/* Add a card */}
                                    <Tooltip title="Add a card" arrow>
                                        <AddCardIcon />
                                    </Tooltip>
                                    {/* Admin panel settings */}
                                    <Tooltip title="Admin panel settings" arrow>
                                        <AdminPanelSettingsIcon />
                                    </Tooltip>
                                    {/* Add a task */}
                                    <Tooltip title="Add a task" arrow>
                                        <AddTaskIcon />
                                    </Tooltip>
                                    {/* Api */}
                                    <Tooltip title="Api tool" arrow>
                                        <ApiIcon />
                                    </Tooltip>
                                    <Tooltip title="Toggle Gridview" arrow>
                                        <GridViewIcon />
                                    </Tooltip>
                                    <Tooltip title="Logout" arrow>
                                        <LogoutIcon />
                                    </Tooltip>
                                </div>
                                <div className="dashboard__menu-bottom">
                                    <Tooltip title="Filter 1" arrow>
                                        <Filter1Icon />
                                    </Tooltip>
                                    <Tooltip title="Filter 2" arrow>
                                        <Filter2Icon />
                                    </Tooltip>
                                    <Tooltip title="Filter 2" arrow>
                                        <Filter3Icon />
                                    </Tooltip>
                                </div>
                            </div>
                        </div>
                        <div className="col col-12 col-md-11 dashboard__card-wrapper">
                            {/* Card Item */}
                            {dashboardCards.map(createCard)}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Dashboard;