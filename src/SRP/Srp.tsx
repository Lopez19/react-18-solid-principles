import { useFetchDogs } from "../hooks/useFetchDogs";

/**
 * Single Responsibility Principle
 *
 * Indica que una clase debe tener una sola razón para cambiar, es decir, una sola responsabilidad.
 */
export const Srp = () => {
  const { dog } = useFetchDogs();

  return (
    <div>
      Dog fact <p>fact: {dog}</p>
    </div>
  );
};

export default Srp;
