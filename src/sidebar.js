import { Nav,Col,InputGroup,Form,Button } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';

function Sidebar()
{
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="Active">
        <Col>
        <div style={{
            height: '100%', 
            width: '240px',
            position: 'fixed',
            backgroundColor: 'rgb(223, 220, 220)'
            }}>
      <Nav variant="pills" className="flex-column"
      style={{ padding: '18px', textAlign: 'center' }}>
        Main menu
        <hr></hr>
      <Nav.Link eventKey="Active">Active</Nav.Link>
      <Nav.Link eventKey="Link">Link</Nav.Link>
      <Nav.Link eventKey="Profile">Profile</Nav.Link>
      <Nav.Link eventKey="Disabled" >
        Disabled
      </Nav.Link>
    </Nav>
</div>
</Col>
    <Col>
          <Tab.Content style={{paddingLeft: '240px'}}>

            <Tab.Pane eventKey="Active" style={{padding: '10px'}}>
         
            <div style={{padding: '10px'}}><h4>Students</h4></div>
            <InputGroup className="mb-3" style={{padding: '10px'}}>
        <Form.Control
          placeholder="Search by ID"
          type="email"
        />
        <Form.Control
          placeholder="Search by phone"
         
        />
        <Form.Control
          placeholder="Search by name"
          
        />
        <Button variant="primary" id="button-addon2" type="submit">
          Button
        </Button>
      </InputGroup>
      
            </Tab.Pane>
            <Tab.Pane eventKey="Link">
             sdfssdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfs
            </Tab.Pane>
            <Tab.Pane eventKey="Profile">
             sdfssdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfs
            </Tab.Pane>
            <Tab.Pane eventKey="Disabled">
             sdfssdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfs
            </Tab.Pane>
            
          </Tab.Content>
        </Col>
      
    </Tab.Container>
    );
}
export default Sidebar;