import { _decorator, Component, Label, Node } from "cc";
import io from "socket.io-client/dist/socket.io.js";
// import cors from "cors";

const { ccclass, property } = _decorator;

@ccclass("test")
export class test extends Component {
    @property({ type: Label })
    label: Label;
    click() {}
    start() {
        const socket = io("http://localhost:3000", { transports: ["websocket", "polling", "flashsocket"] });

        socket.on("conneted", (msg) => {
            console.log(msg);
        });
        socket.on("chat message", (msg) => {
            console.log(msg);
            this.label.string = msg;
        });
    }

    update(deltaTime: number) {}
}
