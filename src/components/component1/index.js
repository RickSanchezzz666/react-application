import React from "react";
import './style.css';

function Component1() {

    const pagesRef = document.getElementById('pages-dropdown')

    const onMouseEnterPages = function() {
        pagesRef.classList.add('drop-active')
    }

    const onMouseLeavePages = function() {
        pagesRef.classList.replace('drop-active')
    }

    return(
        <div className="page-1">
            <div className="page-1-top">
                
            </div>
            <div className="page-1-container">
                        <ul id="pages-dropdown">
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
                        <ul className="elements-dropdown">
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
                        <ul className="portfolio-dropdown">
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
                        <ul className="gallery-dropdown">
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
                    <div className="elements">↓ Elements</div>
                    <div className="portfolio">↓ Portfolio Layouts</div>
                    <div className="gallery">↓ Gallery layouts</div>
                    <div>Link text</div>
                    <div>A VERY LONG LINK TEXT</div>
                </div>
            </div>
        </div>
    );
}

export default Component1;