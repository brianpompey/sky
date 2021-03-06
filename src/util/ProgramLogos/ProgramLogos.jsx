import React from 'react'
import './styles.css';

const ProgramLogos = () => {
    return (
        <div className="containter">
            <h3 className="program-title">Skytop's Suite of Digital Programs</h3>
            <br/>
                <div className="row">
                    {/* To The Point */}
                    <div className="logo col-sm">
                        <a href="https://skytopstrategies.com/program">
                        <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                    <img className="ttp" src="https://swerthmi.sirv.com/SKYTOP/digital_programs/skytop%20to%20the%20point.png" alt="" />
                                    </div>
                                    <div className="flip-card-back">
                                        <img className="ttp-top" src="https://swerthmi.sirv.com/SKYTOP/digital_programs/skytop%20to%20the%20point.png" alt="" />
                                        <hr></hr>
                                        <div className="program-blurb">Everything <b>you</b> need to know right now in 15 minutes or less</div>    
                                        {/* <button type="button" class="btn btn-primary">Sneak Peak</button> */}
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    {/* At The Table */}
                    <div className="logo col-sm">
                        <a href="https://skytopstrategies.com/program">
                        <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img className="at" src="https://swerthmi.sirv.com/SKYTOP/digital_programs/skytop%20at%20the%20table.png"/>
                                    </div>
                                    <div className="flip-card-back">
                                    <img className="program-img-top" src="https://swerthmi.sirv.com/SKYTOP/digital_programs/skytop%20at%20the%20table.png"/>
                                        <div className="program-blurb">Skytop has set the table and invited the players, now sit and watch this thought provoking panel discussion</div>    
                                        {/* <button type="button" class="btn btn-primary">Sneak Peak</button> */}
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    {/* In The Studio */}
                    <div className="logo col-sm">
                        <a href="https://skytopstrategies.com/program">
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img className="its" src="https://swerthmi.sirv.com/SKYTOP/digital_programs/in%20the%20studio%20color.png"/>
                                    </div>
                                    <div className="flip-card-back">
                                    <img className="program-img-top" src="https://swerthmi.sirv.com/SKYTOP/digital_programs/in%20the%20studio%20color.png"/>
                                        <div className="program-blurb">Join Skytop CEO Chris Skroupa as he sits 1-1 with industry experts and has riveting in depth conversations in this one hour news program</div>    
                                        {/* <button type="button" class="btn btn-primary">Sneak Peak</button> */}
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                
        </div>
    )
}

export default ProgramLogos
