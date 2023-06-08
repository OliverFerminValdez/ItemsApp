// To parse this data:
//
//   import { Convert } from "./file";
//
//   const item = Convert.toItem(json);

export interface Item {
    id?:          string;
    code:        string;
    description: string;
    cost:        number;
    price:       number;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toItem(json: string): Item[] {
        return JSON.parse(json);
    }

    public static itemToJson(value: Item[]): string {
        return JSON.stringify(value);
    }
}
