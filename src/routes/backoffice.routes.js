import React from 'react'
import { Switch } from 'react-router-dom'
import Backoffice from '../components/Backoffice'
import EditOrganization from '../components/Backoffice/edit-organization/edit-organization'
import News from '../components/News'
import { BackofficeRoute } from './helpersRoutes'


const BackofficeRoutes = () => {
    return (
        <Switch>
            <BackofficeRoute exact path="/backoffice" component={Backoffice} />
            <BackofficeRoute exact path="/backoffice/news" component={News} />
            <BackofficeRoute exact path="/backoffice/edit-organization" component={EditOrganization} />
        </Switch>
    )
}

export default BackofficeRoutes;