import './styles/page4.css';

function Four(){
    return(
        <>
            <body className='body4'>
                <div className='containerTeam'>
                    <div className='layer'>
                        <h2 style={{position:'absolute', color:'white'}}>Machine Learning Team</h2>
                        <div >
                            <img src={require('./img/ren2.JPG')} className='l1'></img>
                        </div>
                        <div >
                            <img src={require('./img/ren2.JPG')} className='l1'></img>
                        </div>
                        <div >
                            <img src={require('./img/ren2.JPG')} className='l1'></img>
                        </div>
                        {/* <img src={require('./img/image 5.png')}></img> */}
                    </div>
                    <div className='layer2'>
                        <h2 style={{position:'absolute', color:'white'}}>Mobile Development Team</h2>

                        <div >
                            <img src={require('./img/ren2.JPG')} className='l1'></img>
                        </div>
                        
                    </div>
                    <div className='layer4'>
                        <h2 style={{position:'absolute', color:'white'}}>Web Development Team</h2>

                       <div >
                            <img src={require('./img/ren2.JPG')} className='l1'></img>
                        </div>
                    </div>
                    <div className='layer1'>
                        <h2 style={{position:'absolute', color:'white'}}>Cloud Computing Team</h2>

                        <div >
                            <img src={require('./img/ren2.JPG')} className='l1'></img>
                        </div>
                        <div >
                            <img src={require('./img/ren2.JPG')} className='l1'></img>
                        </div>
                    </div>
              
                    </div>
            </body>
        
        </>
    )
}

export default Four;