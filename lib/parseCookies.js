import cookie from "cookie";

export default req => {
  return cookie.parse(req ? req.headers.cookie || "" : document.cookie);
};
