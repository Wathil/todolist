import { BoutonSupprimer } from "./BoutonSupprimer";

export function Ligne(props) {
  return (<div key={props.index} className={props.item.done ? "itemLineThrough" : "item"} onClick={() => props.toggleClass(props.item)}>
    {/* {boutonSupprimer(props)} {props.item.name}</div>); */}
    <BoutonSupprimer bSupprimer={props.bSupprimer}/> {props.item.name}</div>);
}