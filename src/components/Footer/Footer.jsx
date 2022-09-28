import React from "react";
import "./Footer.css";
import { BsTwitter, BsYoutube, BsLinkedin, BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div>
      <div className="outerDiv">
        <div style={{ padding: "30px 22px" }}>
          <div style={{ marginBottom: "2rem" }}>
            <svg
              style={{ width: "160px", height: "28px" }}
              viewBox="0 0 167 33"
              fill="#E57CD8"
            >
              <defs>
                <mask id="prefix__a" fill="#fff">
                  <path d="M.093.352h19.671v30.56H.094z"></path>
                </mask>
                <mask id="prefix__b" fill="#fff">
                  <path d="M.054.352h20.41v30.56H.054z"></path>
                </mask>
                <mask id="prefix__c" fill="#fff">
                  <path d="M.288.176H10.33v26.141H.288z"></path>
                </mask>
                <mask id="prefix__d" fill="#fff">
                  <path d="M0 .176h14.934v26.142H0z"></path>
                </mask>
                <mask id="prefix__e" fill="#fff">
                  <path d="M.215.045H14.5v22.34H.215z"></path>
                </mask>
              </defs>
              <path d="M103.51 25.802a10.27 10.27 0 01-1.36.084c-1.515 0-2.651-.35-3.409-1.05-.757-.702-1.136-1.924-1.136-3.665V10.586h-3.614V8.754h3.614V4.208h2.1v4.546h4.992v1.832h-4.992v10.686c0 .905.184 1.578.551 2.02.367.44 1.033.66 1.997.66.528 0 .987-.021 1.377-.067.39-.045.78-.102 1.17-.17v1.833c-.436.113-.866.197-1.29.254"></path>
              <path
                d="M19.761 26.378c-.049-1.438-.48-2.962-1.577-3.966-1.226-1.12-3-1.635-4.648-1.635H6.19c-.725 0-1.369-.537-1.369-1.2 0-.557.386-1.024.91-1.16-.002 0 .123-.032.258-.074 1.315.622 2.799.903 4.28.903 2.266 0 4.537-.656 6.2-2.188 1.618-1.49 2.374-3.576 2.374-5.709 0-2.134-.756-4.22-2.375-5.71A7.532 7.532 0 0014.9 4.533c1.56.356 3.17-.085 4.28-1.97L16.058.353l-2.606 3.573a10.55 10.55 0 00-3.184-.473c-2.265 0-4.537.656-6.199 2.188-1.619 1.49-2.375 3.575-2.375 5.709 0 2.134.756 4.218 2.375 5.71.14.13.286.252.435.37l-.303.158c-.599.33-1.33.857-2.054 1.617C1.12 20.28.094 21.894.094 24.038c0 0-.143 4.578 5.192 4.578h3.865c.889 0 1.795.558 1.795 1.434 0 .317-.095.614-.258.862h7.39c1.119-1.225 1.737-2.962 1.683-4.534M8.958 9.938c.365-.36.865-.515 1.363-.515s.997.155 1.362.515c.356.35.522.841.522 1.343s-.166.992-.522 1.343c-.365.36-.864.515-1.362.515-.498 0-.998-.154-1.363-.515-.356-.35-.522-.84-.522-1.343 0-.502.166-.992.522-1.343"
                mask="url(#prefix__a)"
                transform="translate(36.876 1.913)"
              ></path>
              <path
                d="M20.46 26.378c-.05-1.438-.48-2.962-1.578-3.966-1.225-1.12-2.999-1.635-4.647-1.635l-8.529-.061c-.537 0-.948-.333-.948-.824 0-.405.204-1.009.718-1.11a10.56 10.56 0 003.152.464c2.266 0 4.537-.656 6.2-2.188 1.618-1.49 2.374-3.576 2.374-5.709 0-2.134-.756-4.22-2.374-5.71a7.532 7.532 0 00-1.567-1.107c1.56.356 3.17-.085 4.279-1.97L14.418.353l-2.605 3.573a10.557 10.557 0 00-3.185-.473c-2.265 0-4.536.656-6.199 2.188C.81 7.13.054 9.215.054 11.349c0 2.134.757 4.218 2.375 5.71.48.441 1.01.81 1.576 1.111-.374.28-.767.623-1.16 1.034C1.82 20.28.793 21.894.793 24.038c0 0-.142 4.578 5.193 4.578H9.85c.889 0 1.795.558 1.795 1.434 0 .317-.095.614-.258.862h7.39c1.119-1.225 1.738-2.962 1.683-4.534M7.37 9.938c.365-.36.864-.515 1.363-.515.498 0 .997.155 1.363.515.355.35.522.841.522 1.343s-.167.992-.522 1.343c-.366.36-.865.515-1.363.515-.499 0-.998-.154-1.363-.515-.356-.35-.522-.84-.522-1.343 0-.502.166-.992.522-1.343"
                mask="url(#prefix__b)"
                transform="translate(57.22 1.913)"
              ></path>
              <path
                d="M10.33 25.7v-6.833c-1.592.199-2.146-.907-2.146-2.006V.176H.288v17.932c0 2.227.336 4.084 1.151 5.252 1.253 1.779 2.947 2.943 6.317 2.957.622-.027 1.66-.148 2.574-.617"
                mask="url(#prefix__c)"
                transform="translate(76.294 .242)"
              ></path>
              <path d="M34.297 8.345c-2.04-2.05-4.823-2.929-7.602-2.929-2.778 0-5.563.88-7.6 2.929-1.986 1.996-2.913 4.787-2.913 7.643 0 2.857.927 5.647 2.912 7.643 2.038 2.05 4.823 2.928 7.601 2.928 2.779 0 5.563-.878 7.602-2.928 1.984-1.996 2.912-4.787 2.912-7.643s-.928-5.648-2.912-7.643m-5.884 9.287c-.472.466-1.117.664-1.76.664-.644 0-1.289-.198-1.76-.664-.46-.453-.675-1.087-.675-1.735 0-.649.214-1.282.674-1.735.472-.465 1.117-.665 1.76-.665.644 0 1.29.2 1.761.665.46.453.675 1.086.675 1.735 0 .648-.215 1.282-.675 1.735"></path>
              <path
                d="M13.335 18.894c-1.314 0-1.851-.396-2.337-1.004-.314-.397-.47-.98-.47-1.736v-3.537h4.406v-6.34h-4.407V.176H4.894v2.28c0 2.527-1.953 4.576-4.362 4.576A4.29 4.29 0 010 6.997v5.62h2.958v5.648c0 2.222.407 3.935 1.22 5.101 1.257 1.785 2.65 2.952 6.051 2.952 1.972 0 3.623-.447 4.705-1.043v-6.643c-.408.154-.96.262-1.6.262"
                mask="url(#prefix__d)"
                transform="translate(0 .242)"
              ></path>
              <path d="M111.889 9.232c.918-.702 2.03-1.053 3.339-1.053.482 0 1.044.058 1.687.17v2.172a7.246 7.246 0 00-.895-.136 10.122 10.122 0 00-.827-.034c-1.01 0-1.853.192-2.53.577a4.564 4.564 0 00-1.635 1.56c-.413.656-.706 1.436-.878 2.341a15.462 15.462 0 00-.258 2.884v7.837h-2.1V8.587h2.031v3.868c.46-1.448 1.148-2.522 2.066-3.223M119.46 10.656a4.602 4.602 0 011.307-1.306c.551-.373 1.217-.661 1.997-.865.78-.204 1.71-.306 2.789-.306 2.294 0 3.993.52 5.094 1.561 1.102 1.04 1.653 2.602 1.653 4.682V25.55h-2.1v-3.63c-.528 1.29-1.348 2.273-2.462 2.951-1.113.679-2.392 1.019-3.838 1.019-.941 0-1.773-.131-2.496-.39-.723-.26-1.325-.617-1.807-1.07a4.477 4.477 0 01-1.102-1.628 5.443 5.443 0 01-.378-2.035c0-1.584.521-2.794 1.566-3.63 1.044-.838 2.358-1.335 3.942-1.494l5.714-.542c.574-.068.86-.305.86-.713v-.61c0-1.154-.355-2.065-1.066-2.731-.712-.667-1.87-1.001-3.477-1.001-2.915 0-4.602 1.063-5.06 3.189l-1.86-.985a5.88 5.88 0 01.723-1.594zm4.474 6.92c-1.308.137-2.237.504-2.788 1.104-.55.6-.826 1.295-.826 2.087 0 .972.327 1.747.98 2.323.655.577 1.613.865 2.876.865.963 0 1.818-.164 2.564-.491a5.93 5.93 0 001.894-1.29 5.375 5.375 0 001.17-1.815 5.661 5.661 0 00.396-2.07V16.9l-6.266.678zM135.391 13.54a8.278 8.278 0 011.825-2.833 8.198 8.198 0 012.857-1.866c1.113-.441 2.347-.661 3.7-.661 1.24 0 2.359.192 3.357.576a7.86 7.86 0 012.633 1.663l-1.342 1.628a7.786 7.786 0 00-2.186-1.374 6.632 6.632 0 00-2.565-.491c-.986 0-1.893.163-2.72.491a6.328 6.328 0 00-2.134 1.374c-.596.588-1.061 1.312-1.394 2.171-.332.86-.499 1.81-.499 2.85s.167 1.985.5 2.833a6.286 6.286 0 001.393 2.171 6.196 6.196 0 002.135 1.392 7.211 7.211 0 002.685.492c.964 0 1.865-.176 2.702-.526.838-.35 1.59-.82 2.255-1.408l1.273 1.628c-.734.679-1.617 1.233-2.65 1.662-1.033.43-2.215.645-3.546.645-1.354 0-2.582-.22-3.683-.661-1.102-.441-2.043-1.052-2.823-1.832a7.854 7.854 0 01-1.79-2.8c-.413-1.085-.62-2.272-.62-3.562 0-1.289.212-2.476.637-3.562"></path>
              <path
                mask="url(#prefix__e)"
                d="M2.315 17.329v5.055h-2.1V.044h2.1v14.639l9.053-9.262h2.961l-7.47 7.396 7.642 9.567h-2.754l-6.3-8.142z"
                transform="translate(152.165 3.166)"
              ></path>
            </svg>
          </div>
          <div
            style={{ display: "flex", flexWrap: "wrap", position: "relative" }}
          >
            <div
              className="innerDiv"
              style={{
                paddingRight: "20px",
                paddingLeft: "10px",
                minWidth: "12rem",
                height: "250px",
              }}
            >
              <h5 style={{ color: "#FCE5D8", opacity: "0.6" }}>
                TOGGLE GLOBAL
              </h5>
              <ul className="footer-ul">
                <li className="footer-ul-li">
                  <a
                    className="footer-ul-li-a"
                    target="_blank"
                    rel="noreferrer"
                    href="https://toggl.com/blog/"
                  >
                    Blog
                  </a>
                </li>
                <li className="footer-ul-li">
                  <a className="footer-ul-li-a" href="/mission/">
                    Our Mission
                  </a>
                </li>
                <li className="footer-ul-li">
                  <a className="footer-ul-li-a" href="/jobs/">
                    Working at Toggl
                    <div class="css-1976z0f-Small e1yt8oty0"></div>
                  </a>
                </li>
                <li className="footer-ul-li">
                  <a className="footer-ul-li-a" href="/track/legal/terms/">
                    Legal Terms
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="innerDiv"
              style={{
                paddingRight: "20px",
                paddingLeft: "10px",
                minWidth: "12rem",
              }}
            >
              <h5 style={{ color: "#FCE5D8", opacity: "0.6" }}>PRODUCT</h5>
              <ul className="footer-ul">
                <li className="footer-ul-li">
                  <a
                    className="footer-ul-li-a"
                    target="_blank"
                    rel="noreferrer"
                    href="https://toggl.com/blog/"
                  >
                    Features
                  </a>
                </li>
                <li className="footer-ul-li">
                  <a className="footer-ul-li-a" href="/mission/">
                    Pricing
                  </a>
                </li>
                <li className="footer-ul-li">
                  <a className="footer-ul-li-a" href="/jobs/">
                    integrations<div class="css-1976z0f-Small e1yt8oty0"></div>
                  </a>
                </li>
                <li className="footer-ul-li">
                  <a className="footer-ul-li-a" href="/track/legal/terms/">
                    Case Studies
                  </a>
                </li>
                <li className="footer-ul-li">
                  <a className="footer-ul-li-a" href="/track/legal/terms/">
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="innerDiv"
              style={{
                paddingRight: "20px",
                paddingLeft: "10px",
                minWidth: "12rem",
              }}
            >
              <h5 style={{ color: "#FCE5D8", opacity: "0.6" }}>USE CASES</h5>
              <ul className="footer-ul">
                <li className="footer-ul-li">
                  <a
                    className="footer-ul-li-a"
                    target="_blank"
                    rel="noreferrer"
                    href="https://toggl.com/blog/"
                  >
                    Billing and Invoicing
                  </a>
                </li>
                <li className="footer-ul-li">
                  <a className="footer-ul-li-a" href="/mission/">
                    Employee Time Tracking
                  </a>
                </li>
                <li className="footer-ul-li">
                  <a className="footer-ul-li-a" href="/jobs/">
                    Project Budgeting
                  </a>
                </li>
                <li className="footer-ul-li">
                  <a className="footer-ul-li-a" href="/track/legal/terms/">
                    Reporting
                  </a>
                </li>
                <li className="footer-ul-li">
                  <a className="footer-ul-li-a" href="/track/legal/terms/">
                    Payroll
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="innerDiv"
              style={{
                paddingRight: "20px",
                paddingLeft: "10px",
                minWidth: "12rem",
              }}
            >
              <h5 style={{ color: "#FCE5D8", opacity: "0.6" }}>TOGGLE 4</h5>
              <ul className="footer-ul">
                <li className="footer-ul-li">
                  <a
                    className="footer-ul-li-a"
                    target="_blank"
                    rel="noreferrer"
                    href="https://toggl.com/blog/"
                  >
                    Blog
                  </a>
                </li>
                <li className="footer-ul-li">
                  <a className="footer-ul-li-a" href="/mission/">
                    Our Mission
                  </a>
                </li>
                <li className="footer-ul-li">
                  <a className="footer-ul-li-a" href="/jobs/">
                    Working at Toggl
                    <div class="css-1976z0f-Small e1yt8oty0"></div>
                  </a>
                </li>
                <li className="footer-ul-li">
                  <a className="footer-ul-li-a" href="/track/legal/terms/">
                    Legal Terms
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="innerDiv"
              style={{
                paddingRight: "20px",
                paddingLeft: "10px",
                minWidth: "12rem",
              }}
            >
              <h5 style={{ color: "#FCE5D8", opacity: "0.6" }}>TOGGLE 5</h5>
              <ul className="footer-ul">
                <li className="footer-ul-li">
                  <a
                    className="footer-ul-li-a"
                    target="_blank"
                    rel="noreferrer"
                    href="https://toggl.com/blog/"
                  >
                    Blog
                  </a>
                </li>
                <li className="footer-ul-li">
                  <a className="footer-ul-li-a" href="/mission/">
                    Our Mission
                  </a>
                </li>
                <li className="footer-ul-li">
                  <a className="footer-ul-li-a" href="/jobs/">
                    Working at Toggl
                    <div class="css-1976z0f-Small e1yt8oty0"></div>
                  </a>
                </li>
                <li className="footer-ul-li">
                  <a className="footer-ul-li-a" href="/track/legal/terms/">
                    Legal Terms
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="innerDiv"
              style={{
                paddingRight: "20px",
                paddingLeft: "10px",
                minWidth: "12rem",
              }}
            >
              <h5 style={{ color: "#FCE5D8", opacity: "0.6" }}>TOGGLE 6</h5>
              <ul className="footer-ul">
                <li className="footer-ul-li">
                  <a
                    className="footer-ul-li-a"
                    target="_blank"
                    rel="noreferrer"
                    href="https://toggl.com/blog/"
                  >
                    Blog
                  </a>
                </li>
                <li className="footer-ul-li">
                  <a className="footer-ul-li-a" href="/mission/">
                    Our Mission
                  </a>
                </li>
                <li className="footer-ul-li">
                  <a className="footer-ul-li-a" href="/jobs/">
                    Working at Toggl
                    <div class="css-1976z0f-Small e1yt8oty0"></div>
                  </a>
                </li>
                <li className="footer-ul-li">
                  <a className="footer-ul-li-a" href="/track/legal/terms/">
                    Legal Terms
                  </a>
                </li>
              </ul>
            </div>
            <div style={{ flex: "100%" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <a
                  style={{ margin: "10px 20px" }}
                  href="https://twitter.com/toggltrack"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsTwitter size="28" color="white" />
                </a>
                <a
                  style={{ margin: "10px 20px" }}
                  href="https://twitter.com/toggltrack"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookF size="28" color="white" />
                </a>
                <a
                  style={{ margin: "10px 20px" }}
                  href="https://twitter.com/toggltrack"
                  target="_blank"
                  rel="noreferrer"
                >
                  <RiInstagramFill size="28" color="white" />
                </a>
                <a
                  style={{ margin: "10px 20px" }}
                  href="https://twitter.com/toggltrack"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsYoutube size="28" color="white" />
                </a>
                <a
                  style={{ margin: "10px 20px" }}
                  href="https://twitter.com/toggltrack"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsLinkedin size="28" color="white" />
                </a>
                <a
                  style={{ margin: "10px 20px" }}
                  href="https://twitter.com/toggltrack"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub size="28" color="white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-2nd-last">
        <div className="discover">Discover other Toggl tools:</div>
        <div className="svg-logos">
          <div>
            <svg
              style={{ width: "111px", height: "28px" }}
              viewBox="0 0 226 49"
              fill="#A876F5"
            >
              <path d="M67.398 16.993c.517-.517 1.27-.752 1.975-.752.705 0 1.457.235 1.974.752.517.517.752 1.27.752 1.974 0 .753-.235 1.458-.752 1.975-.517.517-1.27.752-1.974.752-.706 0-1.458-.235-1.975-.752-.517-.517-.752-1.27-.752-1.975 0-.705.235-1.457.752-1.974zm15.796 24.4c-.094-2.116-.705-4.373-2.303-5.877-1.787-1.646-4.373-2.445-6.77-2.445H63.4c-1.08 0-1.974-.8-1.974-1.786 0-.847.565-1.505 1.317-1.74l.376-.094c1.927.94 4.09 1.316 6.253 1.316 3.29 0 6.628-.987 9.073-3.243 2.35-2.21 3.479-5.313 3.479-8.463 0-3.15-1.128-6.252-3.479-8.462-.705-.658-1.457-1.175-2.304-1.645 2.257.517 4.608-.141 6.253-2.915l-4.56-3.291-3.808 5.312a15.513 15.513 0 00-4.654-.705c-3.291 0-6.63.987-9.074 3.244-2.35 2.21-3.479 5.313-3.479 8.462 0 3.15 1.081 6.253 3.48 8.463.187.188.422.376.657.564-.235.14-.423.235-.423.235-.893.47-1.927 1.27-3.009 2.398-1.504 1.598-3.008 3.996-3.008 7.145 0 0-.189 6.77 7.569 6.77h5.641c1.316 0 2.633.846 2.633 2.116 0 .47-.141.893-.376 1.27h10.813c1.551-1.74 2.444-4.326 2.397-6.63zM94.806 16.993c.518-.517 1.27-.752 1.975-.752.705 0 1.457.235 1.974.752.518.517.753 1.27.753 1.974 0 .753-.235 1.458-.752 1.975-.518.517-1.27.752-1.975.752-.705 0-1.457-.235-1.975-.752-.517-.517-.752-1.27-.752-1.975a2.616 2.616 0 01.752-1.974zm19.088 24.4c-.094-2.116-.706-4.373-2.304-5.877-1.787-1.645-4.372-2.445-6.77-2.445l-12.458-.094c-.8 0-1.364-.47-1.364-1.222 0-.611.282-1.505 1.035-1.646 1.457.47 3.055.706 4.607.706 3.29 0 6.629-.988 9.073-3.244 2.351-2.21 3.479-5.313 3.479-8.463 0-3.15-1.128-6.252-3.479-8.462-.705-.658-1.457-1.175-2.303-1.645 2.256.517 4.607-.141 6.252-2.915l-4.56-3.291-3.808 5.312a15.511 15.511 0 00-4.654-.705c-3.291 0-6.629.988-9.073 3.244-2.351 2.21-3.48 5.313-3.48 8.462 0 3.15 1.129 6.253 3.48 8.463.705.658 1.457 1.222 2.303 1.645-.564.423-1.128.94-1.692 1.552-1.505 1.598-3.01 3.996-3.01 7.146 0 0-.187 6.77 7.57 6.77h5.641c1.317 0 2.633.846 2.633 2.115 0 .47-.141.893-.376 1.27h10.813c1.645-1.787 2.539-4.373 2.445-6.677z"></path>
              <path d="M126.963 37.913V27.76c-2.303.282-3.15-1.364-3.15-2.962V.068h-11.518V26.63c0 3.291.47 6.065 1.693 7.805 1.833 2.632 4.325 4.372 9.214 4.372.94-.047 2.445-.235 3.761-.894zM41.964 25.596c-.705.705-1.645.987-2.586.987-.94 0-1.88-.282-2.585-.987-.658-.658-.988-1.598-.988-2.586 0-.987.33-1.88.988-2.585.705-.706 1.645-.988 2.585-.988s1.88.282 2.586.988c.658.658.987 1.598.987 2.585 0 .988-.329 1.88-.987 2.586zm8.603-13.775c-2.961-3.055-7.051-4.325-11.095-4.325-4.043 0-8.133 1.317-11.095 4.325-2.914 2.962-4.23 7.1-4.23 11.33 0 4.232 1.363 8.369 4.23 11.33 2.962 3.056 7.052 4.326 11.095 4.326 4.044 0 8.134-1.317 11.095-4.326 2.915-2.961 4.231-7.098 4.231-11.33 0-4.23-1.363-8.368-4.23-11.33zM155.547 34.294c1.175-.518 2.162-1.27 3.009-2.21.799-.94 1.457-2.022 1.88-3.291.423-1.222.658-2.586.658-4.09a12.57 12.57 0 00-.658-4.043c-.423-1.27-1.081-2.35-1.88-3.291-.8-.94-1.834-1.646-3.009-2.21-1.176-.517-2.492-.799-4.043-.799-1.458 0-2.821.235-3.949.752a9.158 9.158 0 00-3.009 2.116 10.074 10.074 0 00-1.928 3.244c-.47 1.27-.658 2.68-.658 4.184 0 1.551.235 2.962.658 4.184.47 1.27 1.082 2.35 1.928 3.244.799.893 1.833 1.598 3.009 2.115 1.175.518 2.491.753 3.949.753 1.551.094 2.867-.141 4.043-.658zm-16.455-22.096h3.056v5.5c.376-.752.846-1.504 1.411-2.257a8.518 8.518 0 012.115-1.974 9.839 9.839 0 012.821-1.364c1.034-.329 2.256-.517 3.526-.517 1.833 0 3.526.33 5.03.988a11.389 11.389 0 013.855 2.773 12.752 12.752 0 012.445 4.185c.564 1.598.846 3.337.846 5.218 0 1.88-.282 3.62-.846 5.218-.564 1.599-1.363 3.01-2.445 4.184-1.034 1.176-2.35 2.116-3.855 2.774-1.504.658-3.197.987-5.03.987-1.317 0-2.492-.188-3.526-.517-1.034-.329-1.975-.799-2.774-1.363a10.55 10.55 0 01-2.115-1.975c-.612-.752-1.129-1.504-1.505-2.256v15.514h-3.056V12.197h.047zM172.659 2.137h-3.149v35.212h3.149V2.137zM186.105 25.502c-1.927.188-3.291.752-4.09 1.646-.799.893-1.222 1.927-1.222 3.102 0 1.458.47 2.586 1.41 3.432.94.846 2.351 1.27 4.184 1.27 1.411 0 2.68-.235 3.761-.706a8.377 8.377 0 002.774-1.927 8.08 8.08 0 001.692-2.68 8.559 8.559 0 00.565-3.056v-2.068l-9.074.987zm-6.535-10.249c.47-.752 1.129-1.363 1.928-1.927.799-.564 1.786-.988 2.915-1.27 1.128-.282 2.491-.47 4.09-.47 3.338 0 5.829.752 7.428 2.304 1.598 1.551 2.397 3.855 2.397 6.958v16.501h-3.055v-5.406c-.753 1.927-1.975 3.385-3.573 4.372-1.646.987-3.479 1.504-5.595 1.504-1.363 0-2.586-.188-3.667-.564-1.034-.376-1.927-.893-2.633-1.598-.705-.658-1.222-1.458-1.598-2.398a7.97 7.97 0 01-.564-3.009c0-2.35.752-4.137 2.303-5.36 1.505-1.221 3.432-1.974 5.736-2.209l8.368-.799c.846-.094 1.27-.47 1.27-1.034v-.893c0-1.693-.518-3.056-1.552-4.043-1.034-.988-2.727-1.505-5.077-1.505-4.278 0-6.723 1.599-7.381 4.748l-2.727-1.457c.188-.94.517-1.74.987-2.445zM209.894 13.279c1.551-1.129 3.431-1.693 5.688-1.693 3.197 0 5.595 1.035 7.146 3.056 1.551 2.022 2.351 4.701 2.351 8.04v14.667h-3.15V22.446c0-2.491-.611-4.466-1.834-5.876-1.222-1.41-2.915-2.116-5.124-2.116-1.599 0-2.962.282-4.043.893-1.081.612-1.975 1.41-2.633 2.445-.658 1.034-1.128 2.257-1.41 3.573a20.964 20.964 0 00-.423 4.278v11.612h-3.056V12.197h2.962v5.595c.799-1.88 1.974-3.385 3.526-4.513zM19.915 27.806c-1.927 0-2.727-.611-3.432-1.505-.47-.61-.705-1.457-.705-2.585v-5.219h6.44V9.095h-6.393V.068H7.598v3.385c0 3.761-2.868 6.77-6.394 6.77-.282 0-.517 0-.8-.047v8.321H4.73v8.369c0 3.29.611 5.83 1.786 7.569 1.834 2.632 3.855 4.372 8.839 4.372 2.868 0 5.312-.659 6.864-1.552V27.43c-.565.235-1.364.376-2.304.376z"></path>
            </svg>
            <div>Beautifully simple work planning</div>
          </div>
          <div>
            <svg
              style={{ width: "111px", height: "28px" }}
              viewBox="0 0 187 42"
              fill="#FF8A7A"
            >
              <path d="M58.541 14.818c.468-.467 1.106-.667 1.742-.667.636 0 1.275.2 1.74.667.454.454.667 1.09.667 1.739 0 .652-.213 1.285-.667 1.742-.468.467-1.104.667-1.74.667-.636 0-1.274-.2-1.742-.667-.454-.454-.667-1.09-.667-1.742 0-.649.213-1.285.667-1.74zM72.34 36.125c-.062-1.864-.613-3.839-2.014-5.14-1.566-1.453-3.832-2.12-5.935-2.12h-9.384c-.927 0-1.747-.696-1.747-1.555 0-.722.493-1.327 1.16-1.504-.002 0 .158-.041.332-.096 1.68.808 3.575 1.171 5.467 1.171 2.895 0 5.795-.849 7.918-2.835 2.067-1.931 3.035-4.633 3.035-7.398 0-2.765-.966-5.467-3.035-7.401a9.709 9.709 0 00-2.001-1.436c1.993.462 4.05-.111 5.464-2.552l-3.99-2.866-3.328 4.632a13.332 13.332 0 00-4.068-.613c-2.894 0-5.794.849-7.917 2.835-2.067 1.931-3.035 4.634-3.035 7.4s.966 5.468 3.035 7.4c.179.168.366.326.555.48-.205.109-.387.205-.39.205-.762.428-1.697 1.11-2.621 2.095-1.311 1.396-2.622 3.486-2.622 6.266 0 0-.182 5.932 6.633 5.932h4.934c1.138 0 2.293.722 2.293 1.859 0 .413-.122.794-.33 1.116h9.441c1.43-1.586 2.22-3.84 2.15-5.875zM82.497 14.818c.467-.467 1.106-.667 1.74-.667.635 0 1.274.2 1.741.667.454.454.667 1.09.667 1.739 0 .652-.213 1.285-.667 1.742-.467.467-1.106.667-1.742.667-.636 0-1.274-.2-1.74-.667-.453-.454-.666-1.09-.666-1.742 0-.649.213-1.285.667-1.74zm16.72 21.307c-.062-1.864-.612-3.839-2.014-5.14-1.565-1.453-3.832-2.12-5.934-2.12l-10.893-.078c-.688 0-1.212-.431-1.212-1.07 0-.524.262-1.306.919-1.435 1.287.41 2.658.6 4.026.6 2.895 0 5.794-.85 7.918-2.836 2.066-1.931 3.032-4.633 3.032-7.398 0-2.765-.966-5.467-3.032-7.401a9.711 9.711 0 00-2.002-1.436c1.994.462 4.05-.111 5.465-2.552L91.5 2.393l-3.328 4.632a13.332 13.332 0 00-4.068-.613c-2.895 0-5.794.849-7.918 2.835-2.069 1.931-3.035 4.634-3.035 7.4s.966 5.468 3.035 7.4a9.652 9.652 0 002.015 1.44c-.478.364-.982.808-1.483 1.34-1.31 1.396-2.622 3.486-2.622 6.266 0 0-.181 5.932 6.633 5.932h4.938c1.137 0 2.292.722 2.292 1.859 0 .413-.122.794-.33 1.116h9.442c1.427-1.586 2.217-3.84 2.147-5.875z"></path>
              <path d="M110.642 33.08v-8.857c-2.032.257-2.741-1.176-2.741-2.599V0H97.816v23.239c0 2.887.428 5.293 1.469 6.807 1.599 2.305 3.764 3.816 8.068 3.831.797-.03 2.121-.19 3.289-.797zM36.291 22.31c-.602.602-1.427.862-2.248.862-.822 0-1.645-.26-2.248-.862-.586-.587-.862-1.41-.862-2.248 0-.841.276-1.662.862-2.249.603-.602 1.428-.861 2.248-.861.823 0 1.646.257 2.248.861.587.587.862 1.41.862 2.248 0 .842-.275 1.662-.861 2.249zm7.516-12.035c-2.604-2.658-6.16-3.796-9.71-3.796-3.548 0-7.104 1.138-9.708 3.796-2.536 2.588-3.72 6.204-3.72 9.906 0 3.702 1.184 7.318 3.72 9.906 2.604 2.656 6.16 3.795 9.709 3.795 3.549 0 7.105-1.137 9.709-3.795 2.533-2.585 3.72-6.204 3.72-9.906-.003-3.702-1.187-7.32-3.72-9.906zM124.302 15.425c.675-1.583 1.664-2.873 2.967-3.868 1.304-.997 2.968-1.495 4.99-1.495 2.814 0 4.904.888 6.266 2.66 1.363 1.774 2.046 4.113 2.046 7.015v12.84h-2.77V19.558c0-2.11-.506-3.803-1.516-5.078-1.012-1.274-2.513-1.913-4.506-1.913-1.407 0-2.594.265-3.562.792a6.147 6.147 0 00-2.308 2.155c-.571.908-.981 1.957-1.23 3.143a18.203 18.203 0 00-.374 3.76v10.157h-2.684V1.794h2.681v13.631zM147.474 32.572h-2.682V10.585h2.682v21.986zm-3.079-30.428c.47-.47 1.054-.703 1.76-.703.675 0 1.254.233 1.737.703.483.47.727 1.057.727 1.76 0 .675-.242 1.254-.727 1.737a2.37 2.37 0 01-1.737.724c-.703 0-1.29-.241-1.76-.724a2.4 2.4 0 01-.704-1.737c0-.703.234-1.29.704-1.76zM157.894 11.422c1.173-.908 2.593-1.363 4.265-1.363.615 0 1.334.073 2.155.221v2.814a9.373 9.373 0 00-1.143-.176 12.98 12.98 0 00-1.056-.045c-1.29 0-2.368.25-3.232.748a5.906 5.906 0 00-2.09 2.022c-.527.85-.901 1.861-1.121 3.035a20.185 20.185 0 00-.33 3.738v10.155h-2.682V10.587h2.594V15.6c.586-1.874 1.467-3.268 2.64-4.177zM182.935 17.03a7.02 7.02 0 00-1.428-2.332c-.615-.66-1.371-1.178-2.264-1.56-.893-.381-1.929-.571-3.099-.571-2.376 0-4.242.683-5.608 2.046-1.363 1.363-2.175 3.143-2.44 5.342h15.433c-.06-1.056-.257-2.032-.594-2.925zm-16.885.088c.514-1.423 1.239-2.653 2.176-3.694s2.074-1.862 3.408-2.464c1.335-.602 2.822-.9 4.463-.9 1.729 0 3.247.3 4.551.9 1.305.602 2.388 1.415 3.252 2.44.865 1.026 1.511 2.22 1.934 3.583.426 1.363.639 2.806.639 4.33v.792h-18.468l-.044.306c.029 1.319.27 2.484.727 3.497.454 1.012 1.054 1.861 1.802 2.549a7.774 7.774 0 002.616 1.583c.997.367 2.067.55 3.209.55 1.672 0 3.107-.329 4.309-.988 1.202-.66 2.228-1.46 3.079-2.396l1.407 2.11c-.937.968-2.111 1.84-3.518 2.617-1.407.776-3.122 1.166-5.145 1.166-1.672 0-3.188-.27-4.55-.813-1.363-.543-2.537-1.303-3.518-2.287-.981-.981-1.744-2.175-2.287-3.582-.543-1.408-.813-2.976-.813-4.704 0-1.644.257-3.175.771-4.595zM17.032 24.26c-1.677 0-2.365-.515-2.985-1.301-.4-.514-.603-1.27-.603-2.251v-4.584h5.629V7.906h-5.626V0H6.251v2.957c0 3.276-2.495 5.929-5.573 5.929-.231 0-.457-.016-.678-.044v7.284h3.777v7.32c0 2.882.52 5.102 1.558 6.613 1.604 2.313 3.385 3.826 7.728 3.826 2.518 0 4.629-.579 6.01-1.35V23.92c-.52.203-1.223.34-2.04.34z"></path>
            </svg>
            <div>Skills-based hiring</div>
          </div>
        </div>
      </div>
      <div
        className="footer-end"
        style={{
          backgroundColor: "#E57CD8",
          fontSize: "0.875rem",
          lineHeight: "1.35",
          alignItems: "center",
          display: "flex",
          color: "#2C1338",
          padding: "33px",
        }}
      >
        <span>© 2022 Toggl. All Rights Reserved</span>
      </div>
    </div>
  );
};

export default Footer;
