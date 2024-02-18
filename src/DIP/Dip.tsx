import React from "react";
import { DipProps } from "../types/Dip";

/**
 * Dependency Inversion Principle
 *
 * Indica que los módulos de alto nivel no deben depender de los módulos de bajo nivel, sino que ambos deben depender de abstracciones.
 */
const Dip = ({ fetchData, renderItem }: DipProps) => {
  const [data, setData] = React.useState<never[]>([]);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    fetchData().then(setData).catch(setError);
  }, [fetchData]);

  if (error) {
    return <div>Error loading data!</div>;
  }

  return <ul>{data.map((item) => renderItem(item))}</ul>;
};

export default Dip;
