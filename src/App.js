import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ConsultantPage from "./Components/Consultant/ConsultantPage"
import Skills from "./Components/Skills/Skills"

function App() {
  return (
    <div className="App">
      <Container fluid>
      <Row>
      <Col xs = {12} sm = {12} md = {6} lg = {5}>
      <ConsultantPage/>
      </Col>
      <Col xs = {12} sm = {12} md = {6} lg = {7}>
      <Skills/>
      </Col>
      </Row> 
      </Container>
    </div>
  );
}

export default App;
