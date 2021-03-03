import { goToFeedPage } from "../Router/Coordinator";
const { useEffect } = require("react");
const { useHistory } = require("react-router-dom");
const { default: useToken } = require("./UseToken");

const useRequireLoggedOut = (logged, setLogged) => {
  const token = useToken();
  const history = useHistory();

  useEffect(() => {
    if (token && logged) {
      goToFeedPage(history);
    } else {
      localStorage.removeItem("token");
      setLogged(false);
    }
  }, [token, history, logged]);
};

export default useRequireLoggedOut;
