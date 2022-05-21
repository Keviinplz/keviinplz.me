import { useRouter } from "next/router";
import Link from "next/link";

import StyledLink from "./styles";

interface LinkComponentProps {
  href: string;
  children: React.ReactNode;
}

const LinkComponent: React.FC<LinkComponentProps> = ({ href, children }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link href={href}>
      <StyledLink isActive={isActive}>{children}</StyledLink>
    </Link>
  );
};

export default LinkComponent;
