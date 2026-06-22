import { Col, Container, Row } from "react-bootstrap";
import ItemArticle from "../../components/itemArticle/ItemArticle";
import NavBar from "../../components/navbar/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/articles")
      .then((response) => setArticles(response.data));
  }, []);
  return (
    <>
      <NavBar />

      <Container>
        <h1 className="mt-4 lalezar">لیست مقالات</h1>
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gy-4 py-3">
          {articles.map((article) => (
            <Col key={article.id}>
              <ItemArticle {...article} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;
