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
// // }
// import { Item } from "./assets/ConditionRender";
// export default function PackagingList() {
//   return (
//     <>
//       <section>
//         <h1>Sizzler's Hit List</h1>
//         <ul>
//           <Item isPacked={true} name="Get a Laptop" />
//           <Item isPacked={false} name="Poop" />
//           <Item isPacked={true} name="Workout" />
//           <Item isPacked={false} name="Touch some grass" />
//           <Item isPacked={true} name="OnePiece is crazy" />
//         </ul>
//       </section>
//     </>
//   );
// }
import Render from "../render.jsx";
// export default function () {
//   return <>{<Render />}</>;
// }
import Chai from "../Chai.jsx";
function Cup({ guests }) {
  return (
    <>
      <h2>Tea Served to Guest {guests}</h2>
    </>
  );
}

export default function Check() {
  return (
    <>
      {<Cup guests={1} />}
      {<Cup guests={2} />}
      {<Cup guests={3} />}
    </>
  );
}
