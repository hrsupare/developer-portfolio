// BlogCardType
import React from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import Fade from 'react-reveal/Fade';
import { BlogCardType, } from '../types/sections';

const BlogsCard = ({ name, discription, link , blogImage }: BlogCardType) => {
    { console.log(link, "link") }
    return (
        <Fade bottom duration={2000}>
        <Card
            style={{
                width: '22rem'
            }}
            className="card-lift--hover shadow mt-4"
        >
            <img
                alt="Sample"
                src={blogImage}
            />
            <CardBody>
                <CardTitle tag="h5">
                {name}
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                   
                </CardSubtitle>
                <CardText>
                    {discription}
                </CardText>

                <Button
                    className="btn-icon"
                    color="success"
                    href={link}
                    target="_blank"
                    rel="noopener"
                    aria-label="Twitter"
                >
                    <span className="btn-inner--icon">
                        <i className="fa fa-arrow-right mr-2" />
                    </span>
                    <span className="nav-link-inner--text ml-1">Read More..</span>
                </Button>

            </CardBody>
        </Card>
        </Fade>
    );
};

export default BlogsCard;
