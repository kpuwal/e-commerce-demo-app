import {
  Link,
  useSearchParams,
  useResolvedPath,
  useMatch
} from "react-router-dom";
import type { LinkProps } from "react-router-dom";

interface CategoryLinkProps extends Omit<LinkProps, "to"> {
  categoryName: string;
}

export function CategoryLink({ categoryName, children, ...props }: CategoryLinkProps) {
  let [searchParams] = useSearchParams();
  let isActive = searchParams.get("category") === categoryName;

  return (
    <Link
      to={`/?category=${categoryName}`}
      {...props}
      style={{
        ...props.style,
        color: isActive ? "red" : "black",
      }}
    >
      {children}
    </Link>
  );
}

export function CustomLink({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to);
  
  let match = useMatch({ path: resolved.pathname, end: true });
  

  return (
    <div>
      <Link
        style={{ textDecoration: match ? "underline" : "none" }}
        to={to}
        {...props}
      >
        {children}
      </Link>
      {match && " (active)"}
    </div>
  );
}