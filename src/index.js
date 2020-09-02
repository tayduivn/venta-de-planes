import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './webfonts/fonts.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {GoogleReCaptchaProvider} from "react-google-recaptcha-v3";
import {reCaptchaKey, prodReCaptchaKey} from "./logistics/utils/const";

ReactDOM.render(<GoogleReCaptchaProvider
    reCaptchaKey={process.env.NODE_ENV !== 'development'?prodReCaptchaKey:reCaptchaKey}
    language="zh-CN"
>
        <App/>
</GoogleReCaptchaProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();