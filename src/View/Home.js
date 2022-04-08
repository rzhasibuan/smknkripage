/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import imgBenner from '../img/banner.png';
import imgAbout from '../svg/undraw_empty_street_sfxm.svg';
import imgAbout2 from '../svg/undraw_amusement_park_17oe.svg';
import imgKeuntungan1 from '../svg/undraw_activity_tracker_re_2lvv.svg';
import imgKeuntungan2 from '../svg/undraw_jogging_re_k28i.svg';
import imgKeuntungan3 from '../svg/undraw_meditating_re_aiqa.svg';
import imgKeuntungan4 from '../svg/undraw_true_friends_c-94-g.svg';
import logo from '../img/logo.png';

import { ChevronRightIcon, MenuIcon, XIcon } from '@heroicons/react/solid';
import ScrollSpy from 'react-scrollspy-navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'hover.css';

function Home(props) {
    AOS.init();
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
           <div className="dark:bg-gray-800 bg-gradient-to-b from-orange-500 to-orange-300 overflow-hidden">
               <div className="flex flex-col lg:flex-row lg:justify-between shadow-none lg:shadow-lg">
                    <div className="flex items-center justify-between px-4 shadow-sm lg:shadow-none py-2 lg:py-0">
                        <div data-aos="fade-right item-aos" data-aos-offset="300" data-aos-easing="ease-in-sine">
                            <a className="text-white" href="https://udarasehatnkri.budiutomo.sch.id">SMK NKRI</a>
                        </div>
                        <div>
                            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden block h-5 w-5 text-gray-100 outline-none transform transition ease-in-out duration-1000">
                                {
                                isOpen ? <MenuIcon/> : <XIcon/>
                                }
                            </button>
                        </div>
                    </div>
                    <div data-aos="fade-left item-aos" data-aos-offset="200" data-aos-easing="ease-in-sine">
                        <div className={`${isOpen ? 'hidden' : 'block'} flex flex-col lg:flex-row `}>
                         <ScrollSpy>
                            <a href="#about" ref={React.createRef()} className="block text-blue-100 transition-all duration-100 hover:text-blue-200  py-3 lg:py-5 px-4">Tentang Alat</a>
                            <a href="#layanan" ref={React.createRef()} className="block text-blue-100 transition-all duration-100 hover:text-blue-200  py-3 lg:py-5 px-4 active">Manfaat</a>
                            <a href="#kelebihan" ref={React.createRef()} className="block text-blue-100 transition-all duration-100 hover:text-blue-200  py-3 lg:py-5 px-4 active">Keuntungan</a>
                            <a href="#kontak" ref={React.createRef()} className="block text-blue-100 transition-all duration-100 hover:text-blue-200  py-3 lg:py-5 px-4 active">Kontak</a>
                         </ScrollSpy>
                        </div>
                    </div>
               </div>

                <div className="flex flex-col-reverse md:flex-row lg:flex-row my-4 justify-center dark:bg-gray-800 ">
                    <div className="py-10 px-4 text-white flex flex-col justify-center item-aos" data-aos="zoom-in" data-aos-duration="1000">
                        <p className="sem">Mengenal alat?</p>
                        <h1 className="py-4 text-2xl lg:text-5xl">Instrument Udara Sehat</h1>
                        <h1 className="py-0 text-2xl lg:text-5xl">SMK NKRI Binjai</h1>
                        
                        <p className="py-4 text-sm lg:text-sm ">Alat Instrument udara sehat merupakan alat yang di buat oleh  korps taruna ayrcraft smk nkri binjai.</p>
                        <a href="https://api.whatsapp.com/send?phone=6289533221789&text=Halo%20SMK NKRI%20" className="bg-white text-center text-gray-500 py-4 px-4 rounded-3xl shadow-sm lg:w-48 md:w-40 hover:shadow-xl transition duration-100 ease-in-out">Hubungi Kami</a>
                    </div>
                    <div className="flex justify-center">
                        <img className="text-center w-96 drop-shadow-xl item-aos" data-aos="zoom-in" data-aos-duration="1000" src={imgBenner} alt="https://udarasehatnkri.budiutomo.sch.id" />
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,192L60,213.3C120,235,240,277,360,256C480,235,600,149,720,117.3C840,85,960,107,1080,138.7C1200,171,1320,213,1380,234.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
           </div>
           {/*  */}
           <div id="about">
               <div className="max-w-4xl mx-auto">
                   <div className="flex justify-center" 
                   data-aos="fade-up"
                   data-aos-offset="200"
                   data-aos-duration="1000" >
                       <h1 className="text-center font-semibold text-gray-600 text-3xl">Ketahui Polusi Dilingkungan Anda</h1>
                   </div>
                   <div className="flex lg:flex-row md:flex-row flex-col-reverse justify-center my-10">
                       <div className=" p-5 rounded-xl lg:w-11/12 w-full" 
                       data-aos="fade-up"
                       data-aos-offset="400"
                       data-aos-duration="1500">
                           <p className="font-light text-gray-500 lg:text-right text-justify leading-6">Dimasa pandemic berdampak pada kegiatan pasar khususnya pasar tradisional menjadi sepi, namun meningkatkan pasar digital walaupun adanya hambatan pada pengiriman dikarenakan pembatasan aktifitas oleh pemerintah yang berpengaruh pada para usaha kurir yang mengantarkan produk yang dipasarkan.<br />
                            </p>
                       </div>
                       <div className="mx-4 flex justify-center"
                       data-aos="fade-up"
                       data-aos-offset="300"
                       data-aos-duration="1500">
                           <img src={imgAbout} alt="alat instrument udara smk nkri binjai" className="lg:w-2/3 w-2/3" />
                       </div>
             
                   </div>
                   {/*  */}
                   <div className="flex lg:flex-row md:flex-row flex-col justify-center my-10 ">
                       <div className="mx-4 flex justify-center"
                       data-aos="fade-up"
                       data-aos-offset="300"
                       data-aos-duration="1500">
                           <img src={imgAbout2} alt="alat instrument udara smk nkri binjai " className="lg:w-2/3 w-2/3" />
                       </div>
                       <div className="p-5 rounded-xl lg:w-11/12 w-full lg:px-0 px-4"
                       data-aos="fade-up"
                       data-aos-offset="400"
                       data-aos-duration="1500">
                           <p className="font-light text-gray-500 lg:text-left text-justify leading-6">Dampak baiknya dari pandemic adalah tingkat polusi udara dijalan menurun akibat pembatasan aktifitas oleh pemerintah. Hal ini menciptakan pasar  lebih berfokus pada innovasi pasar digitial yang tanpa kita sadari berpengaruh baik pada polusi udara yang menurun. .<br />
                            </p>
                       </div>
                   </div>
                
               </div>
           </div>
           {/*  */}
           <div>
               <div className="max-w-4xl mx-auto py-10">
                   <div className="lg:flex-row flex-col">
                       <div className="flex justify-center">
                       <a href="https://api.whatsapp.com/send?phone=6289533221789&text=Halo%20SMK NKRI%20" className="hvr-icon-forward lg:w-3/12  my-4"
                       data-aos="fade-up"
                       data-aos-offset="350"
                       data-aos-duration="1500">
                        <div className="flex bg-orange-500 py-4 px-4 rounded-full text-white justify-around shadow-md">
                            <small>Konsultasi dengan kami</small>
                            <ChevronRightIcon className="h-5 w-5 bg-orange-600 rounded-full hvr-icon"/>
                        </div>
                       </a>
                       </div>
                   </div>
               </div>
           </div>
           {/*  */}
           <div className="bg-gradient-to-r from-orange-200 to-orange-300 py-8" >
            <div className="max-w-4xl mx-auto" id="layanan">
                <div className="flex justify-center mb-10 mt-10 item-aos" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="300">
                    <h1 className="font-semibold text-3xl text-gray-600 text-center">Manfaat dan Kegunaan Instrumen ini</h1>
                </div>
                <div className="max-w-4xl mx-auto">
                   <div className="flex lg:flex-row flex-col mx-8">
                       <div className="lg:w-11/12 my-2 shadow p-4 mx-2 rounded-lg bg-white flex flex-col items-center"
                       data-aos="fade-right"
                       data-aos-offset="400"
                       data-aos-duration="2000">
                          <img src={imgKeuntungan1} alt="alat instrument udara smk nkri binjai" className="lg:w-2/3 w-2/3" />
                           <p className="text-center font-extralight text-gray-700">Mendapatkan standar kesehatan ruangan </p>
                           
                       </div>
                       <div className="lg:w-11/12 my-2 shadow p-4 mx-2 rounded-lg bg-white flex flex-col items-center"
                       data-aos="fade-right"
                       data-aos-offset="300"
                       data-aos-duration="2000">
                         <img src={imgKeuntungan2} alt="alat instrument udara smk nkri binjai" className="lg:w-2/3 w-2/3" />
                           <p className="text-center font-extralight text-gray-700">Mencegah dan menanggulangi pencemaran Udara</p>
                       </div>
                   </div>
                   <div className="flex lg:flex-row flex-col mx-8">
                       <div className="lg:w-11/12 my-2 shadow p-4 mx-2 rounded-lg bg-white flex flex-col items-center"
                       data-aos="fade-right"
                       data-aos-offset="300"
                       data-aos-duration="2000">
                         <img src={imgKeuntungan3} alt="alat instrument udara smk nkri binjai" className="lg:w-2/3 w-2/3" />
                           <p className="text-center font-extralight text-gray-700">Menempatkan alat sirkulasi udara dengan tepat</p>
                       </div>
                       <div className="lg:w-11/12 my-2 shadow p-4 mx-2 rounded-lg bg-white flex flex-col items-center"
                       data-aos="fade-right"
                       data-aos-offset="300"
                       data-aos-duration="2000">
                         <img src={imgKeuntungan4} alt="alat instrument udara smk nkri binjai" className="lg:w-2/3 w-2/3" />
                           <p className="text-center font-extralight text-gray-700">Penyampaian pembelajaran pendidik dapat dengan mudah diserap oleh peserta didik </p>
                       </div>
                   </div>
               </div>
            </div>
           </div>
           {/*  */}
           <div id="kelebihan">
               <div className="flex flex-col my-4">
                   <h1 className="text-center text-gray-600 text-3xl my-4"
                   data-aos="fade-up"
                   data-aos-offset="200"
                   data-aos-duration="1500">Kenapa harus <span className="text-orange-500">Alat instrument udara sehat SMK NKRI Binjai?</span></h1>
                   <div className="flex w-full justify-center"
                   data-aos="fade-up"
                   data-aos-offset="300"
                   data-aos-duration="2000"> 
                       <p className="text-center font-light text-gray-500 mx-20 w-7/12">alat ini dapat memberikan beberapa keuntungan dan kemudahan</p>
                   </div>
               </div>
               
               <div className="max-w-4xl mx-auto">
                   <div className="flex lg:flex-row flex-col mx-8">
                       <div className="lg:w-11/12 my-2 shadow p-4 mx-2 rounded-lg bg-gradient-to-r from-orange-400 to-orange-300"
                       data-aos="fade-right"
                       data-aos-offset="400"
                       data-aos-duration="2000">
                           <h1 className="font-semibold text-white">Merakit</h1>
                           <p className="text-left font-extralight text-gray-100">Mendapatkan keuntungan bersama merakit alat instrumen ini</p>
                       </div>
                       <div className="lg:w-11/12 my-2 shadow p-4 mx-2 rounded-lg bg-gradient-to-r from-orange-400 to-orange-300"
                       data-aos="fade-right"
                       data-aos-offset="300"
                       data-aos-duration="2000">
                           <h1 className="font-semibold text-white">Berpenghasilan</h1>
                           <p className="text-left font-extralight text-gray-100">Berkesempatan mendapatkan penghasilan, Serta dapat menjaga lingkungan </p>
                       </div>
                   </div>
                   
               </div>
           </div>
           {/*  */}
           <div className="bg-white">
            {/* waves */}
           {/* <svg height="100%" width="100%" id="svg" viewBox="0 0 1440 600" xmlns="http://www.w3.org/2000/svg" class="bg-white transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient"><stop offset="5%" stop-color="#3b82f6ff"></stop><stop offset="95%" stop-color="#93c5fdff"></stop></linearGradient></defs><path d="M 0,600 C 0,600 0,300 0,300 C 116.80000000000001,323.20000000000005 233.60000000000002,346.40000000000003 418,331 C 602.4,315.59999999999997 854.4000000000001,261.6 1036,250 C 1217.6,238.4 1328.8,269.2 1440,300 C 1440,300 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150"></path></svg> */}
           {/* end waves */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-300 py-6" id="kontak">
                <div className="max-w-2xl mx-auto " >
                        <div className="flex justify-center"
                        data-aos="fade-up"
                        data-aos-offset="100"
                        data-aos-duration="2000">
                            <h1 className="text-white font-semibold text-2xl ">Tertarik menjadi mitra kami ?</h1>
                        </div>
                        <p className="text-white font-light text-center my-2"
                        data-aos="fade-up"
                        data-aos-offset="150"
                        data-aos-duration="2000">Yuk Konsultasi dengan Tim kami</p>
                        <div className="flex justify-center ">
                        <a href="https://api.whatsapp.com/send?phone=6289533221789&text=Halo%20SMK NKRI%20" className="hvr-icon-forward lg:w-4/12  my-4"
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-duration="2000">
                            <div className="flex bg-orange-500 py-4 px-4 rounded-full text-white justify-around shadow-md">
                                <small>Konsultasi disini</small>
                                <ChevronRightIcon className="h-5 w-5 bg-orange-600 rounded-full hvr-icon"/>
                            </div>
                        </a>
                        </div>
                </div>
            </div>
           </div>

           {/* footer */}

           <div className="flex lg:flex-row flex-col justify-between max-w-5xl mx-auto py-10"> 
               <div className="ml-4 lg:ml-0">
                       <img src={logo} alt="smk nkri binjai" className="p-8" />
               </div>
               <div className="ml-4 lg:ml-0 w-2/5">
                   <div className="text-gray-400 my-4">LINKS</div>
                   <div className="flex flex-col">
                       <a className="font-light text-gray-500 hover:text-gray-700" href="#">FAQ</a>
                       <a className="font-light text-gray-500 hover:text-gray-700" href="mailto:help@udarasehatnkri.budiutomo.sch.id">Help</a>
                       <a className="font-light text-gray-500 hover:text-gray-700" href="mailto:support@udarasehatnkri.budiutomo.sch.id">Support</a>
                   </div>
               </div>
               <div className="ml-4 lg:ml-0 w-2/5">
                   <div className="text-gray-400 my-4">LEGAL</div>
                   <div className="flex flex-col">
                       <a className="font-light text-gray-500 hover:text-gray-700" href="#">Terms</a>
                       <a className="font-light text-gray-500 hover:text-gray-700" href="#">Privacy</a>
                   </div>
               </div>
               <div className="ml-4 lg:ml-0 w-2/5">
                   <div className="text-gray-400 my-4">SOCIAL</div>
                   <div className="flex flex-col">
                       <a className="font-light text-gray-500 hover:text-gray-700" href="#">Facebook</a>
                       <a className="font-light text-gray-500 hover:text-gray-700" href="#">Linkedin</a>
                       <a className="font-light text-gray-500 hover:text-gray-700" href="#">Twitter</a>
                   </div>
               </div>
               <div className="ml-4 lg:ml-0 w-2/5">
                   <div className="text-gray-400 my-4">COMPANY</div>
                   <div className="flex flex-col">
                       <a className="font-light text-gray-500 hover:text-gray-700" href="#">Official Blog</a>
                       <a className="font-light text-gray-500 hover:text-gray-700" href="#">About</a>
                       <a className="font-light text-gray-500 hover:text-gray-700" href="#">Contact</a>
                   </div>
               </div>
           </div>
           <div className="max-w-5xl lg:mx-auto mx-4 py-4 ">
            <div className="flex lg:flex-row flex-col justify-between font-extralight text-gray-500">
                <div>udarasehatnkri.budiutomo.sch.id</div>
                <div>&copy; 2022 Korps Taruna Ayrcraft SMK NKRI Binjai is Made with Love</div>
            </div>
           </div>
           {/*  */}
        </div>
    );
}

export default Home;