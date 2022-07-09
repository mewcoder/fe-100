import DefaultTheme from "vitepress/client/theme-default";
import "vitepress-theme-demoblock/theme/styles/index.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { registerComponents } from "./register-components";
export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    app.use(ElementPlus);
    registerComponents(app);
  },
};
