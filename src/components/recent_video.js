import React from 'react';
import styled from 'styled-components';

const API_KEY = 'AIzaSyBQ8_InICiDZFDoQdH3Ah0XW_YMGhDDC20'
const channelID = 'UC-lHJZR3Gqxm24_Vd_AJ5Yw'
const result = 1;

var outputtedURL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`

const Youtube = styled.section`
    margin-top: 3em;
`;

class RecentVideo extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            recentYTVideo: []
        };

        this.handleLoad = this.handleLoad.bind(this);
    }

    componentDidMount() {
        window.addEventListener('load', this.handleLoad);
    }

    handleLoad() {
        fetch(outputtedURL)
            .then((response) => response.json())
            .then((responseJson) => {
                const recentYTVideo = responseJson.items.map(obj => "https://www.youtube.com/embed/" + obj.id.videoId);
                this.setState({recentYTVideo});
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        console.log(this.state.recentYTVideo)
        return (
            <Youtube>
                {
                    this.state.recentYTVideo.map((link, i) => {
                        var video = <iframe key={i} width="560" height="315" src={link} frameBorder="0" allowFullScreen></iframe>
                        return video
                    })
                }
            </Youtube>
        );
    }
}

export default RecentVideo;
