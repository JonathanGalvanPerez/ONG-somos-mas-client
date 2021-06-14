import React from 'react'
import { Switch } from 'react-router-dom'
import Backoffice from '../components/Backoffice'
import EditOrganization from '../components/Backoffice/edit-organization/edit-organization'
import ContactList from '../components/ContactList/index'
import News from '../components/News'
import Testimonials from "../components/Backoffice/Testimonials";
import BackofficeUsers from "../components/BackofficeUsers/index";


import { BackofficeRoute } from './helpersRoutes'


const BackofficeRoutes = () => {
    return (
        <Switch>
            <BackofficeRoute exact path="/backoffice" component={Backoffice} />
            <BackofficeRoute exact path="/backoffice/users" component={BackofficeUsers} />
            <BackofficeRoute exact path="/backoffice/news" component={News} />
            <BackofficeRoute exact path="/backoffice/contacts" component={ContactList} />
            <BackofficeRoute exact path="/backoffice/testimonials" component={Testimonials} />
            <BackofficeRoute exact path="/backoffice/edit-organization" component={EditOrganization} />
        </Switch>
    )
}

export default BackofficeRoutes;