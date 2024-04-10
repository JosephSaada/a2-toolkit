import {Window} from "./core/ui"
import {Button} from "./widgets/button"
import {Heading} from "./widgets/heading" 
import {CheckBox} from "./widgets/checkbox"

let w = new Window(window.innerHeight-10,'100%');

let lbl1= new Heading(w);
lbl1.text = "Button Demo";
lbl1.tabindex = 1;
lbl1.fontSize = 16;
lbl1.move(10,20);

let btn = new Button(w);
btn.tabindex = 2;
btn.fontSize = 14
btn.move(12, 50)

let lbl2= new Heading(w);
lbl2.text = "Checkbox Demo";
lbl2.tabindex = 1;
lbl2.fontSize = 16;
lbl2.move(10,80);

let checkbox = new CheckBox(w, "Check me"); 
checkbox.tabindex = 3;
checkbox.move(12, 120);
checkbox.label = "Check me"; 

