import Image from "next/image";
import Header from "./Componenets/header";
import skillData from "./Data/data";
import Footer from "./Componenets/footer";
import Contact from "./Componenets/want";

export default function Home() {
  return (
   <div>
    <Header />
    <div className="herosectoion bg-[#fff] h-[800px] w-full flex flex-col md:h-[600px] md:flex-row">
      <div className="left-0 w-full text-center md:ml-[10px] md:w-[50%] h-[500px] md:text-left ">
          <div className="text-[#fff] ml-[30px] w-[600px]">
          <p className="text-4xl font-medium mt-[100px] text-[#FF6600]">HELLO, I'M</p>
          <p className="text-5xl tracking-[20px] font-extrabold mt-[5px] text-[#10375C]">KINZA AFTAB</p>
          <p className="text-2xl font-thin text-[#10375C] mt-[20px]" > A web developer skilled in dynamic styling with expertise in HTML, CSS, JavaScript, TypeScript, and  Frontend Developer.</p>
        </div>
        <div className="ml-[30px] mt-[40px]">
          <a href="/contact">
          <button className="btnani2 shadow h-[45px] w-[200px] border-2 border-orange-600 text-xl text-[#FF6600] rounded-[25px]">Contact Me</button>
          </a>
          <a href='/resume' download>
          <button className="btnani shadow h-[45px] w-[200px] border-2 border-[#10375C] ml-[30px] text-xl text-[#10375C] rounded-[25px]">Download Cv</button>
          </a>
        </div>
        
        <div className="icon  flex text-[#FF6600] ml-[40px] mt-[20px]">
          <div className="h-[30px] w-[30px]  p-[3px] rounded-[50%] ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#10375c" fill="none">
    <path d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
    <path d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
</svg>

          <p className="name mt-[5px] ">kinzaaftab16@gmail.com</p>
          </div>

          <div className="h-[30px] w-[30px]  p-[3px] rounded-[50%] ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#10375c" fill="none">
    <path d="M7 10V17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M11 13V17M11 13C11 11.3431 12.3431 10 14 10C15.6569 10 17 11.3431 17 13V17M11 13V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M7.00801 7L6.99902 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
</svg>
          <p className="name mt-[5px] w-[180px] ">Kinza Aftab</p>

          </div>

          <div  className="h-[30px] w-[30px] p-[3px] rounded-[50%]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#10375c" fill="none">
    <path d="M6.51734 17.1132C6.91177 17.6905 8.10883 18.9228 9.74168 19.2333M9.86428 22C8.83582 21.8306 2 19.6057 2 12.0926C2 5.06329 8.0019 2 12.0008 2C15.9996 2 22 5.06329 22 12.0926C22 19.6057 15.1642 21.8306 14.1357 22C14.1357 22 13.9267 18.5826 14.0487 17.9969C14.1706 17.4113 13.7552 16.4688 13.7552 16.4688C14.7262 16.1055 16.2043 15.5847 16.7001 14.1874C17.0848 13.1032 17.3268 11.5288 16.2508 10.0489C16.2508 10.0489 16.5318 7.65809 15.9996 7.56548C15.4675 7.47287 13.8998 8.51192 13.8998 8.51192C13.4432 8.38248 12.4243 8.13476 12.0018 8.17939C11.5792 8.13476 10.5568 8.38248 10.1002 8.51192C10.1002 8.51192 8.53249 7.47287 8.00036 7.56548C7.46823 7.65809 7.74917 10.0489 7.74917 10.0489C6.67316 11.5288 6.91516 13.1032 7.2999 14.1874C7.79575 15.5847 9.27384 16.1055 10.2448 16.4688C10.2448 16.4688 9.82944 17.4113 9.95135 17.9969C10.0733 18.5826 9.86428 22 9.86428 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>
          <p className="name mt-[5px] w-[180px] ">Kinza Aftab</p>
          </div>
          </div>
        </div>
        <div className="right w-full ml-0 md:w-[50%] h-[500px]">
        <div className="photo "></div>
        </div>
      
    </div>
    <div className="second-section shadow-md w-full md:w-[1000px] ml-0 md:ml-[150px] bg-slate-100 rounded-xl md:h-[400px]">
          <h1 className="text-4xl  text-[#10375C] text-center font-extrabold pt-[20px]">ABOUT ME</h1>
          <p className="text-2xl  text-center pl-[60px] pr-[60px] pt-[20px] pb-[50px] text-[#10375C] font-thin">I am Kinza Aftab, a dedicated front-end developer passionate about building responsive, user-centered designs. With expertise in HTML, CSS, JavaScript, and Tailwind CSS, I focus on creating interactive web applications. Currently exploring Next.js and dynamic styling, I continuously aim to expand my skills in modern web technologies and create impactful digital experiences</p>
          <a href="/about">
          <button className="btnani2 shadow h-[45px] w-[200px] md:ml-[400px] ml-[95px] border-2 border-orange-600 text-xl text-[#FF6600] rounded-[25px] flex items-center justify-center">View More</button>

          </a>
    </div>
    <div className="third-section h-[800px] md:h-[400px] bg-slate-100 mt-[50px]">  
    <h1 className="text-4xl text-[#10375C] text-center font-extrabold pt-[40px] ">SKILLS & SERVICES</h1>
      <div className="flex flex-wrap">
                {skillData.map((IData)=>(
                      <div className=" shadow h-[200px] w-[400px] border-2 border-orange-600  rounded-2xl ml-[30px] mt-[30px]">
                      <p className="text-center text-[#10375C] font-medium text-2xl mt-[30px]">{IData.tittle}</p>
                      <p className="text-center mt-[20px] text-lg text-[#10375C] ">{IData.description}</p>
                      </div>
                )

                )}
      </div>
    </div>
    <div className="sshadow w-full md:w-[1000px] md:h-[200px] ml-0 md:ml-[150px] bg-slate-100 rounded-xl mt-[50px] mb-[20px]">
      <p className="text-4xl text-[#10375C] text-center font-extrabold pt-[40px] ">Want to??</p>
      <p className="text-xl text-[#FF6600] text-center font-medium pt-[10px ]">Expand Your Business with a Strong Digital Presence</p>
      <a href="/contact">
          <button className=" shadow btnani h-[45px] w-[200px] border-2 border-[#10375C] ml-[400px] text-xl text-[#10375C] rounded-[25px] mt-[20px]">Contact Me</button>
      </a>
    </div>

      <Footer/>
   </div>
  );
}
