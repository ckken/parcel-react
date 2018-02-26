import "babel-polyfill"
import 'src/helper/flexible'
import "src/app"
import {env} from "./config.js"
// debug环境
env==='development' && import('vconsole').then(Cls=>{new Cls()})

