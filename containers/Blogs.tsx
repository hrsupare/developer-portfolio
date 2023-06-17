import { BlogsContent } from '../portfolio';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import FeedbackCard from '../components/FeedbackCard';
import BlogsCard from '../components/BlogsCard';

const Blogs = () => {
  return (
    BlogsContent && (
      <section className="section section-lg">
        <Container>
          <div className="d-flex p-4">
            <div>
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                <i className="fa fa-star text-info" />
              </div>
            </div>
            <div className="pl-4">
              <h4 className="display-3 text-info ">Blogs</h4>
            </div>
          </div>
          <Row className="row-grid align-items-center">
            {BlogsContent.map((data, i) => {
              return (
                <Col key={i} lg={6}>
                  < BlogsCard {...data} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    )
  );
};

export default Blogs;
