import {
  TextProps,
  TextWithActionProps,
  TextWithLinkProps,
} from "../types/Ocp";

/**
 * Open/Closed Principle
 *
 * Indica que las entidades de software (clases, módulos, funciones, etc.) deben estar abiertas para su extensión, pero cerradas para su modificación.
 */
export const Text = ({ children, text }: TextProps) => {
  return (
    <div style={{ color: "red" }}>
      <h1>{text}</h1>
      {children}
    </div>
  );
};

export const TextWithLink = ({ text, link }: TextWithLinkProps) => {
  return (
    <Text text={text}>
      <a href={link} title={text} />
    </Text>
  );
};

export const TextWithAction = ({ text, action }: TextWithActionProps) => {
  return (
    <Text text={text}>
      <button onClick={action}>Action</button>
    </Text>
  );
};
