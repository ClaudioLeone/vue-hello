const { createApp } = Vue;

createApp({
    data() {
        return {
            greet: "Hello Vue!",
            imgSrc: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*_k_VPpZfwmeTuIeUMgQQJA.png",
            imgAlt: "Vue-3-0"
        }
    }
}).mount('#app')
