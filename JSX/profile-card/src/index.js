import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="container">
    <div class="card">
            <div class="card_img">
                <img src="https://raw.githubusercontent.com/PinkPigPinkPig/Font-end-Learning/master/30%20Days%20Challenge/Day%202%20Profile%20Card%2011-4-2022/Tuan.JPG" alt="no-image"/>
            </div>
            <div class="card_content">
                <div class="card_content_text">
                    <h2>QUY TUAN</h2>
                    <p>Front-End Developer</p>
                </div>
                <div class="card_content_social">
                    <a href=""><i class="fab fa-facebook-f"></i></a>
                    <a href=""><i class="fab fa-youtube"></i></a>
                    <a href=""><i class="fab fa-tiktok"></i></a>
                    <a href=""><i class="fab fa-github"></i></a>
                </div>
                <div class="card_content_action">
                    <button>CONTACT ME</button>
                </div>
            </div>
        </div>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
