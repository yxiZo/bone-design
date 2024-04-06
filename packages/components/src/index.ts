import { createApp } from "vue";
import SmartyUI from './entry'
import  "./style.css";

createApp({
    template:`
        <div>
            <SFCButton>普通按钮</SFCButton>
        </div>
    `
})
.use(SmartyUI)
.mount("#app");
