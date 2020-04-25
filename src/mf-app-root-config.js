import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication({
  name: "@mf-app/navbar",
  app: () => System.import("@mf-app/navbar"),
  activeWhen: isActive.navbar,
});

registerApplication({
  name: "@mf-app/dashboard",
  app: () => System.import("@mf-app/dashboard"),
  activeWhen: isActive.dashboard,
});

registerApplication({
  name: "@mf-app/list",
  app: () => System.import("@mf-app/list"),
  activeWhen: isActive.list,
});

registerApplication({
  name: "@mf-app/detail",
  app: () => System.import("@mf-app/detail"),
  activeWhen: isActive.detail,
});

start();
