import { _decorator, Component, EditBox, EditBoxComponent, instantiate, Label, Node, Prefab, ScrollView } from "cc";
import io from "socket.io-client/dist/socket.io.js";
import { setLabel } from "./setLabel";
// import cors from "cors";

const { ccclass, property } = _decorator;

@ccclass("test")
export class test extends Component {
    @property({ type: ScrollView })
    scrollView: ScrollView = null;
    @property({ type: Prefab })
    prefab: Prefab;

    click() {}
    start() {
        const socket = io("http://localhost:3000", { transports: ["websocket", "polling", "flashsocket"] });

        socket.on("conneted", (msg) => {
            console.log(msg);
        });
        socket.on("chat message", (msg) => {
            console.log(msg);
            const node = instantiate(this.prefab);
            node.getComponent(setLabel).setLabelFunc(msg);
            this.scrollView.content.addChild(node);
        });
    }

    update(deltaTime: number) {}
}
