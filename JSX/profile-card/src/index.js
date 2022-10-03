import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="container">
    <div class="card">
            <div class="card_img">
                <img src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/272743481_1283105488851246_1062010395104315392_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3Msnkgk_KbkAX_o-97Z&tn=njighUjrFQKm710O&_nc_ht=scontent.fhan14-1.fna&oh=00_AT83_nN7vvpNIFc2e5MnOnWb-Y_4ZlRmzNOaEnozTIsVpg&oe=630724AB" alt="no-image"/>
            </div>
            <div class="card_content">
                <div class="card_content_text">
                    <h2>VU HONG</h2>
                    <p>BANKER</p>
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
