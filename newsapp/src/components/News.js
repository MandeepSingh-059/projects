import React, { Component } from 'react';
import NewsItem from './NewsItem';
import {Button} from 'reactstrap';
import Spinner from './Spinner';
import PropTypes from 'prop-types';


export class News extends Component {

    static defaultProps = {
        country: "in",
        pageSize: 9,
        category: "general"

    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor(props){
        super(props);
        this.state = {
            articles : [],
            loading : false,
            page: 1
        }
        document.title = `${this.props.category.toUpperCase()} - NewsFill`;
    }

    /*
    Fetch method is a part of fetch api and it takes a url and returns a promise
    Async function can wait for a await function to resolve it's promise
    */

    disableNext(){
        if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){
            return true;
        }
        else{return false;}
    }
    
    async updateNews(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=ac61e477a31f4607b6b6b46ece505d9e&category=${this.props.category}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);        
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles,
                        totalResults: parsedData.totalResults,
                        loading: false});
    }

    async componentDidMount(){
        this.updateNews();
    }
    handleNextClick = async () =>{
        this.setState({
            page: this.state.page + 1
        });
        this.updateNews();
    }
    handlePrevClick = async () =>{
        this.setState({
            page: this.state.page - 1
        });
        this.updateNews();
    }
    
    render() {
        return (
            <div className="container my-3">
                <h2 className="text-center" style={{margin:"30px 0px"}}>NewsFill - Top Headlines in {`${this.props.category}`}</h2>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div key={element.url} className="col-md-4">
                            <NewsItem title={element==null?"":element.title.slice(0, 70)} description={element==null?"":element.title.slice(0, 200)} author={element.author} date={element.publishedAt} imageUrl={element.urlToImage} newsUrl={element.url} source={element.source.name} />
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
