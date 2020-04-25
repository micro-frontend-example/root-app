import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication({
  name: "@mf-app/navbar",
  app: () => System.import("@mf-app/navbar"),
  activeWhen: isActive.navbar,
});

start();
