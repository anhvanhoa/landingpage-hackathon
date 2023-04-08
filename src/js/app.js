window.onload = () => {
    const scroll_top = document.querySelector('.scroll-top');
    window.onscroll = () => {
        if (window.scrollY > 200) {
            scroll_top.classList.add('active');
        } else {
            scroll_top.classList.remove('active');
        }
    };
    scroll_top.addEventListener('click', () => {
        window.scrollTo({
            behavior: 'smooth',
            top: 0,
        });
    });
};

const formInfo = document.querySelector('.form-content');
const btn_send = document.querySelector('.form-btn');
function handleForm(e) {
    e.preventDefault();
    const valueName = formInfo['name'].value;
    const valueEmail = formInfo['email'].value;
    const valuePhone = formInfo['phone'].value;
    const valueFb = formInfo['fb'].value;
    if (valueName == '' || valueEmail == '' || valuePhone == '' || valueFb == '') {
        alert('vui lòng nhập dữ liệu vào form');
        return;
    }
    const data = {
        name: valueName,
        email: valueEmail,
        numberPhone: valuePhone,
        linkFb: valueFb,
    };
    localStorage.setItem('dataStudent', JSON.stringify(data));
    alert('Đăng ký thành công');
}
btn_send.addEventListener('click', handleForm);

let btnBars = document.querySelector('.icon-menu');
let navbar = document.querySelector('.header-navbar');
let close = document.querySelector('.close-icon');
btnBars.addEventListener('click', () => {
    navbar.classList.add('active');
});
close.addEventListener('click', () => {
    navbar.classList.remove('active');
});
window.onscroll = function () {
    navbar.classList.remove('active');
};
