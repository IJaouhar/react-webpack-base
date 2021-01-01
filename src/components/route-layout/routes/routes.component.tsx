import React, { Fragment, ReactElement } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Route as IRoute } from '../../../config/app-routes';

interface RouterProps {
    routes: IRoute[];
}

function Routes({ routes }: RouterProps): ReactElement<{}> {
    return (
        <Fragment>
            <Switch>
                {routes.map(({ component: Component, ...rest }) => (
                    <Route exact={rest.exact} path={rest.path} key={rest.key} component={Component} />
                ))}

                <Redirect from="/index.html" to="/" />
            </Switch>
        </Fragment>
    );
}

export default Routes;
