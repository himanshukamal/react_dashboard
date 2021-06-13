import React, { Component } from 'react';

class Articles extends Component {
    
    render() {
        return(
            <div className="articles_wrapper">
                <p className="page_title">Articles</p>
                <div className="first_article">
                    <div className="image_and_name">
                        <div className="image_wrapper">
                            <img src="./avatar1.png" />
                        </div>
                        <div className="author_name">
                            Ella Alderson
                        </div>
                    </div>
                    <div className="title_and_art">
                        <p className="article_title">
                            we are all confident idiots
                        </p>
                        <div className="article_art">
                            <img src="./avatar1.png" />
                        </div>
                    </div>
                    <div className="date_and_time">
                        4 mins ago
                    </div>

                </div>
            </div>
            
            )
        }
    }
    
    export default Articles;