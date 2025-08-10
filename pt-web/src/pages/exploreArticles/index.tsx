import {FirstArticle} from "src/components/Articles/FirstArticle";
import {FourthArticle} from "src/components/Articles/FourthArticle";
import {SecondArticle} from "src/components/Articles/SecondArticle";
import {ThirdArticle} from "src/components/Articles/ThirdArticle";
import {Container} from "src/components/Container/Container";

export function ExploreArticles() {
  return (
    <Container>
      <FirstArticle />
      <SecondArticle />
      <ThirdArticle />
      <FourthArticle />
    </Container>
  );
}
