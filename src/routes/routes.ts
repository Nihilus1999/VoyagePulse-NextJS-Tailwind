import { appRouterBuilder } from "@/routes/appRouterBuilder";
import path from "path";

export const routes = {
  login: {
    session: "/login/session",
  },

  home: {
    path: "/home",
    access: ["can_access_home_page"],
  },
  about: {
    path: "/about",
    access: ["can_access_about_page"],
  },
  contact: {
    path: "/contact",
    access: ["can_access_contact_page"],
  },
  support: {
    path: "/support",
    access: ["can_access_support_page"],
  },
  form: {
    path: "/form",
    access: ["can_access_form_page"],
  },
  thank_you: {
    path: "/thank-you",
  },
};
