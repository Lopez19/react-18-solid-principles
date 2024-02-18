import { ArtistFactProps, ArtistProps } from "../types/Isp";

const artist: ArtistProps = {
  name: "John Doe",
  fact: "He is a musician",
};

// Forma incorrecta ❌
// const ArtistFact = ({ artist }: ArtistFactProps) => {
//   return (
//     <div>
//       <h3>Fact:</h3>
//       <p>{artist.fact}</p>
//     </div>
//   );
// };

// Forma correcta ✅
const ArtistFact = ({ fact }: ArtistFactProps) => {
  return (
    <div>
      <h3>Fact:</h3>
      <p>{fact}</p>
    </div>
  );
};

/**
 * Interface Segregation Principle
 *
 * Indica que los clientes no deben verse obligados a depender de interfaces que no utilizan.
 */
const Isp = () => {
  return <ArtistFact fact={artist.fact} />;
};

export default Isp;
