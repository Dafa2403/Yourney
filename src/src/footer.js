import './styles/footer.css'
import {IoLogoInstagram, IoLogoLinkedin, IoLogoWhatsapp, IoIosPin} from "react-icons/io";


function Footer(){
    return(
        <body className='foot'>
            <span>Find Us:</span>
            <div className='footer'>
                <a href='https://www.instagram.com/yourney.project/'><IoLogoInstagram color='white' size={40} /></a>
                <a href='https://www.linkedin.com/in/yourney-project-295325250'><IoLogoLinkedin color='white' size={40}/></a>
                <a href='https://goo.gl/maps/rQtdTFa4TWyYt3rDA'><IoIosPin color='white' size={40}/></a>
            </div>
            <div className='cr'>
                <span>© 2021-2022 Yourney</span>
                <span>© 2022 Yourney</span>
            </div>
           
        </body>
    )
}

export default Footer;