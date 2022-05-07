import React from 'react'
import './Styles/PlayersNames.css'

export default function PlayersNames(props) {
    return (
        <div>
            <table class="table">
                <tr>
                <td scope="row">{props.Name}</td>
                <td scope="row">{props.Victories}</td>
                <td scope="row">{props.Losses}</td>
                <td scope="row">{props.Games}</td>
                </tr>
            </table>
        </div>
    )
}
