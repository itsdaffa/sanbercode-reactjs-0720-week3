import React from "react";
import HargaBuah from "./tugas11/HargaBuah"
import Clock from "./tugas12/Clock"
import Timer from "./tugas12/Timer"
import List from "./tugas13/List"
import ListInFunc from "./tugas14/ListInFunc"
import BuahIndex from "./tugas15/BuahIndex"
import { Switch, Route } from "react-router";

const Routes = () => {
    return(
        <Switch>
            <Route exact path="/">
                <HargaBuah />
            </Route>
            <Route exact path="/tugas12-1">
                <Clock start={100}/>
            </Route>
            <Route exact path="/tugas12-2">
                <Timer />
            </Route>
            <Route exact path="/tugas13">
                <List />
            </Route>
            <Route exact path="/tugas14">
                <ListInFunc />
            </Route>
            <Route exact path="/tugas15">
                <BuahIndex />
            </Route>
        </Switch>
    )
}

export default Routes;