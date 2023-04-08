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
    const data = {
        name: valueName,
        email: valueEmail,
        numberPhone: valuePhone,
        linkFb: valueFb,
    };
    localStorage.setItem('dataStudent', JSON.stringify(data));
}
btn_send.addEventListener('click', handleForm);
