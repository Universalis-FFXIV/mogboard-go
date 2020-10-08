import React from "react";
import { Item } from "../../../../../services/api/xivapi/models";

export const ItemContext = React.createContext<Item | null>(null);
