import Cookie from 'js-cookie';

const setCookie = (name, usrin) => {
    const expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 10); // Set expiration to 10 years from now

    Cookie.set(name, usrin, {
        expires: expirationDate,
        secure: false,
        sameSite: 'strict',
        path: '/'
    });
};

export default setCookie;
