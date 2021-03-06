import React from 'react';
import '../styles.css';
import {Markup} from 'interweave';
import {Link} from 'react-router-dom'

function SideConference(props){
    return(
        <div className="side-conference card">
            <img className="card-img side-img" src={props.imgUrl} alt="side conference"></img>
            <div className="conf-info card-img-overlay">
                <div className="side-data-container text-left">
                    <Link to={`/conferences/${props.id}`}>
                        <p className="side-conf-title"><Markup content={props.title}></Markup></p>
                    </Link>
                    <p className="side-conf-tagline">{props.tagline}</p>
                </div>
                <div className="side-data-container text-right">
                    <p className="side-data m-0">{props.city}</p>
                    {props.custom_date ? 
                        <p id="side-date" className="side-data">{props.custom_date}</p>
                    :
                        <p id="side-date" className="side-data">{props.date}</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default SideConference;