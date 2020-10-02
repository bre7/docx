import { Attributes, XmlComponent } from "file/xml-components";

export { Underline } from "./underline";
export { EmphasisMark } from "./emphasis-mark";
export { SubScript, SuperScript } from "./script";
export { RunFonts, IFontAttributesProperties } from "./run-fonts";

export class Bold extends XmlComponent {
    constructor() {
        super("w:b");
        this.root.push(
            new Attributes({
                val: true,
            }),
        );
    }
}

export class BoldComplexScript extends XmlComponent {
    constructor() {
        super("w:bCs");
        this.root.push(
            new Attributes({
                val: true,
            }),
        );
    }
}

export class CharacterSpacing extends XmlComponent {
    constructor(value: number) {
        super("w:spacing");
        this.root.push(
            new Attributes({
                val: value,
            }),
        );
    }
}

export class Italics extends XmlComponent {
    constructor() {
        super("w:i");
        this.root.push(
            new Attributes({
                val: true,
            }),
        );
    }
}

export class ItalicsComplexScript extends XmlComponent {
    constructor() {
        super("w:iCs");
        this.root.push(
            new Attributes({
                val: true,
            }),
        );
    }
}

export class Caps extends XmlComponent {
    constructor() {
        super("w:caps");
        this.root.push(
            new Attributes({
                val: true,
            }),
        );
    }
}

export class Color extends XmlComponent {
    constructor(color: string) {
        super("w:color");
        this.root.push(
            new Attributes({
                val: color,
            }),
        );
    }
}

export class DoubleStrike extends XmlComponent {
    constructor() {
        super("w:dstrike");
        this.root.push(
            new Attributes({
                val: true,
            }),
        );
    }
}

export class Emboss extends XmlComponent {
    constructor() {
        super("w:emboss");
        this.root.push(
            new Attributes({
                val: true,
            }),
        );
    }
}

export class Imprint extends XmlComponent {
    constructor() {
        super("w:imprint");
        this.root.push(
            new Attributes({
                val: true,
            }),
        );
    }
}

export class SmallCaps extends XmlComponent {
    constructor() {
        super("w:smallCaps");
        this.root.push(
            new Attributes({
                val: true,
            }),
        );
    }
}

export class Strike extends XmlComponent {
    constructor() {
        super("w:strike");
        this.root.push(
            new Attributes({
                val: true,
            }),
        );
    }
}

export class Size extends XmlComponent {
    constructor(size: number) {
        super("w:sz");
        this.root.push(
            new Attributes({
                val: size,
            }),
        );
    }
}

export class SizeComplexScript extends XmlComponent {
    constructor(size: number) {
        super("w:szCs");
        this.root.push(
            new Attributes({
                val: size,
            }),
        );
    }
}

export class RightToLeft extends XmlComponent {
    constructor() {
        super("w:rtl");
        this.root.push(
            new Attributes({
                val: true,
            }),
        );
    }
}

export class Shading extends XmlComponent {
    constructor(value: string, fill: string, color?: string) {
        super("w:shd");
        if (color) {
            this.root.push(
                new Attributes({
                    val: value,
                    fill: fill,
                    color: color,
                }),
            );
        } else {
            this.root.push(
                new Attributes({
                    val: value,
                    fill: fill,
                }),
            );
        }
    }
}

export class ShadowComplexScript extends XmlComponent {
    constructor(value: string, fill: string, color?: string) {
        super("w:shdCs");
        if (color) {
            this.root.push(
                new Attributes({
                    val: value,
                    fill: fill,
                    color: color,
                }),
            );
        } else {
            this.root.push(
                new Attributes({
                    val: value,
                    fill: fill,
                }),
            );
        }
    }
}

export class Highlight extends Shading {
    constructor(color: string) {
        super("clear", color);
    }
}

export class HighlightComplexScript extends ShadowComplexScript {
    constructor(color: string) {
        super("clear", color);
    }
}
