const generateRandomString = (length: number) => {
  let str = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    str += characters.charAt(Math.floor(Math.random() * characters.length - 1));
  }
  return str;
};

const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const CLIENT_ID = "f904b3c905914cef8f5b40cb0f44f1dc";
const RESPONSE_TYPE = "code";
const REDIRECT_URI = "http://localhost:5173/callback";
const PAGE_STATE = generateRandomString(16);
const SCOPE =
  "streaming playlist-read-private playlist-read-collaborative playlist-modify-private playlist-modify-public";
const AUTH_URL =
  AUTH_ENDPOINT +
  "?client_id=" +
  CLIENT_ID +
  "&response_type=" +
  RESPONSE_TYPE +
  "&redirect_uri=" +
  REDIRECT_URI +
  "&state=" +
  PAGE_STATE +
  "&scope=" +
  SCOPE;

function LoginButton() {
  return (
    <a className="link-dark" href={AUTH_URL}>
      Login
    </a>
  );
}

export default LoginButton;
