import React from "react"

const Header = () => {
    return(
<header>
    <div className="firstHeader">
    <div className='leftHead'>
        <h2>Welcome</h2>
        <p>Your current sales auction and activity</p>
    </div>
    <div className='righHead'>
    <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.35419 20C8.05933 20.6224 8.98557 21 10 21C11.0145 21 11.9407 20.6224 12.6458 20M16 7C16 5.4087 15.3679 3.88258 14.2427 2.75736C13.1174 1.63214 11.5913 1 10 1C8.40872 1 6.8826 1.63214 5.75738 2.75736C4.63216 3.88258 4.00002 5.4087 4.00002 7C4.00002 10.0902 3.22049 12.206 2.34968 13.6054C1.61515 14.7859 1.24788 15.3761 1.26134 15.5408C1.27626 15.7231 1.31488 15.7926 1.46179 15.9016C1.59448 16 2.19261 16 3.38887 16H16.6112C17.8074 16 18.4056 16 18.5382 15.9016C18.6852 15.7926 18.7238 15.7231 18.7387 15.5408C18.7522 15.3761 18.3849 14.7859 17.6504 13.6054C16.7795 12.206 16 10.0902 16 7Z" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> <span className="numberTwo">2</span>
    </div>
    </div>
    <div className="banner">
        <div className="Bg"></div>
        <div className="mainBanner">
        <div className="mainBannerFlex">
            <div className="bigCircle"></div>
            <p>Starts in 3days: 2hours : 24minutes</p>
            <div className="smallLi"><span className="popOne">Not Live</span><span className="popTwo">Layer Auction</span></div>
        </div>
        <button> <svg className="thumbsup" width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.83332 18.3333V9.16666M1.66666 10.8333V16.6667C1.66666 17.5871 2.41285 18.3333 3.33332 18.3333H14.5219C15.7558 18.3333 16.8052 17.433 16.9928 16.2135L17.8902 10.3801C18.1232 8.86574 16.9515 7.49999 15.4193 7.49999H12.5C12.0398 7.49999 11.6667 7.12689 11.6667 6.66666V3.72152C11.6667 2.58665 10.7467 1.66666 9.61179 1.66666C9.3411 1.66666 9.09581 1.82607 8.98587 2.07343L6.05327 8.67177C5.91952 8.97271 5.62109 9.16666 5.29176 9.16666H3.33332C2.41285 9.16666 1.66666 9.91285 1.66666 10.8333Z" stroke="#344054" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
Accept Invite</button>
        </div>
    </div>
</header>
    )
}

export default Header