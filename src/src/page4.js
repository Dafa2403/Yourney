import './styles/page4.css';

function Four(){
    return(
        <body className='four'>
            <div className='conTeam'>
                {/* ML */}
                <div className='conImg'>
                    <span className='titleT'>Machine Learning Team</span>
                    <div className='conImg1'>
                        <img className='img1' src={require('./img/Personil/alif.jpeg')}></img>
                    </div>
                    <div className='conImg1'>
                        <img className='img2' src={require('./img/Personil/aul.jpg')}></img>
                    </div>
                    <div className='conImg1'>
                        <img className='img3' src={require('./img/Personil/rohman.jpg')}></img>
                    </div>
                </div>
                {/* MD */}
                <div className='conImg'>
                    <span className='titleT'>Mobile Developer Team</span>
                    <img className='img4' src={require('./img/Personil/alif.jpeg')}></img>
                </div>
                {/* WD */}
                <div className='conImg'>
                    <span className='titleT'>Web Developer Team</span>
                    <img className='img5' src={require('./img/Personil/Dafa.JPG')}></img>
                </div>
                {/* CC */}
                <div className='conImg'>
                    <span className='titleT'>Cloud Computing Team</span>
                    <div className='conImg2'>
                        <img className='img6' src={require('./img/Personil/ren2.jpg')}></img>
                    </div>
                    <div className='conImg2'>
                        <img className='img7' src={require('./img/Personil/coco.jpg')}></img>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Four;