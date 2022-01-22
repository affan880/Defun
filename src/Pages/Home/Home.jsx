import React from 'react';
import { Link } from 'react-router-dom';
import {
  Homepage,
  Heading,
  Description,
  Desc,
  ButtonContainer,
  CusrtomButton,
} from "./Home_css";
const Home = () => {
    return (
      <Homepage>
        <Desc>
          <Heading>
            The Online <br />
            Meme Generator
          </Heading>
          <Description>Easy to Create, use, share and download.</Description>
          <ButtonContainer>
            <Link to="/Explore">
              <CusrtomButton>
                Explore
                <i
                  class="fas fa-angle-right"
                  style={{ marginLeft: "10px", height: "24px", width: "24px" }}
                ></i>
              </CusrtomButton>
            </Link>
            <Link to="/Generator" >
              <CusrtomButton>
                Generate
                <i
                  class="fas fa-angle-right"
                  style={{ marginLeft: "10px", height: "24px", width: "24px" }}
                ></i>
              </CusrtomButton>
            </Link>
          </ButtonContainer>
        </Desc>
      </Homepage>
    );
}

export default Home;
