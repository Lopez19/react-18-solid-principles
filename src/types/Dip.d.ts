export interface DipProps {
  fetchData: () => Promise<never[]>;
  // eslint-disable-next-line no-unused-vars
  renderItem: (item: never) => React.JSX.Element;
}
