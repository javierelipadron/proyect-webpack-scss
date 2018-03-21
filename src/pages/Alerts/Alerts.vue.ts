import Vue, {VNode} from "vue"
import { Component } from "vue-property-decorator"

@Component
export default class Alerts extends Vue {
  data () {
    return {}
  }
  myFunction() {
    alert('Copiando code');
  }
  created(){
   //@ts-ignore
    $(function () {$('[data-toggle="tooltip"]').tooltip()})
  }
}
