/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import styled from 'styled-components';
import { changePop, onRefreshPage } from './socket';

const ButtonContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`;

const Button = styled.button`
    width:100%;
    height: 100%;
    font-size: 48px;
    color: #ffffff;

`;

const ShowButton = styled(Button)`
    background-color: green;
`;

const HideButton = styled(Button)`
    background-color: red;
`;
export class ActivePop extends React.Component {

    state = {
        isPopVisible: true,
    };

    componentDidMount() {
        onRefreshPage(() => this.setState({isPopVisible: true}));
    }

    changePopHandler = (val) => {
        changePop(val);
        this.setState({ isPopVisible: val});
    };

    showPop = () => {
        this.changePopHandler(true);
    }

    hidePop = () => {
        this.changePopHandler(false);
    }

    render() {
        return (
            <ButtonContainer>
                {
                    !this.state.isPopVisible ? 
                    <ShowButton onClick={this.showPop}>Show <span>💩</span></ShowButton> :
                    <HideButton onClick={this.hidePop}>Hide <span>💩</span></HideButton>
                }
            </ButtonContainer>
        );
    };
}