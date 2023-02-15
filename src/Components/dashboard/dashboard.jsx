import React from "react";
import './style.css';
import {AiOutlineBarChart} from 'react-icons/ai';
import {TbMessages} from 'react-icons/tb';
import {AiOutlineHeart} from 'react-icons/ai';
import {RxCross2} from 'react-icons/rx';
import {TiTick} from 'react-icons/ti';
import {AiOutlineCalendar} from 'react-icons/ai';
import {TiMessage} from 'react-icons/ti';
import { FaMapMarked } from "react-icons/fa";

export const Dashboard = ()=>{
    return (
        <div>
            <div id="generaldashboard-under-navigation">

            </div>
            <div id="generaldashboard-options-list">
                <div className="generaldashboard-option">
                    <div className="generaldashboard-option-icon">
                    <FaMapMarked/>
                    </div>
                    <div className="generaldashboard-title">
                        Active Listings
                    </div>
                    <div className="generaldashboard-nums">
                        124
                    </div>
                </div>
                <div className="generaldashboard-option">
                    <div className="generaldashboard-option-icon">
                    <AiOutlineBarChart/>
                    </div>
                    <div className="generaldashboard-title">
                        Listing Views
                    </div>
                    <div className="generaldashboard-nums">
                        1056
                        <span style={{fontSize:11,color:"grey",wordSpacing:2,marginLeft:3}}>(<span style={{color:"#59C0AB"}}>+356</span> this week)</span>
                    </div>
                </div>
                <div className="generaldashboard-option">
                    <div className="generaldashboard-option-icon">
                        <TbMessages/>
                    </div>
                    <div className="generaldashboard-title">
                        Your Reviews
                    </div>
                    <div className="generaldashboard-nums">
                        357
                        <span style={{fontSize:11,color:"grey",wordSpacing:2,marginLeft:3}}>(<span style={{color:"#59C0AB"}}>+12</span> this week)</span>
                    </div>
                </div>
                <div className="generaldashboard-option">
                    <div className="generaldashboard-option-icon">
                        <AiOutlineHeart/>
                    </div>
                    <div className="generaldashboard-title">
                        Times Bookmarked
                    </div>
                    <div className="generaldashboard-nums">
                        2329
                        <span style={{fontSize:11,color:"grey",wordSpacing:2,marginLeft:3}}>(<span style={{color:"#59C0AB"}}>+234</span> this week)</span>
                    </div>
                </div>
            </div>
            <div id="realdashboard-statistic">
                Your Statistic
                <div id="statistic-chart">

                </div>
            </div>
            <div id="last-activities">
                Last Activities
                <div className="dashboard-recent-activity" style={{marginTop:20}}>
                    <div className="recent-activity-close">
                        <RxCross2/>
                    </div>
                    <div className="activity-date">
                        <AiOutlineCalendar style={{color:"#6896FD",fontSize:18,marginRight:5}}/>
                        28 May 2022
                    </div>
                    <div className="recent-activity-icon">
                        <TiTick/>
                    </div>
                    <div className="activity-desc">Your listing <span style={{color:"#6896FD"}}>Urban Appartmes</span> has been approved!</div>
                </div>
                <div className="dashboard-recent-activity">
                    <div className="recent-activity-close">
                        <RxCross2/>
                    </div>
                    <div className="activity-date">
                        <AiOutlineCalendar style={{color:"#6896FD",fontSize:18,marginRight:5}}/>
                        28 May 2022
                    </div>
                    <div className="recent-activity-icon">
                        <TiMessage/>
                    </div>
                    <div className="activity-desc">Someone left a review on <span style={{color:"#6896FD"}}>Park central</span> Listing!</div>
                </div>
                <div className="dashboard-recent-activity">
                    <div className="recent-activity-close">
                        <RxCross2/>
                    </div>
                    <div className="activity-date">
                        <AiOutlineCalendar style={{color:"#6896FD",fontSize:18,marginRight:5}}/>
                        28 May 2022
                    </div>
                    <div className="recent-activity-icon">
                        <AiOutlineHeart/>
                    </div>
                    <div className="activity-desc"><span style={{color:"#6896FD"}}>Fider Mamby</span> Bookmarked Your <span style={{color:"#6896FD"}}>Holiday Home</span> Listing!</div>
                </div>
            </div>
        </div>
    )
}