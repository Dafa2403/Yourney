import './styles/footer.css'
import {IoLogoInstagram, IoLogoLinkedin, IoLogoWhatsapp, IoIosPin} from "react-icons/io";


function Footer(){
    return(
        <body className='foot'>
            <span>Find Us:</span>
            <div className='footer'>
                <IoLogoWhatsapp color='white' size={40}/>
                <a href='https://www.instagram.com/yourney.project/'><IoLogoInstagram color='white' size={40} /></a>
                <IoLogoLinkedin color='white' size={40}/>
                <IoIosPin color='white' size={40}/>
            </div>
            <div className='cr'>
                <span>2021-2022 Yourney</span>
                <span>2021-2022 Clottania</span>
            </div>
           
        </body>
    )
}

export default Footer;