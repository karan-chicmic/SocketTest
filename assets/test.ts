import { _decorator, Component, Node } from "cc";
import io from "socket.io-client/dist/socket.io.js";
const { ccclass, property } = _decorator;

@ccclass("test")
export class test extends Component {
    click() {
        console.log("Button called", io("http://localhost:8000"));
    }
    start() {}

    update(deltaTime: number) {}
}
