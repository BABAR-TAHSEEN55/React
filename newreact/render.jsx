export default function Render({ id, name }) {
  const data = [
    "How we doing ? ",
    "shut your yapping ",
    "I am the great Norse Chocolate",
  ];
  const people = [
    {
      id: 0,
      name: "Creola Katherine Johnson",
      profession: "mathematician",
    },
    {
      id: 1,
      name: "Mario José Molina-Pasquel Henríquez",
      profession: "chemist",
    },
    {
      id: 2,
      name: "Mohammad Abdus Salam",
      profession: "physicist",
    },
    {
      id: 3,
      name: "Percy Lavon Julian",
      profession: "chemist",
    },
    {
      id: 4,
      name: "Subrahmanyan Chandrasekhar",
      profession: "astrophysicist",
    },
  ];

  return (
    <>
      {/* {data.map((data) => (
        <li>{data}</li>
      ))} */}
      {people.map((people) => (
        <li key={people.id}>{people.name} </li>
      ))}
    </>
  );
}
