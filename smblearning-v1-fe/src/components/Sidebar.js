import React from "react";
import ReactDOM from "react-dom";

import Logo from "../assets/pngs/smartbukites-logo.png";
import User from "../assets/pngs/user.png";

import "./Sidebar.css";

function Sidebar(props) {
  return (
    <aside className="sidenav">
      <header class="page-header">
        <nav>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="back-btn"
            onClick={props.closeDrawer}
          >
            <path
              d="M4 12H20"
              stroke="#38b6ff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13 5L20 12L13 19"
              stroke="#38b6ff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <div className="user-avatar text-center">
            <img src={User} alt="badiru abubakar" />

            <div className="info">
              <p className="user-name mb-1 font-weight-bolder">
                Badiru Abubakar
              </p>
              <p className="user-role">Admin</p>
            </div>
          </div>
          <ul class="nav-menu mt-5">
            <li className="active">
              <a>
                <svg
                  width="24"
                  height="23"
                  viewBox="0 0 24 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.5033 11.1447L12.5988 0.248169C12.5203 0.1695 12.427 0.107087 12.3244 0.0645032C12.2217 0.0219193 12.1116 0 12.0005 0C11.8893 0 11.7793 0.0219193 11.6766 0.0645032C11.574 0.107087 11.4807 0.1695 11.4022 0.248169L0.497704 11.1447C0.180021 11.4624 0 11.8939 0 12.344C0 13.2785 0.759793 14.0383 1.69431 14.0383H2.84327V21.8136C2.84327 22.2822 3.22184 22.6607 3.69042 22.6607H10.3062V16.7306H13.2712V22.6607H20.3106C20.7792 22.6607 21.1577 22.2822 21.1577 21.8136V14.0383H22.3067C22.7567 14.0383 23.1883 13.8609 23.5059 13.5406C24.1651 12.8787 24.1651 11.8066 23.5033 11.1447Z"
                    fill="#00B2EE"
                  />
                </svg>

                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a>
                <svg
                  width="24"
                  height="22"
                  viewBox="0 0 24 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.57895 12.6316C9.32337 12.6316 10.9023 11.9242 12.0455 10.7811C13.1874 9.63916 13.8947 8.06021 13.8947 6.31579C13.8947 4.57137 13.1874 2.99242 12.0455 1.85053C10.9023 0.707369 9.32337 0 7.57895 0C5.83453 0 4.25558 0.707369 3.11242 1.85053C1.97053 2.99242 1.26316 4.57137 1.26316 6.31579C1.26316 8.06021 1.97053 9.63916 3.11242 10.7811C3.69829 11.3686 4.39449 11.8345 5.16101 12.1521C5.92752 12.4696 6.74925 12.6326 7.57895 12.6316ZM7.57895 21.4737C12.0227 21.4737 15.1579 20.2105 15.1579 18.9474C15.1579 16.4211 12.1844 13.8947 7.57895 13.8947C2.84211 13.8947 0 16.4211 0 18.9474C0 20.2105 2.84211 21.4737 7.57895 21.4737ZM22.7368 10.1053H20.2105V7.57895C20.2105 7.24394 20.0774 6.92265 19.8406 6.68576C19.6037 6.44887 19.2824 6.31579 18.9474 6.31579C18.6124 6.31579 18.2911 6.44887 18.0542 6.68576C17.8173 6.92265 17.6842 7.24394 17.6842 7.57895V10.1053H15.1579C14.8229 10.1053 14.5016 10.2383 14.2647 10.4752C14.0278 10.7121 13.8947 11.0334 13.8947 11.3684C13.8947 11.7034 14.0278 12.0247 14.2647 12.2616C14.5016 12.4985 14.8229 12.6316 15.1579 12.6316H17.6842V15.1579C17.6842 15.4929 17.8173 15.8142 18.0542 16.0511C18.2911 16.288 18.6124 16.4211 18.9474 16.4211C19.2824 16.4211 19.6037 16.288 19.8406 16.0511C20.0774 15.8142 20.2105 15.4929 20.2105 15.1579V12.6316H22.7368C23.0719 12.6316 23.3931 12.4985 23.63 12.2616C23.8669 12.0247 24 11.7034 24 11.3684C24 11.0334 23.8669 10.7121 23.63 10.4752C23.3931 10.2383 23.0719 10.1053 22.7368 10.1053Z"
                    fill="#00B2EE"
                  />
                </svg>

                <span>Create User</span>
              </a>
            </li>
            <li>
              <a>
                <svg
                  width="19"
                  height="24"
                  viewBox="0 0 19 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 0H0.857143C0.383036 0 0 0.383036 0 0.857143V23.1429C0 23.617 0.383036 24 0.857143 24H18C18.4741 24 18.8571 23.617 18.8571 23.1429V0.857143C18.8571 0.383036 18.4741 0 18 0ZM13.6071 7.55089L12.3616 6.64286L11.0357 7.59107V1.60714H13.6071V7.55089Z"
                    fill="#00B2EE"
                  />
                </svg>

                <span>Courses</span>
              </a>
            </li>
            <li>
              <a>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 0C4.579 0 0 4.579 0 10C0 15.421 4.579 20 10 20C15.421 20 20 15.421 20 10C20 4.579 15.421 0 10 0ZM10 5C11.727 5 13 6.272 13 8C13 9.728 11.727 11 10 11C8.274 11 7 9.728 7 8C7 6.272 8.274 5 10 5ZM4.894 14.772C5.791 13.452 7.287 12.572 9 12.572H11C12.714 12.572 14.209 13.452 15.106 14.772C13.828 16.14 12.015 17 10 17C7.985 17 6.172 16.14 4.894 14.772Z"
                    fill="#00B2EE"
                  />
                </svg>

                <span>Users</span>
              </a>
            </li>
            <li>
              <a href="#0">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6H2V20C2 21.1 2.9 22 4 22H18V20H4V6Z"
                    fill="#00B2EE"
                  />
                  <path
                    d="M20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM14.01 15C13.42 15 12.96 14.53 12.96 13.95C12.96 13.36 13.43 12.91 14.01 12.91C14.6 12.91 15.05 13.36 15.05 13.95C15.04 14.53 14.6 15 14.01 15ZM16.51 8.83C15.88 9.76 15.28 10.04 14.95 10.64C14.82 10.88 14.77 11.04 14.77 11.82H13.25C13.25 11.41 13.19 10.74 13.51 10.17C13.92 9.44 14.69 9.01 15.14 8.37C15.62 7.69 15.35 6.43 14 6.43C13.12 6.43 12.68 7.1 12.5 7.66L11.13 7.09C11.51 5.96 12.52 5 13.99 5C15.22 5 16.07 5.56 16.5 6.26C16.87 6.87 17.08 7.99 16.51 8.83Z"
                    fill="#00B2EE"
                  />
                </svg>

                <span>Exams/Quiz</span>
              </a>
            </li>

            {/* <li>
              {" "}
              <a href="#">
                <svg
                  width="14"
                  height="20"
                  viewBox="0 0 14 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V10L5 6V9H11V11H5V14L0 10V19C0 19.2652 0.105357 19.5196 0.292893 19.7071C0.48043 19.8946 0.734784 20 1 20H13C13.2652 20 13.5196 19.8946 13.7071 19.7071C13.8946 19.5196 14 19.2652 14 19V1C14 0.734784 13.8946 0.48043 13.7071 0.292893C13.5196 0.105357 13.2652 0 13 0Z"
                    fill="black"
                    fill-opacity="0.8"
                  />
                </svg>

                <span>Logout</span>
              </a>
            </li> */}
          </ul>
        </nav>
      </header>
    </aside>
  );
  // return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
}

export default Sidebar;
