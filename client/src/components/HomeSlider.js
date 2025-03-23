import React from "react";
import esilehepilt from "../assets/Elp2.png";
function HomeSlider() {
  return (
    <div
      className="d-flex  justify-content-center"
      style={{
        backgroundImage: `url(${esilehepilt})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "50rem",
      }}
    >
      
      <div style={{ marginTop: "45rem"}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width= "15rem"
          height="4rem"
          viewBox="0 0 197 39"
          fill="none"
        >
          <g filter="url(#filter0_d_403_575)">
            <rect
              x="4"
              width="189"
              height="31"
              rx="15.5"
              fill="#F6F6F6"
              fill-opacity="0.5"
              shape-rendering="crispEdges"
            />
          </g>
          <g filter="url(#filter1_d_403_575)">
            <circle cx="98" cy="16" r="9" fill="#939393" />
            <circle cx="98" cy="16" r="8.5" stroke="#858585" />
          </g>
          <circle cx="144" cy="16" r="7" fill="#939393" />
          <circle cx="52" cy="16" r="7" fill="#939393" />
          <circle cx="121" cy="16" r="7" fill="#939393" />
          <circle cx="75" cy="16" r="7" fill="#939393" />
          <path
            d="M170.813 13.4408C172.727 14.6106 172.727 17.39 170.814 18.56L166.816 21.0045C164.817 22.2267 162.251 20.7882 162.251 18.4452L162.25 13.5569C162.25 11.2139 164.816 9.77503 166.815 10.9969L170.813 13.4408Z"
            fill="#939393"
          />
          <path
            d="M25.187 18.5597C23.2733 17.3899 23.2733 14.6104 25.187 13.4405L29.1851 10.9963C31.1842 9.77428 33.7499 11.213 33.7499 13.556V18.4443C33.7499 20.7873 31.1842 22.226 29.1851 21.0039L25.187 18.5597Z"
            fill="#939393"
          />
          <defs>
            <filter
              id="filter0_d_403_575"
              x="0"
              y="0"
              width="197"
              height="39"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.396078 0 0 0 0 0.396078 0 0 0 0 0.396078 0 0 0 0.35 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_403_575"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_403_575"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d_403_575"
              x="85"
              y="7"
              width="26"
              height="26"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_403_575"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_403_575"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}
export default HomeSlider;
