import './Menu.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Objetivo</Link>
                </li>
                <li>
                    <Link to="/Musicas">Músicas</Link>
                </li>
                <li>
                    <Link to="/Banda">Banda</Link>
                </li>
            </ul>
        </nav>
    </aside>
)
export default Menu