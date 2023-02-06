import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cv from "../../images/resume.pdf";

const styles = {
    container: {
        marginTop: '65px',
        display: 'flex',
    },
    left: {
        border: '1px solid black',
        overflow: 'hidden',
        textAlign: 'center',
        backgroundColor: 'rgb(244, 242, 242)',
    },
    right: {
        minWidth: '75%',
        marginTop: '60px',
    },
    center: {
        textAlign: 'center',
        padding: '10px',
        listStyle: 'none',
    },
};


const Resume = () => {
    return (
        <div>
<Container fluid>
        <Row style={styles.container}>
            <Col>
            <div style={styles.left}><h1>resume</h1></div>
                
            </Col>
            <Col style={styles.right}>
                <div style={styles.center}>
                    <h3>Nicolas Fraenkel <br></br>Resume</h3>
                </div>
                <div style={styles.center}>
                <p>I am a Full Stack Developer with a passion for creating scalable applications that solve real-world problems in a user-friendly and efficient manner. Skilled in utilising a variety of technologies to design, develop, and deploy full-featured web solutions. Committed to delivering high-quality results and continuously improving technical abilities</p>
                </div>
                <div style={styles.center}>
                    <h4>Full Stack Development Experience</h4>
                </div>
                <div style={styles.center}>
                    <p>
                        As a full stack developer university of Adelaide Full Stack Development Coding Bootcamp, I have developed proficiency with these technologies: 
                    </p>
                    <ul style={styles.center}>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript ES6</li>
                        <li>Node.js</li>
                        <li>MySQL</li>
                        <li>Sequelize</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                        <li>React</li>
                    </ul>
                </div>
                <div style={styles.center}>
                <a href={cv} download="Nicolas Fraenkel Resume">Download Resume</a>
                </div>
            </Col>
        </Row>
</Container>
</div>
    );
}

export default Resume;
