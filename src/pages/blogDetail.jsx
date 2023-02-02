import React from 'react'
import { Filter } from '../components/filter'
import NavBar from '../components/NavBar'
import { FaFacebookF } from 'react-icons/fa'
import { IoLogoTwitter } from 'react-icons/io'
import { FaLinkedinIn } from 'react-icons/fa'
import { NewsCard } from '../components/blogCard'

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
        mainPhoto: "https://elementor1.contempothemes.com/wp-content/uploads/2020/12/b-post-7-1-1536x967.jpg",
        newsTitle: "New  Development: The Crosby Estates At Rancho Sante Fe",
        newsContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ex mi. Morbi erat felis, elementum eget odio venenatis, pretium congue ex. Nullam mauris mi, blandit vitae ante commodo, dignissim vestibulum dolor. Ut id metus vel lorem varius porttitor. Aliquam urna dolor, dapibus at tempus at, euismod quis diam. Aenean non lacus arcu. Nam ligula […]"
    },
   
   
];


function SingleNews() {

    return (
        
    <div>
        <NavBar />
        <Filter />
        <div className='bg-white'>
            <div className='blogBanner'>

                <div className='blogTitle'>
                    <div className='avatar'>
                        <img src='https://elementor1.contempothemes.com/wp-content/uploads/2020/12/riley-profile.jpg' alt='blog'style={{}} />
                    </div>
                    <div className='blogInfo'>

                        <h1 className='text-xl text-white'>New Development: The Crosby Estates At Rancho Sante Fe</h1>

                    </div>
                </div>
                <div className='overLay'></div>
            </div>

            <div className='container'>
                <div className='blogContent'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ex mi. Morbi erat felis, elementum eget odio venenatis, pretium congue ex. Nullam mauris mi, blandit vitae ante commodo, dignissim vestibulum dolor. Ut id metus vel lorem varius porttitor. Aliquam urna dolor, dapibus at tempus at, euismod quis diam. Aenean non lacus arcu. Nam ligula felis, mattis vel interdum nec, tempus commodo arcu.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ex mi. Morbi erat felis, elementum eget odio venenatis, pretium congue ex. Nullam mauris mi, blandit vitae ante commodo, dignissim vestibulum dolor. Ut id metus vel lorem varius porttitor. Aliquam urna dolor, dapibus at tempus at, euismod quis diam. Aenean non lacus arcu. Nam ligula felis, mattis vel interdum nec, tempus commodo arcu.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ex mi. Morbi erat felis, elementum eget odio venenatis, pretium congue ex. Nullam mauris mi, blandit vitae ante commodo, dignissim vestibulum dolor. Ut id metus vel lorem varius porttitor. Aliquam urna dolor, dapibus at tempus at, euismod quis diam. Aenean non lacus arcu. Nam ligula felis, mattis vel interdum nec, tempus commodo arcu.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ex mi. Morbi erat felis, elementum eget odio venenatis, pretium congue ex. Nullam mauris mi, blandit vitae ante commodo, dignissim vestibulum dolor. Ut id metus vel lorem varius porttitor. Aliquam urna dolor, dapibus at tempus at, euismod quis diam. Aenean non lacus arcu. Nam ligula felis, mattis vel interdum nec, tempus commodo arcu.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ex mi. Morbi erat felis, elementum eget odio venenatis, pretium congue ex. Nullam mauris mi, blandit vitae ante commodo, dignissim vestibulum dolor. Ut id metus vel lorem varius porttitor. Aliquam urna dolor, dapibus at tempus at, euismod quis diam. Aenean non lacus arcu. Nam ligula felis, mattis vel interdum nec, tempus commodo arcu.</p>

                </div>
            </div>

            <div className='padding bg-white'>
                
                    Share this post

                    <div className='social '>
                        <div className='socialIcon'>
                            <FaFacebookF />


                        </div>
                        <div className='socialIcon'>
                            <IoLogoTwitter />
                        </div>

                        <div className='socialIcon'>
                            <FaLinkedinIn />
                        </div>
                   
                </div>
                <hr></hr>
            </div>


            <div className='container'>
            <h3>Related Posts</h3>

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
    </div>
    )
}
export default SingleNews