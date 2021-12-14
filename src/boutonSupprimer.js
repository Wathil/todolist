export function BoutonSupprimer(props) {
  return <button className="mybutton" onClick={(e) => props.bSupprimer(e, props.index)}>❌</button>;
}
