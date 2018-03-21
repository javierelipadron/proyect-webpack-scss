import Vue, {VNode} from "vue"
import { Component } from "vue-property-decorator"

@Component
export default class Tablas extends Vue {
  data() {
    return {
      persons: [
        { rut: "15.564.978-K", name: "Raul", lastname: "Morales", email: "raul@gmail.com" },
        { rut: "17.483.546-8", name: "Paulina", lastname: "Pinto", email: "paulina@gmail.com" },
        { rut: "18.673.788-9", name: "Clara", lastname: "Carrillo", email: "clara@gmail.com" }
      ],
    }
  }
}
