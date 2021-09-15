import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

export class NewsItem extends Component {
    render() {

        let {title,description,author,imageUrl,newsUrl} = this.props;
        
        return (
            <div className="my-3">
                <Card style={{maxWidth : "100%"}}>
                    <CardImg top src={imageUrl} alt="Card image cap" />
                    <CardBody>
                        <CardTitle tag="h5">{title}{`${title.length<70 ? "":"..."}`}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">{`${author!=null ? "By-":""}`}{author}</CardSubtitle>
                        <CardText>{description}...</CardText>
                        <a className="btn btn-outline-success btn-sm" href={newsUrl} target="_blank">Read More</a>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default NewsItem
