import { useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Navbar from '../components/Backoffice/navbar/Navbar';
import Sidebar from '../components/Backoffice/sidebar/Sidebar';
import EditOrganization from '../components/Backoffice/edit-organization/edit-organization'
import ContactList from '../components/ContactList/index'
import News from '../components/News'
import Testimonials from "../components/Backoffice/Testimonials";
import BackofficeUsers from "../components/BackofficeUsers/index";
import CategoryList from "../components/CategoryList/CategoryList";
import '../components/Backoffice/index.css';

export default function BackofficePage() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <div className="container">
            <Navbar isOpen={isOpen} onOpen={onOpen} />
            <Sidebar
                isOpen={isOpen}
                onClose={onClose}
            />
            <Switch>
                <Route exact path="/backoffice/users" component={BackofficeUsers} />
                <Route exact path="/backoffice/news" component={News} />
                <Route exact path="/backoffice/contacts" component={ContactList} />
                <Route exact path="/backoffice/testimonials" component={Testimonials} />
                <Route exact path="/backoffice/edit-organization" component={EditOrganization} />
                <Route exact path="/backoffice/categories" component={CategoryList} />
            </Switch>
        </div>
    )
}
