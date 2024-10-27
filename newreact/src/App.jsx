import Avatar from "./assets/Process";

function Card({ children }) {
  return (
    <div className="card">
      {children}
      <h1>Yo</h1>
    </div>
  );
}

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: "Katsuko Saruhashi",
          imageUrl: "YfeOqp2",
        }}
      />
    </Card>
  );
}
