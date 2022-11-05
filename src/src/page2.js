import './styles/page2.css';
import { Row,Col,Card } from 'react-bootstrap';


function Two(){
    return(
        <div className='pg2' id='produk'>
            <div className='bg2'> 
                <div className='con-content'>
                    <div style={{display:'flex', justifyContent:'center',alignItems:'center',width:'40%',height:'100%'}}>
                        <div className='bestCont'>
                            <Card style={{width:'95%',height:'95%', borderRadius: 25, backgroundColor:'#fff'}}>
                                <Card.Body style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                                    <Card.Title style={{fontSize:90, textAlign:'center', color:"#00A58F"}} >TOP 15</Card.Title>
                                    <Card.Text style={{fontSize:45, textAlign:'center', color:"#00A58F"}}>PRODUCT CAPSTONE BANGKIT 2022</Card.Text>
                                </Card.Body>

                            </Card>
                        </div>
                    </div>
                        <Row className='Row'>
                            <Col className='col'>
                                <Row className='item'>
                                    <img src={require('./img/kemendikbud.png')} style={{width:'135px',height:'117px'}}></img>
                                    <span style={{width:'50%'}}>Funded by kemendikbudristek</span>
                                </Row>
                                <Row className='item'>
                                    <img src={require('./img/trans 1.png')} style={{width:'135px',height:'117px'}}></img>
                                    <span style={{width:'50%'}}>Support by Bandung Techo Park</span>
                                </Row>
                            </Col>
                            <Col className='col'>
                                <Row className='item'>
                                <img src={require('./img/google.png')} style={{width:'135px',height:'117px'}} className='hov'></img>
                                    <span style={{width:'50%'}}>Funded by Google Indonesia</span>
                                </Row>
                                <Row className='item'>
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