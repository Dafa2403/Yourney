import './styles/page2.css';
import { Row,Col,Card } from 'react-bootstrap';


function Two(){
    return(
        <div className='pg2'>
            <div className='bg2'>
                <img src={require('./img/bg2.png')} className='bg3'></img>  
                <div className='con-content'>
                    <div className='bestCont'>
                        <Card style={{width:'95%',height:'95%', borderRadius: 25, backgroundColor:'#fff'}}>
                            <Card.Body>
                                <Card.Title style={{fontSize:90, textAlign:'center'}} >50</Card.Title>
                                <Card.Text style={{fontSize:45, textAlign:'center'}}>TOP PRODUCT CAPSTONE BANGKIT 2022</Card.Text>
                            </Card.Body>

                        </Card>
                    </div>
                        <Row className='Row'>
                            <Col className='col'>
                                <Row className='item'>
                                    <img src={require('./img/kemendikbud.png')} style={{width:'135px',height:'117px'}}></img>
                                    <span style={{width:'50%'}}>Funded by kemendikbudristek</span>
                                </Row>
                                <Row className='item2'>
                                    <img src={require('./img/trans 1.png')} style={{width:'135px',height:'117px'}}></img>
                                    <span style={{width:'50%'}}>Support by Bandung Techo Park</span>
                                </Row>
                            </Col>
                            <Col className='col'>
                                <Row className='item'>
                                <img src={require('./img/google.png')} style={{width:'135px',height:'117px'}}></img>
                                    <span style={{width:'50%'}}>Funded by Google Indonesia</span>
                                </Row>
                                <Row className='item2'>
                                <img src={require('./img/bangkit.png')} style={{width:'100px',height:'100px'}}></img>
                                    <span style={{width:'50%'}}>Support by Google Bangkit Academy</span>
                                </Row>
                            
                            </Col>
                        </Row>
                </div>
            </div>
        </div>
    )
}


export default Two;