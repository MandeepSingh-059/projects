import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

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

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
        document.title = `${this.props.category.toUpperCase()} - NewsFill`;
    }

    async updateNews() {
        
        this.props.setProgress(10);
        
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json()
        
        this.props.setProgress(50);

        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false, 
        })
        
        this.props.setProgress(100);

    }
    
    async componentDidMount() {
        this.updateNews();
    }

    fetchMoreData = async () => {
        this.setState({page: this.state.page + 1});
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.apiKey}&category=${this.props.category}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
        });
    };


    render() {
        return (
            <>
                <h2 className="text-center" style={{ margin: "30px 0px" }}>NewsFill - Top Headlines in {`${this.props.category}`}</h2>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                    scrollableTarget={window.scrollbars}
                >
                    
                    <div className="container">
                    <div className="row">
                        {this.state.articles.map((element) => {
                            return <div key={element.url} className="col-md-4">
                                <NewsItem title={element == null ? "" : element.title.slice(0, 70)} description={element == null ? "" : element.title.slice(0, 200)} author={element.author} date={element.publishedAt} imageUrl={element.urlToImage} newsUrl={element.url} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div>
                </InfiniteScroll>
            </>
        )
    }
}

export default News
