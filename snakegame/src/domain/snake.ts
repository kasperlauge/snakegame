import { Field } from "./field";

export class Snake {
    fields: Field[];
    get length(): number {
        return this.fields.length;
    }
    get head(): Field {
        return this.fields[0];
    }
    constructor(fieldDimensionX: number,fieldDimensionY: number) {
        this.fields.push(new Field(fieldDimensionX/2,fieldDimensionY/2));
    }
}