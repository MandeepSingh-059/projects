import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';
//   https://newsapi.org/v2/top-headlines?country=us&apiKey=ac61e477a31f4607b6b6b46ece505d9e&pagesize=6
export class NewsItem extends Component {

    render() {
        let {title,description,author,imageUrl,newsUrl} = this.props;
        
        return (
            <div className="my-3">
                <Card style={{maxWidth : "100%"}}>
                    <CardImg top src={imageUrl ? imageUrl : "./logo192.png"} alt="Couldnt fetch Article image" />
                    <CardBody>
                        <CardTitle tag="h5">{title}{`${title.length<70 ? "":"..."}`}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">{`${author!=null ? "By-":""}`}{author}</CardSubtitle>
                        <CardText>{description}{`${description.length<150 ? "":"..."}`}</CardText>
                        <a className="btn btn-outline-success btn-sm" href={newsUrl} target="_blank" rel="noreferrer">Read More</a>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default NewsItem
