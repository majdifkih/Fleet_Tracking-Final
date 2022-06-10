
const logout = () => {
  localStorage.removeItem("token");
    window.location.href = "/login";
};

const AuthService = {
  logout,
}
export default AuthService;