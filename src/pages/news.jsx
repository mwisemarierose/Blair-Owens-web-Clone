import React from 'react'

import NavBar from "../components/NavBar";
import { Filter } from '../components/filter';
import { NewsCard } from '../components/blogCard';

const news = [
    {
        mainPhoto: "https://elementor1.contempothemes.com/wp-content/uploads/2020/12/b-post-9-1-1536x967.jpg",
        newsTitle: "The Crosby Estates At Rancho Sante Fe",
        newsContent: "Vonsectetur adipiscing elit. Duis ut ex mi. Morbi erat felis, elementum eget odio venenatis, pretium congue ex. Nullam mauris mi, blandit vitae ante commodo, dignissim vestibulum dolor. Ut id metus vel lorem varius porttitor. Aliquam urna dolor, dapibus at tempus at, euismod quis diam. Aenean non lacus arcu. Nam ligula […]"
    },
    {
        mainPhoto: "https://elementor1.contempothemes.com/wp-content/uploads/2020/12/b-post-8-1-1536x967.jpg",
        newsTitle: "New  Development: The Crosby Estates At Rancho Sante Fe",
        newsContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ex mi. Morbi erat felis, elementum eget odio venenatis, pretium congue ex. Nullam mauris mi, blandit vitae ante commodo, dignissim vestibulum dolor. Ut id metus vel lorem varius porttitor. Aliquam urna dolor, dapibus at tempus at, euismod quis diam. Aenean non lacus arcu. Nam ligula […]"
    },
    {
        mainPhoto: "https://elementor1.contempothemes.com/wp-content/uploads/2020/12/b-post-7-1-1536x967.jpg",
        newsTitle: "The Crosby Estates At Rancho Sante Fe",
        newsContent: "Vonsectetur adipiscing elit. Duis ut ex mi. Morbi erat felis, elementum eget odio venenatis, pretium congue ex. Nullam mauris mi, blandit vitae ante commodo, dignissim vestibulum dolor. Ut id metus vel lorem varius porttitor. Aliquam urna dolor, dapibus at tempus at, euismod quis diam. Aenean non lacus arcu. Nam ligula […]"
    },
    {
        mainPhoto: "https://e1.pxfuel.com/desktop-wallpaper/1002/428/desktop-wallpaper-auditography-2016-r8-v10-plus.jpg",
        newsTitle: "New  Development: The Crosby Estates At Rancho Sante Fe",
        newsContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ex mi. Morbi erat felis, elementum eget odio venenatis, pretium congue ex. Nullam mauris mi, blandit vitae ante commodo, dignissim vestibulum dolor. Ut id metus vel lorem varius porttitor. Aliquam urna dolor, dapibus at tempus at, euismod quis diam. Aenean non lacus arcu. Nam ligula […]"
    },
   
   
];


export default function News  () {
    return (
        <div>
            <NavBar />
            <Filter />
            <div className="newsBanner">
                <div className="overLay">
                    <div className="newsBannerText">
                        <h1>Our Blog</h1>
                        <p className='text-sm'>The latest real estate news and insights from San Diego, and Beyond.</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="newsContainer">
                    {news.map((item, index) => {
                        return (
                            <NewsCard
                                mainPhoto={item.mainPhoto}
                                newsTitle={item.newsTitle}
                                newsContent={item.newsContent}
                            />
                        )
                    }  )}
                </div>
                </div>

            </div>
            );
}