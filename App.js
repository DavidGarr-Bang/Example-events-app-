import { Provider } from "react-redux";

import { store } from "./redux/store";
import Stack from "./container/nav";

const Root = () => {
  return (
    <Provider store={store}>
      <Stack />
    </Provider>
  );
};

export default Root;
