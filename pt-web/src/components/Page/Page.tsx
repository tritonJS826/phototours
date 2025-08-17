import {PropsWithChildren, useEffect} from "react";
import {Container} from "src/components/Container/Container";

export function Page({title, children}: PropsWithChildren<{title?: string}>) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);

  return (
    <Container>
      {children}
    </Container>
  );
}
