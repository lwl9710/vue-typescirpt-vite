import { App } from "vue";
import HelloMessage from "./HelloMessage.vue";


export default function(app: App) {
  app.component(HelloMessage.name, HelloMessage);
}
