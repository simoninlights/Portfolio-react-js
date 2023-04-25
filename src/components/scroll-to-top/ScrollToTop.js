import "./style.css";

const ScrollToTop = () => {
    return (
        <button className="scroll-to-top">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.0" widtd="18pt" height="23pt"
                viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none">
                    <path
                        d="M1377 5110 c-142 -36 -255 -163 -273 -306 -7 -60 9 -151 38 -209 13 -26 368 -388 1016 -1037 l997 -998 -997 -997 c-648 -650 -1003 -1012 -1016 -1038 -92 -186 -15 -405 173 -492 51 -23 73 -28 145 -27 160 0 52 -96 1342 1192 778 777 1155 1160 1172 1191 39 73 53 158 37 234 -7 34 -24 83 -37 108 -17 31 -394 414 -1172 1191 -1022 1020 -1153 1147 -1200 1167 -61 25 -168 35 -225 21z" />
                </g>
            </svg>
        </button>
    );
}

export default ScrollToTop;