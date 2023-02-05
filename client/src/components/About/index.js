import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
    }
    }


const About = () => {
    return (
        <div>
<Container fluid>
        <Row style={styles.container}>
            <Col><div style={styles.left}><h1>about me</h1></div></Col>
            <Col style={styles.right}><p>I am a Full Stack Developer with a passion for creating scalable applications that solve real-world problems in a user-friendly and efficient manner. Skilled in utilising a variety of technologies to design, develop, and deploy full-featured web solutions. Committed to delivering high-quality results and continuously improving technical abilities</p></Col>
        </Row>
</Container>
</div>
    );
}

export default About;