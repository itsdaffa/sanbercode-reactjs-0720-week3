import React from "react"
import {Link} from "react-router-dom"

const Nav = () => {
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Tugas 11</Link>
                </li>
                <li>
                    <Link to="/tugas12-1">Tugas 12 (1)</Link>
                </li>
                <li>
                    <Link to="/tugas12-2">Tugas 12 (2)</Link>
                </li>
                <li>
                    <Link to="/tugas13">Tugas 13</Link>
                </li>
                <li>
                    <Link to="/tugas14">Tugas 14</Link>
                </li>
                <li>
                    <Link to="/tugas15">Tugas 15</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav