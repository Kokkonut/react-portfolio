import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { portfolio } from "../../data";
import PortfolioList from "../PortfolioList";

const styles = {
    container: {
        marginTop: '65px',
        display: 'flex',
    },
    left: {
        border: '1px solid black',
        overflow: 'hidden',
        textAlign: 'center',
    },
    right: {
        minWidth: '75%',
        marginTop: '60px',
    }
}

const Portfolio = () => {

    const data = portfolio;

    return (
        <div>
            <Container fluid>
                <Row style={styles.container}>
                    <Col><div style={styles.left}><h1>portfolio</h1></div></Col>

                    <Col style={styles.right}>
                    <div>                            
                            {data.map((item) => (
                            <PortfolioList
                                key={item.id}
                                title={item.title}
                                image={item.img}
                                description={item.description}
                                link={item.github}
                            />
                        ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Portfolio;




