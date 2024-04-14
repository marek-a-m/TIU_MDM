import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
export const Article = () => {
    return (
       
        <div>
            <div>
                <Form>
                    <Row>
                        <Col>
                            <Button variant="outline-primary">Save</Button>{' '}
                            <Button variant="outline-primary">Cancel</Button>{' '}
                        </Col>   
                    </Row>
                </Form>
            </div>
            
            
        </div>
    )
}