export function Item({ name, isPacked }) {
  return (
    <li className="Test">{isPacked ? <del> {name + "✅"}</del> : name}</li>
  );
}
