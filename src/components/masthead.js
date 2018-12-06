import React from 'react';
import styled from 'styled-components';

const Heading = styled.h3`
    margin: 0 auto 3em auto;
    line-height: 1.5;
    width: 100%;

    @media(min-width: 768px) {
        width: 450px;
    }
`;

const Button = styled.a`
    border: 2px solid #FF0000;
    background-color: #FF0000;
    background-radius: 3px;
    text-decoration: none;
    padding: 1em 2em;
    cursor: pointer;
    outline: none;
    color: white;

    &:hover {
        background-color: #d82222;
        border-color: #d82222;
    }
`;

class Masthead extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Heading>Our YouTube lord and savior Pewdiepie is in need of our help so hit the button below to subscribe and hit that bell icon</Heading>
                <Button
                    href="https://www.youtube.com/subscription_center?add_user=pewdiepie"
                    target="_blank">
                    Subscribe to Pewdiepie
                </Button>
            </React.Fragment>
        );
    }
}

export default Masthead;
