import { Profile } from "./Profile";
export const Person = {
  name: "John",

  Theme: {
    backgroundColor: "blue",
  },
};
export default function Gallery() {
  return (
    <>
      <section>
        {" "}
        <h3 style={Person.Theme}>Best Characters of {Person.name}</h3>
        <Profile />
        <Profile />
        <Profile />
      </section>
    </>
  );
}
