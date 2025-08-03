import {Container} from "src/components/Container/Container";

export function NotFound() {
  return (
    <Container>
      <div>
        <h1>
          404 - Page Not Found
        </h1>
        <p>
          The page you are looking for does not exist.
        </p>
        <a href="/">
          Go back to Home
        </a>
      </div>
    </Container>
  );
}
