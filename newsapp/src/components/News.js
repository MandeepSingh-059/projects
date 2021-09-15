import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor(){
        super();
        this.state = {
            articles : [
                {
                    "source": {
                        "id": "nbc-news",
                        "name": "NBC News"
                    },
                    "author": "David K. Li",
                    "title": "Minnesota high court tosses murder conviction against Mohamed Noor, former Minneapolis police officer - NBC News",
                    "description": "Mohamed Noor was convicted of third-degree murder for shooting and killing Justine Ruszczyk Damond in 2017. The Minnesota Supreme Court tossed that conviction.",
                    "url": "https://www.nbcnews.com/news/us-news/minnesota-high-court-tosses-murder-conviction-against-former-police-officer-n1279265",
                    "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2021_37/2888101/190607-mohamed-noor-sentencing-ew-143p.jpg",
                    "publishedAt": "2021-09-15T18:21:00Z",
                    "content": "The Minnesota Supreme Court on Wednesday reversed the third-degree murder conviction of former Minneapolis police officer Mohamed Noor, who fatally shot a 911 caller four years ago.\r\nNoor was also co… [+3349 chars]"
                },
                {
                    "source": {
                        "id": "fox-news",
                        "name": "Fox News"
                    },
                    "author": "Ronn Blitzer",
                    "title": "Cruz praises courage of US gymnasts testifying about FBI Larry Nassar investigation: 'System needs to change' - Fox News",
                    "description": "Sen. Ted Cruz, R-Texas, thanked Simone Biles, McKayla Maroney, Aly Raisman and Maggie Nichols for appearing before the Senate Judiciary Committee on Wednesday to speak out against the failures of the FBI in investigating serial abuser Larry Nassar.",
                    "url": "https://www.foxnews.com/politics/cruz-praises-gymnasts-testifying-nassar-investigation",
                    "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2021/03/AP21082570715261.jpg",
                    "publishedAt": "2021-09-15T17:44:20Z",
                    "content": "Sen. Ted Cruz, R-Texas, thanked Simone Biles, McKayla Maroney, Aly Raisman and Maggie Nichols for appearing before the Senate Judiciary Committee on Wednesday to speak out against the failures of the… [+2235 chars]"
                },
                {
                    "source": {
                        "id": "nfl-news",
                        "name": "NFL News"
                    },
                    "author": null,
                    "title": "Week 2 NFL underdogs: Zach Wilson, Packers' mindset, Titans' offense on radar - NFL.com",
                    "description": "How will Zach Wilson handle the Pats? Can Derrick Henry and the Titans get back on track? Marc Sessler identifies seven underdogs to watch in Week 2 of the 2021 regular season.",
                    "url": "https://www.nfl.com/news/week-2-nfl-underdogs-zach-wilson-packers-mindset-titans-offense-on-radar",
                    "urlToImage": "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/wvspfaxyu4oh0xjczwjt",
                    "publishedAt": "2021-09-15T17:42:00Z",
                    "content": "We'll see him before anyone else on this list when New York's centerpiece rumbler matches wits with Washington's gnarly defensive front on Thursday Night Football. He flatlined in Big Blue's debut lo… [+1110 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "CNBC"
                    },
                    "author": "Christina Wilkie",
                    "title": "Top general Milley reassured China, others in secret calls as Trump pushed election lies, spokesman says - CNBC",
                    "description": "Joint Chiefs of Staff Chairman Gen. Mark Milley called his Chinese counterpart twice as Trump's presidency waned to reassure Beijing the U.S. wouldn't attack.",
                    "url": "https://www.cnbc.com/2021/09/15/milley-held-secret-calls-with-china-others-as-trump-pushed-election-lies.html",
                    "urlToImage": "https://image.cnbcfm.com/api/v1/image/106930028-16293185142021-08-18t193215z_1719756452_rc2v7p9v3oso_rtrmadp_0_afghanistan-conflict-usa.jpeg?v=1629318598",
                    "publishedAt": "2021-09-15T17:19:04Z",
                    "content": "WASHINGTON Chairman of the Joint Chiefs of Staff Gen. Mark Milley placed two phone calls to his Chinese counterpart in the waning months of Donald Trump's presidency to secretly reassure Beijing that… [+2792 chars]"
                },
                {
                    "source": {
                        "id": "cnn",
                        "name": "CNN"
                    },
                    "author": "Hannah Ryan, CNN",
                    "title": "Meghan and Harry are named 'icons' in Time's list of 100 most influential people - CNN",
                    "description": "After an eventful year, Prince Harry and Meghan, Duchess of Sussex can add another major moment to their 2021 diary, with Time naming them 'icons' in its list of the world's 100 most influential people.",
                    "url": "https://www.cnn.com/2021/09/15/world/harry-and-meghan-time-100-scli-intl-gbr/index.html",
                    "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210915121706-harry-meghan-time-100-most-influential-cover-super-tease.jpg",
                    "publishedAt": "2021-09-15T17:18:00Z",
                    "content": "(CNN)This year has seen Prince Harry and Meghan, Duchess of Sussex take part in a groundbreaking interview with Oprah Winfrey and welcome their second child into the world, all while scandals have sw… [+1261 chars]"
                }
            ]
        }
    }

    render() {
        return (
            <div className="container my-3">
                <h2>NewsFill Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div key={element.url} className="col-md-4">
                            <NewsItem title={element.title.slice(0, 70)} description={element.description.slice(0, 100)} author={element.author} imageUrl={element.urlToImage} newsUrl={element.url}/>
                        </div>         
                    })}
                </div>
            </div>
        )
    }
}

export default News
