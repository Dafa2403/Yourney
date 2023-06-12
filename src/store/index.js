import { atom } from "recoil";

const authenticated = atom({
  key: "authenticated",
  default: {
    token: "",
  },
});

export { authenticated };
