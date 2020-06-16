import { CardType } from "./CardType";

export interface ThanksMsg {
  cardtype: CardType;
  to: string;
  msg: string;
  from: string;
  createdAt: Date;
}
