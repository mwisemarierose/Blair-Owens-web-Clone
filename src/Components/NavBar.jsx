import React from 'react'
import { NavLink } from 'react-router-dom';
import {BsPersonCircle} from 'react-icons/bs'
import '../App.css'
import { HiOutlineUserCircle } from 'react-icons/hi';
export default function NavBar() {
    return (
        <nav>
            <div>
                <h1 className='logo'>BLAIR OWENS</h1>
            </div>

                <ul className='nav-links'>
                    <li><NavLink to={'/properties'} > Our properties</NavLink></li>
                    <li><NavLink to={'/mls'} >  MLS Search</NavLink></li>
                    <li><NavLink to={'/contact'} > Communities</NavLink></li>
                    <li><NavLink to={'/news'} >  News</NavLink></li>
                    <li><NavLink to={'/contact'} >  Services</NavLink></li>
                    <li><NavLink to={'/contact'} >  About Blair</NavLink></li>
                    <li><NavLink to={'/contact'} >  Contact</NavLink></li>


                </ul>

            <div>
                <HiOutlineUserCircle style={
                    {
                        fontSize: '2rem',
                        fontWeight: 'lighter',
                    }
                }/>
            </div>
        </nav>
    );

}