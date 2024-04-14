import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs'
export const Article = () => {
    return (
       
        <Container fluid>
            <Form>
                    <Row>
                        <Col xs="auto" className="pb-3">
                            <Button variant="outline-primary">Save</Button>{' '}
                            <Button variant="outline-primary">Cancel</Button>{' '}
                        </Col>   
                </Row>
                <Row>
                    <Tabs
                        defaultActiveKey="global"
                        id="Article_data"
                        className="mb-3"
                    >
                        <Tab eventKey="global" title="Global data">
                            Tab content for global data
                        </Tab>
                        <Tab eventKey="pl" title="PL data">
                            Tab content for Pl data
                        </Tab>
                        <Tab eventKey="nl" title="NL data" >
                            Tab content for Nl data
                        </Tab>
                    </Tabs>
                </Row>
              </Form>
                
        </Container>
    )
}