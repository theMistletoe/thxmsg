import { CardType } from "./CardType";

export interface ThanksMsg {
  id: string;
  cardtype: CardType;
  to: string;
  msg: string;
  from: string;
  createdAt: Date;
}
