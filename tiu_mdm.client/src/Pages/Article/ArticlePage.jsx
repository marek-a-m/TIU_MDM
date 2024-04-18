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
                            <Form>
                                <Form.Group className="mb-3" controlId="articleForm.Clasification">
                                    <Form.Label>Clasification</Form.Label>
                                    <Form.Select aria-label="Default select example">                                        
                                        <option>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Form.Group>
                                
                                <Form.Group className="mb-3" controlId="articleForm.MdmId">
                                    <Form.Label>MDM Item Id</Form.Label>
                                    <Form.Control type="text" placeholder="1" disabled readOnly />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="articleForm.BasicUom">
                                    <Form.Label>Basic UOM</Form.Label>
                                    <Form.Control type="text"  />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="articleForm.ContentUom">
                                    <Form.Label>Content UOM</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="articleForm.Ean">
                                    <Form.Label>EAN Number</Form.Label>
                                    <Form.Control type="text"  />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="articleForm.BrandName">
                                    <Form.Label>Name of Brand</Form.Label>
                                    <Form.Control type="text"   />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="articleForm.BrandItemName">
                                    <Form.Label>Brand Item Name</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="articleForm.BrandItemId">
                                    <Form.Label>Brand Item ID</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="articleForm.ControlTextarea1">
                                    <Form.Label>Example textarea</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                            </Form>

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