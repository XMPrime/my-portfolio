import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle}</title>
                    <meta name="description" content="Jason Chen Portfolio Website React JS HTML CSS" />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
