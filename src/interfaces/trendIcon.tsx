import { ReactElement } from "react";

export interface Icon {
    id: number;
    icon: ReactElement<string, string>;
    label:  string;
}