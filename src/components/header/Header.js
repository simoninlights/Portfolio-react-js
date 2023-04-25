import "./style.css";

const Header = () => {
    return ( 
        <header className="header">
        <div className="header__wrapper">
            <h1 className="header__title"><strong>Hi, my name is <em>Semyon</em></strong><br/>
                a frontend developer</h1>
            <div className="header__text">
                <p>with passion for learning and creating.</p>
            </div>
            <a href="#!" className="btn">Download CV</a>
        </div>
        <div className="header-bg">
            <svg className="header-svg-abstract" width="628" height="628" viewBox="0 0 628 628" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.25">
                <rect x="42.7188" y="157.376" width="443" height="443" transform="rotate(-15 42.7188 157.376)" stroke="url(#paint0_linear_2207_271)" strokeOpacity="0.7"/>
                <rect x="11.4252" y="232.925" width="443" height="443" transform="rotate(-30 11.4252 232.925)" stroke="url(#paint1_linear_2207_271)" strokeOpacity="0.7"/>
                <rect x="0.75154" y="314" width="443" height="443" transform="rotate(-45 0.75154 314)" stroke="url(#paint2_linear_2207_271)" strokeOpacity="0.7"/>
                <rect x="11.4252" y="395.075" width="443" height="443" transform="rotate(-60 11.4252 395.075)" stroke="url(#paint3_linear_2207_271)" strokeOpacity="0.7"/>
                <rect x="42.7188" y="470.624" width="443" height="443" transform="rotate(-75 42.7188 470.624)" stroke="url(#paint4_linear_2207_271)" strokeOpacity="0.7"/>
                </g>
                <defs>
                <linearGradient id="paint0_linear_2207_271" x1="264.106" y1="157.022" x2="264.106" y2="591.522" gradientUnits="userSpaceOnUse">
                <stop stopColor="white"/>
                <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint1_linear_2207_271" x1="232.742" y1="232.742" x2="232.742" y2="667.242" gradientUnits="userSpaceOnUse">
                <stop stopColor="white"/>
                <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint2_linear_2207_271" x1="222.044" y1="314" x2="222.044" y2="748.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="white"/>
                <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint3_linear_2207_271" x1="232.742" y1="395.258" x2="232.742" y2="829.758" gradientUnits="userSpaceOnUse">
                <stop stopColor="white"/>
                <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint4_linear_2207_271" x1="264.106" y1="470.978" x2="264.106" y2="905.478" gradientUnits="userSpaceOnUse">
                <stop stopColor="white"/>
                <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                </defs>
                </svg>
        </div>
    </header>
     );
}
 
export default Header;