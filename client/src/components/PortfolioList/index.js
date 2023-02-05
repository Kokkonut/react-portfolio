import React from "react";
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const PortfolioList = (props) => {

    // const currentProject = useState(props);
    const { id } = props;
    const { title } = props;
    const { image } = props;
    const { description } = props;
    const { link } = props;

    return (
        <div key={id}>
            {/* <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary">{link}</Button>
                </Card.Body>
            </Card> */}


            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title className="card-title">{title}</Card.Title>
                    <Card.Text className="card-text">{description}</Card.Text>
                    <Card.Link href={link} target="_blank" className="card-link">
                        Github Repo
                    </Card.Link>
                    <br></br>
                </Card.Body>
            </Card>
        </div>
    );
}
export default PortfolioList;