import React, { Component } from 'react';

class ReadingMenu extends Component {
    
    render() {
        return(
            <div className="reading_menu">
                <header>
                    <div className="profile_wrapper">
                     <img className="profile_picture" src="../himanshu.jpg" />
                     <div className="profile_detail_wrapper">
                        <p className="profile_name">Himanshu</p>
                        <p className="profile_designation">Frontend Developer</p>
                     </div>
                 </div>
                </header>
                
                <div className="body_container">
                    <div className="side_menu_wrapper">
                        <div className="side_menu_title">
                            <div className="title_list">
                                <div className="speed"><span class="material-icons">speed</span></div>
                                <div>dashboard</div>
                                <div><span class="material-icons">search</span></div>
                                <div><span class="material-icons">bookmark</span></div>
                            </div>
                        </div>
                        <div className="main_body">
                            <div className="side_menu_body">
                                <div className="side_menu_content_wrapper">
                                    <p className="nav_item_title">Books</p>
                                    <div className="book_details_wrapper">
                                        <p>15</p>
                                        {/* <div className="progress_bar1">
                                        </div> */}
                                        <progress value="50" max="100">

                                        </progress>
                                    </div>
                                    
                                </div>

                                <div className="side_menu_content_wrapper">
                                    <p className="nav_item_title">Articles</p>
                                    <div className="book_details_wrapper">
                                        <p>88</p>
                                        <div className="progress_bar2">
                                        </div>
                                    </div>
                                </div>

                                <div className="side_menu_content_wrapper">
                                    <p className="nav_item_title">Reading hours</p>
                                    <div className="book_details_wrapper">
                                        <p>225</p>
                                        <div className="progress_bar3">
                                        </div>
                                    </div>
                                </div>

                                <div className="side_menu_content_wrapper">
                                    <p className="nav_item_title">Friends Ranking</p>
                                    <div className="book_details_wrapper">
                                        <p>3rd</p>
                                        <div className="clap_icon">
                                        👏
                                        </div>
                                    </div>
                                </div>
                                <div className="side_menu_content_wrapper">
                                    <p className="nav_item_title">Social Ranking</p>
                                    <div className="book_details_wrapper">
                                        <p>Top 15%</p>
                                        <div className="brain_icon">
                                        🧠
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                    
                    <div className="main_content">
                        <p className="book_title">The Great Gatspy</p>
                        <p className="book_title_second">Gatspy</p>
                        <p>The Great Gatsby is a 1925 novel by American writer F.
                        </p>
                        <button>write review<span class="material-icons">star_border</span></button>
                    </div>

                    <div className="main_image_wrapper">
                        <img src="./gatspy.jpg" className="book_cover"/>
                    </div>
                </div>
            </div>    
                  
        )
    }
}

export default ReadingMenu;