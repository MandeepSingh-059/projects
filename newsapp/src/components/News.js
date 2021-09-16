import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor(){
        super();
        this.state = {
            articles : [],
            loading : true
        }
    }

    /*
    Fetch method is a part of fetch api and it takes a url and returns a promise
    Async function can wait for a await function to resolve it's promise
    */

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=ac61e477a31f4607b6b6b46ece505d9e"
        let data = await fetch(url);        
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles});
    }

    render() {
        return (
            <div className="container my-3">
                <h2>NewsFill Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div key={element.url} className="col-md-4">
                            <NewsItem title={element==null?"":element.title.slice(0, 70)} description={element.description.slice(0, 200)} author={element.author} imageUrl={element.urlToImage} newsUrl={element.url}/>
                        </div>         
                    })}
                </div>
            </div>
        )
    }
}

export default News
