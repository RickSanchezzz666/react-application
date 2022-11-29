import React from "react";
import './style.css';

function Component1() {

    const pagesRef = document.getElementById('pages-dropdown');
    const elementsRef = document.getElementById('elements-dropdown');
    const portfolioRef = document.getElementById('portfolio-dropdown');
    const galleryRef = document.getElementById('gallery-dropdown');

    const onMouseEnterPages = function() {
        pagesRef.classList.add('drop-active')
        pagesRef.classList.remove('drop-unactive')
    }

    const onMouseLeavePages = function() {
        pagesRef.classList.remove('drop-active')
        pagesRef.classList.add('drop-unactive')
    }

    const onMouseEnterElements = function() {
        elementsRef.classList.add('drop-active')
        elementsRef.classList.remove('drop-unactive')
    }

    const onMouseLeaveElements = function() {
        elementsRef.classList.remove('drop-active')
        elementsRef.classList.add('drop-unactive')
    }

    const onMouseEnterPortfolio = function() {
        portfolioRef.classList.add('drop-active')
        portfolioRef.classList.remove('drop-unactive')
    }

    const onMouseLeavePortfolio = function() {
        portfolioRef.classList.remove('drop-active')
        portfolioRef.classList.add('drop-unactive')
    }

    const onMouseEnterGallery= function() {
        galleryRef.classList.add('drop-active')
        galleryRef.classList.remove('drop-unactive')
    }

    const onMouseLeaveGallery = function() {
        galleryRef.classList.remove('drop-active')
        galleryRef.classList.add('drop-unactive')
    }

    return(
        <div className="page-1">
            <div className="page-1-top">
                
            </div>
            <div className="page-1-container">
                        <ul id="pages-dropdown" className="drop-unactive">
                            <li>Full Width Content</li>
                            <li>Content + Left Sidebar</li>
                            <li>Content + Right Sidebar</li>
                            <li>Content + Both Sidebars</li>
                            <li>Contact</li>
                            <li>404</li>
                            <li>Testimonials</li>
                            <li>About Us</li>
                            <li>Team Member</li>
                            <li>FAQ</li>
                        </ul>
                        <ul id="elements-dropdown" className=" drop-unactive">
                            <li>Buttons</li>
                            <li>Alert Messages</li>
                            <li>Font Icons</li>
                            <li>Call To Action</li>
                            <li>Columns</li>
                            <li>Columns - No Gutter</li>
                            <li>Lists</li>
                            <li>Accordions</li>
                            <li>Tabs</li>
                            <li>Toggles</li>
                            <li>Pricing Tables</li>
                        </ul>
                        <ul id="portfolio-dropdown" className=" drop-unactive">
                            <li>Full Width Portfolio</li>
                            <li>2 Column Grid</li>
                            <li>2 Col. Grid + Left Sidebar</li>
                            <li>2 Col. Grid + Right Sidebar</li>
                            <li>2 Col. Grid + Both Sidebars</li>
                            <li>3 Column Grid</li>
                            <li>3 Col. Grid + Left Sidebar</li>
                            <li>3 Col. Grid + Right Sidebar</li>
                            <li>3 Col. Grid + Both Sidebars</li>
                            <li>4 Column Grid</li>
                        </ul>
                        <ul id="gallery-dropdown" className=" drop-unactive">
                            <li>Full Width Gallery</li>
                            <li>2 Column Grid</li>
                            <li>2 Col. Grid + Left Sidebar</li>
                            <li>2 Col. Grid + Right Sidebar</li>
                            <li>2 Col. Grid + Both Sidebars</li>
                            <li>3 Column Grid</li>
                            <li>3 Col. Grid + Left Sidebar</li>
                            <li>3 Col. Grid + Right Sidebar</li>
                            <li>3 Col. Grid + Both Sidebars</li>
                            <li>4 Column Grid</li>
                            <li>5 Column Grid</li>
                        </ul>
                <div className="nav-bar">
                    <div className="active">Homepage</div>
                    <div onMouseEnter={onMouseEnterPages} 
                         onMouseLeave={onMouseLeavePages}
                    className="pages">↓ Pages</div>
                    <div onMouseEnter={onMouseEnterElements} 
                        onMouseLeave={onMouseLeaveElements}
                    className="elements">↓ Elements</div>
                    <div onMouseEnter={onMouseEnterPortfolio} 
                         onMouseLeave={onMouseLeavePortfolio}
                    className="portfolio">↓ Portfolio Layouts</div>
                    <div onMouseEnter={onMouseEnterGallery} 
                         onMouseLeave={onMouseLeaveGallery}
                     className="gallery">↓ Gallery layouts</div>
                    <div>Link text</div>
                    <div>A VERY LONG LINK TEXT</div>
                </div>
            </div>
        </div>
    );
}

export default Component1;