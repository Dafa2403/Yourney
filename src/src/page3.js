import { Col, Row, Container, Card } from "react-bootstrap";
import './styles/page3.css';

function Three(){
    return(
        <div className="con" id="portofolio">
            <Container >
            <Row>
                <Col sm={4} className="Oapp">
                    <Row>
                        <h2 style={{color:"#ffff"}}>OUR APPLICATION</h2>
                    </Row>
                    <Row>
                        <p style={{textAlign:'justify', color:"#ffff"}}>Aplikasi Yourney adalah aplikasi yang dapat memberikan minat pengguna aplikasi dengan memprediksikan minat mereka dengan menggunakan teknologi Artificial Intelligence, sesuai dengan tagline kami yaitu “Make Your Journey Yours” kami berusaha memberikan rekomendasi destinasi wisata yang sesuai dengan minat pengguna dengan adanya unsur fleksibilitas pengguna dalam menentukan dan menyesuaikan rekomendasi wisata yang telah diberikan. </p>
                    </Row>
                    <Row>
                        <img src={require('./img/foot.png')}></img>
                    </Row>
                </Col>
                <Col sm={8} className="layoutImg">
                    <Row style={{marginRight:10}}>
                        <img src={require('./img/ph1.png')} className='pImg'></img>
                        <img src={require('./img/ph2.png')} className='pImg1'></img>
                    </Row>
                    <Row>
                        <img src={require('./img/ph3.png')} className='pImg2'></img>
                        <img src={require('./img/ph4.png')} className='pImg3'></img>
                    </Row>
                </Col>
            </Row>
        </Container>
        </div>
    );
}

export default Three;