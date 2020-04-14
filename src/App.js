import React, {Component} from 'react';
import Home from "./home";
import Experiences from "./experiences";
import Reviews from "./reviews";
import Involvements from "./involvements";
import About from "./about";
import styled from 'styled-components';
import 'normalize.css';
import './styles/css/global.css'

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            tab: "index"
        }
    }
    render() {
        return (
            <div className="App">
                <TitleContainer>
                    <Title onClick={()=>this.setState({tab: "index"})}>Takuro Fukuda's<br/>Honors Portfolio</Title>
                    <TitleNavArrow href="#page">Jump to the contents ▼</TitleNavArrow>
                </TitleContainer>
                <Content id="page">
                    <NavContainer>
                        <NavList onClick={()=>this.setState({tab: "aboutMe"})}>About Me</NavList>
                        <NavList onClick={()=>this.setState({tab: "yearInReview"})}>Year-In-Review</NavList>
                        <NavList onClick={()=>this.setState({tab: "honorsExperiences"})}>Honors Experiences</NavList>
                        <NavList onClick={()=>this.setState({tab: "involvements"})}>Involvements/Interest</NavList>
                    </NavContainer>
                    <PageContainer>
                        {this.state.tab === "index"?<Home/>:null}
                        {this.state.tab === "aboutMe"?<About/>:null}
                        {this.state.tab === "yearInReview"?<Reviews/>:null}
                        {this.state.tab === "honorsExperiences"?<Experiences/>:null}
                        {this.state.tab === "involvements"?<Involvements/>:null}
                    </PageContainer>
                </Content>
                <CRNotice>
                    <p style={{textAlign: "center"}}>&copy; 2020- Takuro Fukuda all rights reserved.</p>
                    <TitleNavArrow href="#">Back to the top ▲</TitleNavArrow>
                </CRNotice>
            </div>
        );
    }
}
const Title = styled.h1`
text-align: center;
cursor: pointer;
margin: 0;
font-size: 2.3rem;
padding-top: calc(50vh - 4.6rem);
padding-bottom: 3rem;
color: #222;
z-index: 99;
`;
const NavContainer = styled.nav`
display: grid;
width: calc(100vw + 8px);
grid-template-columns: repeat(4, 1fr);
@media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
}
`;
const NavList = styled.span`
display: inline-block;
padding: 15px 0;
text-align: center;
background-color: #aaa;
color: #fff;
cursor: pointer;
&:hover {
    background-color: #444;
    transition: all 1s ease; 
  }
`;
const PageContainer = styled.div`
margin: 0 10px;
`;
const TitleContainer = styled.div`
height: calc(100vh + 16px);
z-index: 0;
overflow: hidden;
&::before {
    content: '';
    position: absolute;
    top: -8px;
    left: -8px;
    right: -8px;
    bottom: -8px;
    z-index: -1;
    background-size: cover;
    background-image: url('./static/images/IMG_7392.jpg');
    opacity: 0.8;
    filter: blur(8px);
}
`;
const TitleNavArrow = styled.a`
text-align: center;
color: #222;
font-size: 1.25rem;
cursor: pointer;
text-decoration: none;
display: block;
z-index: 99;
`;
const Content = styled.div`
min-height: calc(100vh - 4.75rem);
`;
const CRNotice = styled.footer`
height: 3.75rem;
margin: 0;
background-color: #fff;
`;
export default App;
