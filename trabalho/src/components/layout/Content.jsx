import './Content.css'
import React from "react"
import { Switch, Route } from 'react-router-dom'
import Principal from '../../views/contents/Principal'
import UseState from '../../views/contents/UseState'
import Musicas from '../../views/contents/Musicas'
import Banda from '../../views/contents/Banda'
import NaoEncontrado from '../../views/contents/NaoEncontrado'

const Content = props => (
    <main className="Content">
        <Switch>
            <Route exact path="/">
                <Principal />
            </Route>
            <Route path="/Banda">
                <Banda />
            </Route>
            <Route path="/Musicas">
                <Musicas />
            </Route>
            <Route path="/Banda">
                <Banda />
            </Route>
            <Route path="*">
                <NaoEncontrado />
            </Route>
        </Switch>
    </main>
)
export default Content