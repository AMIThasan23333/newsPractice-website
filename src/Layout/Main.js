import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from './../Components/Shared/Header/Header';
import RightSide from './../Components/Shared/RightSide/RightSide';
import LeftSide from './../Components/Shared/LeftSide/LeftSide';
import Footer from '../Components/Shared/Footer/Footer';



const Main = () => {
    return (
        <div>
            <Header></Header>

            <Container>

            <Row>
                <Col lg='2'>
                  
                  <RightSide></RightSide>
                      
                </Col>

                 <Col lg='7'>

                 <Outlet></Outlet>
                 </Col>


                <Col lg='3'>

                      <LeftSide></LeftSide>
                </Col>
            </Row>


            </Container>

            <Footer></Footer>
        </div>
    );
};

export default Main;