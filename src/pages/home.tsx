/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import Header from "../component/header";

export default class Home extends Component {
    render() {
        return (
            <><Header />
                <br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br />
                <div className="collection">
                    <a className="collection-item">Seja bem-vindo ao site do</a>
                    <a className="collection-item">Grupo WB</a>
                </div>
            </>
        );

    }
}
