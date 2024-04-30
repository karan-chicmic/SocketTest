import { _decorator, Component, Label, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("setLabel")
export class setLabel extends Component {
    @property({ type: Label })
    label: Label = null;
    start() {}

    update(deltaTime: number) {}

    setLabelFunc(msg: string) {
        this.label.string = msg;
    }
}
