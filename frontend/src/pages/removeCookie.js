import Cookie from 'js-cookie';

const RemoveCookie = (name)=>{
    return Cookie.remove(name);
};
export default RemoveCookie;