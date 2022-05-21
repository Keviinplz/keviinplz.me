import StyledMain from './styles';

type ContentProps = {
  children: React.ReactNode;
};

const Content: React.FC<ContentProps> = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

export default Content;