import React, { Component } from 'react';
import NewsItem from './NewsItem';
import {Button} from 'reactstrap';

export class News extends Component {
    constructor(){
        super();
        this.state = {
            articles : [],
            loading : true,
            page: 1
        }
    }

    /*
    Fetch method is a part of fetch api and it takes a url and returns a promise
    Async function can wait for a await function to resolve it's promise
    */

    disableNext(){
        if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){
            return true;
        }
        else{return false;}
    }
    
    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=ac61e477a31f4607b6b6b46ece505d9e&page=1&pageSize=20";
        let data = await fetch(url);        
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults});
    }

    handleNextClick = async () =>{
        if( this.disableNext()){
        }
        else{
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=ac61e477a31f4607b6b6b46ece505d9e&page=${this.state.page + 1}&pageSize=20`;
            let data = await fetch(url);        
            let parsedData = await data.json();
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            })
        }
    }
    handlePrevClick = async () =>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=ac61e477a31f4607b6b6b46ece505d9e&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);        
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })
    }
    
    render() {
        return (
            <div className="container my-3">
                <h2>NewsFill Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div key={element.url} className="col-md-4">
                            <NewsItem title={element==null?"":element.title.slice(0, 70)} description={element==null?"":element.title.slice(0, 200)} author={element.author} imageUrl={element.urlToImage} newsUrl={element.url}/>
                        </div>         
                    })}

                </div>
                <div className="container my-3 d-flex justify-content-between">
                <Button disabled={this.state.page<=1} color="success" onClick={this.handlePrevClick}>&larr; Previous</Button>
                <Button disabled={this.disableNext()} color="success" onClick={this.handleNextClick}>Next &rarr;</Button>
                </div>
            </div>
        )
    }
}

export default News
