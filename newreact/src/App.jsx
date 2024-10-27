import Avatar from "./assets/Process";

// function Card({ children }) {
//   return (
//     <div className="card">
//       {children}
//       <h1>Yo</h1>
//     </div>
//   );
// }

// export default function Profile() {
//   return (
//     <Card>
//       <Avatar
//         size={100}
//         person={{
//           name: "Katsuko Saruhashi",
//           imageUrl: "YfeOqp2",
//         }}
//       />
//     </Card>
//   );
// }
import { Item } from "./assets/ConditionRender";
export default function PackagingList() {
  return (
    <>
      <section>
        <h1>Sizzler's Hit List</h1>
        <ul>
          <Item isPacked={true} name="Get a Laptop" />
          <Item isPacked={false} name="Poop" />
          <Item isPacked={true} name="Workout" />
          <Item isPacked={false} name="Touch some grass" />
          <Item isPacked={true} name="OnePiece is crazy" />
        </ul>
      </section>
    </>
  );
}
