export interface TextProps {
  text: string;
  children: React.ReactNode;
}

export interface TextWithLinkProps {
  text: string;
  link: string;
}

export interface TextWithActionProps {
  text: string;
  action: () => void;
}
