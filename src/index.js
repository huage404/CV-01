let html = document.getElementById('html');
let style = document.getElementById('style');
let n = 0;
let string = `
.ball {
    width: 40vh;
    height: 40vh;
    margin: 5vh auto 10vh;
    border: 1px solid #000;
    box-shadow: 0 0 5px rgba(0, 0, 0, .6);
    border-radius: 50%;
    background: linear-gradient(90deg, rgba(255, 255, 255, 1) 50%, rgba(0, 0, 0, 1) 50%);
    border: none;
}
.ball::before {
    width: 50%;
    height: 50%;
    background-color: #000;
    margin: 0 auto;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 255, 255, 1) 25%, rgba(0, 0, 0, 1) 25%);
}
.ball::after{
    width: 50%;
    height: 50%;
    background-color: #fff;
    margin: 0 auto;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0, 0, 0, 1) 25%, rgba(255, 255, 255, 1) 25%);
}
.ball{
    animation: abc 4s linear infinite;
}
`;
let string2 = '';
let step = () => {
    setTimeout(() => {
        // string2 += (string[n] === '\n' ? '<br>' : string[n]);
        if (string[n] === '\n') {
            string2 += '<br>';
        } else if (string[n] === ' ') {
            string2 += '&nbsp;';
        } else {
            string2 += string[n];
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 9999);
        html.scrollTo(0, 9999);
        if (n < string.length - 1) {
            n += 1;
            step();
        }
    }, 50);
}

step.call(step);


/* 程序员三大难题
    1. 要不要 加1
    2. 怎么命名
    3. 缓存失效


*/
