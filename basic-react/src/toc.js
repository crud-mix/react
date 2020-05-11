import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch, useRouteMatch, useParams } from "react-router-dom";
import HelloWorldComponent from './HelloWorld/HelloWorldComponent';
import ArrayoperationsComponent from './ArrayOperations/ArrayOperationsComponent';
const routes = [
    {
        path: 'helloworld',
        linkText: 'HelloWorld',
        component: HelloWorldComponent
    },
    {
        path: 'arrayoperation',
        linkText: 'Array Operation',
        component: ArrayoperationsComponent
    }
]

function MapRouteAndLinks() {
    const { path, url } = useRouteMatch();
    return (

        <Switch>
            <Route exact path={"/toc"}>
                {routes.map(route => <Link key={route.path} to={`${url}/${route.path}`}>{route.linkText}<br /></Link>)}
                {path} <br /> {url}
            </Route>
            <Route path={`${path}/:compId`}>
                <RenderComponent />
            </Route>

        </Switch>

    )
}

function RenderComponent() {
    let { compId } = useParams();
    return (
        <Route component={routes.find(route => route.path === compId).component} />
    )
}

export class TableOfContents extends React.Component {
    render() {
        return (
            <MapRouteAndLinks />
        )
    }

}