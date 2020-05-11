import React from 'react'
import { BrowserRouter as Link, Route, Switch, useRouteMatch } from "react-router-dom";
import HelloWorldComponent from './HelloWorldComponent/HelloWorldComponent';
const routes = [
    {
        path: 'helloworld',
        linkText: 'HelloWorld',
        component: HelloWorldComponent
    },
    {
        path: 'arrayoperation',
        linkText: 'Array Operation',
        component: HelloWorldComponent
    }
]

function MapRouteAndLinks() {
    const { path, url } = useRouteMatch();
    return (
        <Switch>
            <Route exact path={"/toc"}>
                {routes.map(route => <Link key={route.path} to={`${url}/${route.path}`}>{route.linkText}<br /></Link>)}
                {path}
            </Route>
            {/* <Route path={`${path}`} component={routes.find(route => route.path.includes(`${path}`))?.component}>
                {path} <br/> {url}
            </Route> */}
        </Switch>

    )
}

export class TableOfContents extends React.Component {
    render() {
        return (
            <MapRouteAndLinks />
        )
    }

}