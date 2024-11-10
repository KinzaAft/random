import Header from "../Componenets/header"
import Footer from "../Componenets/footer"
import Link from "next/link"
import BtnData from "../Data/function"

export default function Contact (){
    return(
        <div>
            <Header />
          <h1 className="text-4xl  text-[#10375C] text-center font-extrabold pt-[10px]">PROJECTS</h1>

    <section id="contact">
        <div className="getin">
            <h2>Get in touch</h2>
            <p>Looking for help to Expand Your Business with a Strong Digital Presence. </p>
            
            <div className="getin-details">
                <h3>Email</h3>
                <div>
                    <i className="fa-solid fa-house"></i>
                    <p>kinzaaftab16@gmail.com</p>
                </div>
                <h3>Phone</h3>
                <div>
                    <i className="fa-solid fa-phone"></i>
                    <p> 02334434454554</p>
                </div>
                <h3>Linkedin</h3>
                <div>
                    <i className="fa-solid fa-envelope"></i>
                    <p>Kinza Aftab</p>
                </div>
            </div>
        </div>
        <div className="form">
            <h4>Let's Connect </h4>
            <p>And Expand your Business with your digital presence</p>
            <div className="form-row">
                <input type="text" placeholder="Your Name"/>
                <input type="text" placeholder="Email"/>
            </div>
            <div className="form-col">
                <input type="text" placeholder="Subject"/>
            </div>
            <div className="form-col">
                <textarea name="" id="" placeholder="How can i help you?"></textarea>
            </div>
            <div className="form-col">
                <button>Send Message</button>
            </div>
        </div>
    </section>
            <Footer />
        </div>
    )
}