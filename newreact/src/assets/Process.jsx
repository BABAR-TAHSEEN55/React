import { getImageUrl } from "../../PhotoShop";

export default function Avatar({ person, size }) {
  return (
    <>
      <img
        className="Photo"
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
      />
    </>
  );
}
