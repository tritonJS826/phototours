import {HelloButton} from "src/components/ButtonHello/ButtonHello";
import {Link} from "src/components/ui/link/Link";

export function App() {
  return (
    <div>
      <HelloButton />
      <Link href="https://www.google.com">
        Go to google
      </Link>
    </div>
  );
}
