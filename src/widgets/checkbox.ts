import { Widget, Window, EventArgs, RoleType } from "../core/ui"; 
import { Rect, Text } from "@svgdotjs/svg.js";

class CheckBox extends Widget {
    private _label: string;
    private _checked: boolean;
    private _onChange: (checked: boolean) => void;
    private _box: Rect;

    constructor(parent: Window, label: string) {
        super(parent);
        this._label = label;
        this._checked = false;
        this.role = RoleType.checkbox;
        this.render();
    }

    public render(): void {
        this._group = (this.parent as Window).window.group();
        this._box = this._group.rect(20, 20).stroke({ width: 2, color: '#000' }).fill({ color: '#FFF' });
        const text = this._group.text(this._label).move(30, 0);

        this._box.click(() => this.toggleCheck());
        this.outerSvg = this._group;
        this.updateVisualState();
    }

    private toggleCheck(): void {
        this._checked = !this._checked;
        this.updateVisualState();
        if (this._onChange) {
            this._onChange(this._checked);
        }
    }

    private updateVisualState(): void {
        if (this._checked) {
            this._box.fill({ color: '#000' });
        } else {
            this._box.fill({ color: '#FFF' });
        }
    }

    set onChange(handler: (checked: boolean) => void) {
        this._onChange = handler;
    }

    get checked(): boolean {
        return this._checked;
    }

    set checked(value: boolean) {
        this._checked = value;
        this.updateVisualState();
    }

    get label(): string {
        return this._label;
    }

    set label(value: string) {
        this._label = value;
        this.updateVisualState();
    } 

    idleupState(): void {
        throw new Error("Method not implemented.");
    }    
    idledownState(): void {
        throw new Error("Method not implemented.");
    }
    pressedState(): void {
        throw new Error("Method not implemented.");
    }
    hoverState(): void {
       throw new Error("Method not implemented.");
    }
    hoverPressedState(): void {
        throw new Error("Method not implemented.");
    }
    pressedoutState(): void {
        throw new Error("Method not implemented.");
    }
    moveState(): void {
        throw new Error("Method not implemented.");
    }
    keyupState(keyEvent?: KeyboardEvent): void {
        throw new Error("Method not implemented.");
    } 
    pressReleaseState(): void {
        throw new Error("Method not implemented.");
    }
}

export { CheckBox }