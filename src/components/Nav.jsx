import React from 'react'
import logo from '../assets/images/logo.png'
const Nav = () => {
    return (
        <nav className='py-9'>
            <div className="flex items-center justify-between">
                <img src={logo} alt="logo" />
                <div className='flex items-center'>
                    <ul className='flex items-center gap-8 mr-5'>
                        <li><a className=' font-Montserrat text-base font-semibold text-white' href="http://twitter.com">ICO</a></li>
                        <li><a className=' font-Montserrat text-base font-semibold text-white' href="http://twitter.com">WHITEPAPER</a></li>
                    </ul>
                    <div className='flex items-center gap-3'>
                        <a className='bg-white h-9 w-9 flex group duration-500 hover:bg-gradient-to-r hover:from-[#FFBA3B] hover:from-15% hover:to-[#FF983B] hover:scale-[0.9] rounded-full justify-center items-center' href="http://discord.com" target='_plank'><span><svg className='fill-[url(#paint0_linear_0_44)] duration-300 group-hover:fill-white' xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none"><path d="M16.3855 4.55173C15.2813 4.037 14.0858 3.6634 12.8405 3.44755C12.8295 3.4472 12.8187 3.44925 12.8086 3.45355C12.7986 3.45785 12.7896 3.46431 12.7824 3.47245C12.6329 3.74642 12.4586 4.10342 12.3423 4.37739C11.0215 4.17813 9.67819 4.17813 8.35732 4.37739C8.24109 4.09511 8.06675 3.74642 7.90901 3.47245C7.9007 3.45585 7.8758 3.44755 7.85089 3.44755C6.60557 3.6634 5.41837 4.037 4.30588 4.55173C4.29758 4.55173 4.28928 4.56003 4.28098 4.56833C2.0228 7.9473 1.40014 11.2349 1.70732 14.4894C1.70732 14.506 1.71562 14.5226 1.73223 14.5309C3.22661 15.6268 4.66288 16.2909 6.08254 16.7309C6.10744 16.7392 6.13235 16.7309 6.14065 16.7143C6.47274 16.2577 6.77161 15.7762 7.02898 15.2698C7.04558 15.2366 7.02898 15.2034 6.99577 15.1951C6.52255 15.0124 6.07424 14.7966 5.63422 14.5475C5.60102 14.5309 5.60102 14.4811 5.62592 14.4562C5.71724 14.3897 5.80857 14.315 5.89989 14.2486C5.9165 14.232 5.9414 14.232 5.95801 14.2403C8.81394 15.5437 11.894 15.5437 14.7167 14.2403C14.7333 14.232 14.7583 14.232 14.7749 14.2486C14.8662 14.3233 14.9575 14.3897 15.0488 14.4645C15.082 14.4894 15.082 14.5392 15.0405 14.5558C14.6088 14.8132 14.1522 15.0207 13.679 15.2034C13.6458 15.2117 13.6375 15.2532 13.6458 15.2781C13.9114 15.7845 14.2103 16.266 14.5341 16.7226C14.559 16.7309 14.5839 16.7392 14.6088 16.7309C16.0368 16.2909 17.473 15.6268 18.9674 14.5309C18.984 14.5226 18.9923 14.506 18.9923 14.4894C19.3576 10.7285 18.3863 7.46578 16.4187 4.56833C16.4104 4.56003 16.4021 4.55173 16.3855 4.55173V4.55173ZM7.46069 12.5052C6.60557 12.5052 5.89159 11.7165 5.89159 10.7451C5.89159 9.77377 6.58897 8.98506 7.46069 8.98506C8.34072 8.98506 9.03809 9.78207 9.02979 10.7451C9.02979 11.7165 8.33241 12.5052 7.46069 12.5052ZM13.2473 12.5052C12.3922 12.5052 11.6782 11.7165 11.6782 10.7451C11.6782 9.77377 12.3755 8.98506 13.2473 8.98506C14.1273 8.98506 14.8247 9.78207 14.8164 10.7451C14.8164 11.7165 14.1273 12.5052 13.2473 12.5052Z" /><defs><linearGradient id="paint0_linear_0_44" x1="10.3464" y1="2.24996" x2="10.3464" y2="15.3463" gradientUnits="userSpaceOnUse"><stop stop-color="#FFBA3B" /><stop offset="0.5315" stop-color="#FFA53B" /><stop offset="1" stop-color="#FF983B" /></linearGradient></defs></svg></span></a>
                        <a className='bg-white h-9 w-9 flex group duration-500 hover:bg-gradient-to-r hover:from-[#FFBA3B] hover:from-15% hover:to-[#FF983B] hover:scale-[0.9] rounded-full justify-center items-center' href="http://twitter.com" target='_plank'><span><svg className='fill-[url(#paint0_linear_0_48)] duration-300 group-hover:fill-white' xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none"><path d="M18.7393 5.54247C18.1439 5.79932 17.4959 5.98417 16.8285 6.05617C17.5214 5.6445 18.0403 4.99414 18.2879 4.22711C17.6376 4.61391 16.9253 4.88515 16.1825 5.02878C15.872 4.69688 15.4966 4.43247 15.0794 4.25203C14.6623 4.07159 14.2125 3.97898 13.758 3.97999C11.9192 3.97999 10.4404 5.47048 10.4404 7.29954C10.4404 7.55639 10.4716 7.81323 10.5221 8.06035C7.76883 7.91636 5.31321 6.60099 3.68068 4.58708C3.38321 5.09516 3.22733 5.67367 3.22925 6.26242C3.22925 7.41434 3.81494 8.43006 4.70807 9.02742C4.18173 9.00669 3.66773 8.86202 3.20785 8.60518V8.64604C3.20785 10.2591 4.34809 11.5959 5.86777 11.9033C5.58243 11.9774 5.2889 12.0154 4.9941 12.0162C4.77812 12.0162 4.57381 11.9948 4.36755 11.9656C4.78784 13.281 6.01176 14.2364 7.46917 14.2675C6.32893 15.1606 4.9007 15.686 3.34989 15.686C3.07164 15.686 2.81479 15.6763 2.54822 15.6451C4.01925 16.5888 5.76464 17.1337 7.64429 17.1337C13.7464 17.1337 17.0854 12.0784 17.0854 7.69065C17.0854 7.54666 17.0854 7.40267 17.0756 7.25868C17.7216 6.78585 18.2879 6.20016 18.7393 5.54247Z" /><defs><linearGradient id="paint0_linear_0_48" x1="10.6394" y1="2.79444" x2="10.6394" y2="15.7595" gradientUnits="userSpaceOnUse"><stop stop-color="#FFBA3B" /><stop offset="0.5315" stop-color="#FFA53B" /><stop offset="1" stop-color="#FF983B" /></linearGradient></defs></svg></span></a>
                        <a className='bg-white h-9 w-9 flex group duration-500 hover:bg-gradient-to-r hover:from-[#FFBA3B] hover:from-15% hover:to-[#FF983B] hover:scale-[0.9] rounded-full justify-center items-center' href="http://telegram.com" target='_plank'><span><svg className='fill-[url(#paint0_linear_0_52)] duration-300 group-hover:fill-white' xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none"><path d="M18.845 3.96463L16.2143 16.3711C16.0156 17.2466 15.4982 17.4645 14.7628 17.0523L10.7542 14.0984L8.82018 15.9589C8.60598 16.1731 8.42728 16.3518 8.01446 16.3518L8.30275 12.2697L15.7317 5.55677C16.0549 5.2691 15.6613 5.10908 15.2298 5.39737L6.04561 11.1806L2.09172 9.94278C1.23183 9.67442 1.21626 9.08289 2.27105 8.67007L17.736 2.71184C18.4521 2.44348 19.0785 2.87124 18.845 3.96525V3.96463Z" /><defs><linearGradient id="paint0_linear_0_52" x1="10.1736" y1="1.31637" x2="10.1736" y2="15.7263" gradientUnits="userSpaceOnUse"><stop stop-color="#FFBA3B" /><stop offset="0.5315" stop-color="#FFA53B" /><stop offset="1" stop-color="#FF983B" /></linearGradient></defs></svg></span></a>
                        <a className='bg-white h-9 w-9 flex group duration-500 hover:bg-gradient-to-r hover:from-[#FFBA3B] hover:from-15% hover:to-[#FF983B] hover:scale-[0.9] rounded-full justify-center items-center' href="http://linkden.com" target='_plank'><span><svg className='fill-[url(#paint0_linear_0_44)] duration-300 group-hover:fill-white' xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none"><path d="M16.3855 4.55173C15.2813 4.037 14.0858 3.6634 12.8405 3.44755C12.8295 3.4472 12.8187 3.44925 12.8086 3.45355C12.7986 3.45785 12.7896 3.46431 12.7824 3.47245C12.6329 3.74642 12.4586 4.10342 12.3423 4.37739C11.0215 4.17813 9.67819 4.17813 8.35732 4.37739C8.24109 4.09511 8.06675 3.74642 7.90901 3.47245C7.9007 3.45585 7.8758 3.44755 7.85089 3.44755C6.60557 3.6634 5.41837 4.037 4.30588 4.55173C4.29758 4.55173 4.28928 4.56003 4.28098 4.56833C2.0228 7.9473 1.40014 11.2349 1.70732 14.4894C1.70732 14.506 1.71562 14.5226 1.73223 14.5309C3.22661 15.6268 4.66288 16.2909 6.08254 16.7309C6.10744 16.7392 6.13235 16.7309 6.14065 16.7143C6.47274 16.2577 6.77161 15.7762 7.02898 15.2698C7.04558 15.2366 7.02898 15.2034 6.99577 15.1951C6.52255 15.0124 6.07424 14.7966 5.63422 14.5475C5.60102 14.5309 5.60102 14.4811 5.62592 14.4562C5.71724 14.3897 5.80857 14.315 5.89989 14.2486C5.9165 14.232 5.9414 14.232 5.95801 14.2403C8.81394 15.5437 11.894 15.5437 14.7167 14.2403C14.7333 14.232 14.7583 14.232 14.7749 14.2486C14.8662 14.3233 14.9575 14.3897 15.0488 14.4645C15.082 14.4894 15.082 14.5392 15.0405 14.5558C14.6088 14.8132 14.1522 15.0207 13.679 15.2034C13.6458 15.2117 13.6375 15.2532 13.6458 15.2781C13.9114 15.7845 14.2103 16.266 14.5341 16.7226C14.559 16.7309 14.5839 16.7392 14.6088 16.7309C16.0368 16.2909 17.473 15.6268 18.9674 14.5309C18.984 14.5226 18.9923 14.506 18.9923 14.4894C19.3576 10.7285 18.3863 7.46578 16.4187 4.56833C16.4104 4.56003 16.4021 4.55173 16.3855 4.55173V4.55173ZM7.46069 12.5052C6.60557 12.5052 5.89159 11.7165 5.89159 10.7451C5.89159 9.77377 6.58897 8.98506 7.46069 8.98506C8.34072 8.98506 9.03809 9.78207 9.02979 10.7451C9.02979 11.7165 8.33241 12.5052 7.46069 12.5052ZM13.2473 12.5052C12.3922 12.5052 11.6782 11.7165 11.6782 10.7451C11.6782 9.77377 12.3755 8.98506 13.2473 8.98506C14.1273 8.98506 14.8247 9.78207 14.8164 10.7451C14.8164 11.7165 14.1273 12.5052 13.2473 12.5052Z" /><defs><linearGradient id="paint0_linear_0_44" x1="10.3464" y1="2.24996" x2="10.3464" y2="15.3463" gradientUnits="userSpaceOnUse"><stop stop-color="#FFBA3B" /><stop offset="0.5315" stop-color="#FFA53B" /><stop offset="1" stop-color="#FF983B" /></linearGradient></defs></svg></span></a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav
