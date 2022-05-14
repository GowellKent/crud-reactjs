import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Container,
} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faInfo } from '@fortawesome/free-solid-svg-icons'

const JumbotronComponent = (props) => {
  return (
    <div className="mt-5">
      <Container>
        <Card>
          <CardBody>
            <CardTitle tag="h2" className="mb-3">
              {props.title}
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h5">
              Lorem Ipsum
            </CardSubtitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              sagittis porta lobortis. Orci varius natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus mus. Nullam vulputate
              lobortis commodo. Morbi nec metus augue. Interdum et malesuada
              fames ac ante ipsum primis in faucibus. Aenean id hendrerit
              turpis.
            </CardText>
            <Button color="dark"><FontAwesomeIcon icon={faInfo} /> Learn More</Button>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

export default JumbotronComponent;
