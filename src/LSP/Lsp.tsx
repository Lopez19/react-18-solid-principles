import { User } from "../types/Lsp";

const SayHello = ({ name }: User) => <h1>Hello {name}</h1>;
// const SayGoodbye = ({ name }: User) => <h1>Goodbye {name}</h1>;

/**
 * Liskov Substitution Principle For Interface
 *
 * Indica que los objetos de un programa deben ser reemplazables por instancias de sus subtipos
 */
const Lsp = () => {
  const name = "@johndoe";
  return (
    <div className="App">
      <SayHello name={name} />
    </div>
  );
};

export default Lsp;
