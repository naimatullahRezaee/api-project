import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../../components/navbar/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";
import "./EditArticle.css";
import { Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";

function EditArticle() {
  const articleId = useParams().articleId;
  const navigate = useNavigate();

  const [articleData, setArticleData] = useState({
    title: "",
    desc: "",
    writter: "",
    category: "",
    image: "",
    readingTime: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3000/articles/${articleId}`)
      .then((response) => setArticleData(response.data));
  }, [articleId]);

  const editArticleHandler = () => {
    axios.put(`http://localhost:3000/articles/${articleId}`, articleData);
    Swal.fire({
      title: "مقاله با موفقیت ویرایش شد",
      timer: 1500,
      timerProgressBar: true,
      showConfirmButton: false,
    });

    navigate("/");
  };

  const formHandler = (e) => {
    setArticleData({ ...articleData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <NavBar />
      <div className="formContainer">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>عنوان مقاله</Form.Label>
            <Form.Control
              value={articleData.title}
              name="title"
              onChange={formHandler}
              type="text"
              placeholder="عنوان مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>توضیح کوتاه</Form.Label>
            <Form.Control
              value={articleData.desc}
              name="desc"
              onChange={formHandler}
              type="text"
              placeholder="یه توضیح کوتاه در مورد مقاله وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>نویسنده مقاله</Form.Label>
            <Form.Control
              value={articleData.writter}
              name="writter"
              onChange={formHandler}
              type="text"
              placeholder="نام نویسنده مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>موضوع مقاله</Form.Label>
            <Form.Control
              value={articleData.category}
              name="category"
              onChange={formHandler}
              type="text"
              placeholder="موضوع مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>عکس مقاله</Form.Label>
            <Form.Control
              value={articleData.image}
              name="image"
              onChange={formHandler}
              type="text"
              placeholder="عکس مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>مدت زمان خواندن</Form.Label>
            <Form.Control
              value={articleData.readingTime}
              name="readingTime"
              onChange={formHandler}
              type="number"
              placeholder=""
            />
          </Form.Group>

          <Button onClick={editArticleHandler} variant="primary" type="button">
            ساخت مقاله
          </Button>
        </Form>
      </div>
    </>
  );
}

export default EditArticle;
