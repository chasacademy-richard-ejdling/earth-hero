import { createReduxModule } from "hooks-for-redux";

const initialValue = false;

export const [useIsLoggedIn, { setIsLoggedIn }] = createReduxModule(
  "isLoggedIn",
  initialValue,
  {
    setIsLoggedIn: (state, value) => {
      return value;
    },
  }
);
