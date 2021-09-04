import React, { Component } from 'react';
import Communication from '../Images/Communication.png'
class TENDiscordChannel extends Component {
    render() {
        return (
            <>
                <div className="mt-5 mb-5 discordChannelDiv" >
                    <h1 className="discord" >Discord Channel</h1>
                    <div className="container"  >
                        <div className="row">
                            <div className="col-md-12 " >
                                <div className="row ">
                                    <div className="col-md-4">
                                        <img className="w-100" src={Communication} alt="discord"></img>
                                    </div>
                                    <div className="col-md-8" >
                                        <div className="card-block" >
                                            {/* <h6 className="card-title">Card Title</h6> */}
                                            <h2 className="card-text text-center discordText" >Welcome to the next big thing</h2>
                                            <div className="discordButton"><a href="https://discord.com/invite/A8zBusy" className=" btn-grad btn btn-primary">Join TEN Virtual Campus</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default TENDiscordChannel;