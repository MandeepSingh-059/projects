import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
//   https://newsapi.org/v2/top-headlines?country=us&apiKey=ac61e477a31f4607b6b6b46ece505d9e&pagesize=6
export class NewsItem extends Component {

    render() {
        let { title, description, author, imageUrl, newsUrl, date, source } = this.props;

        return (
            <div className="my-3">
                <Card style={{ maxWidth: "100%" }}>
                    <a href={newsUrl} target="_blank"  rel="noreferrer">
                        <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger" style={{ zIndex: "1" }} >{source}</span>
                    </a>
                    <CardImg top src={imageUrl ? imageUrl : "./loading.gif"} alt="Article image not available" />
                    <CardBody>
                        <CardTitle tag="h5">
                            {title}{`${title.length < 70 ? "" : "..."}`}
                        </CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">
                            {`${author != null ? ("By-" + author + " | ") : ""}`}
                            {`${author == null ? "- " : ""}`}
                            {`${date != null ? new Date(date).toGMTString() : ""}`}
                        </CardSubtitle>
                        <CardText>{description}{`${description.length < 150 ? "" : "..."}`}</CardText>
                        <a className="btn btn-outline-success btn-sm" href={newsUrl} target="_blank" rel="noreferrer">Read More</a>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default NewsItem
