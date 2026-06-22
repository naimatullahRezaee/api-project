import NavBar from "../../components/navbar/NavBar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./AddArticle.css";
// import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import { toast } from "sonner";

const AddArticle = () => {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    writter: "",
    category: "",
    image: "",
    readingTime: "",
  });

  // const addArticleHandler = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post(
  //       "http://localhost:3000/articles",
  //       formData,
  //     );

  //     if (response.status === 201 || response.status === 200) {
  //       toast.success("Article created successfully", {
  //         position: "top-center",
  //         description: "Your article has been saved.",
  //         duration: 5000,
  //       });

  //       console.log(response.status);

  //       // Reset form
  //       setFormData({
  //         title: "",
  //         desc: "",
  //         writter: "",
  //         category: "",
  //         image: "",
  //         readingTime: "",
  //       });
  //     }
  //   } catch (error) {
  //     console.error(error);

  //     Swal.fire({
  //       title: "مقاله ساخته نشد",
  //       icon: "error",
  //       timer: 1500,
  //       timerProgressBar: true,
  //       showConfirmButton: false,
  //     });

  //     toast.error("Failed to create article", {
  //       position: "top-center",
  //       description: "Something went wrong while saving the article.",
  //       duration: 5000,
  //     });
  //   }
  // };

  const addArticleHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/articles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to create article");
      }

      const data = await response.json();

      toast.success("Article created successfully", {
        position: "top-center",
        description: "Your article has been saved.",
        duration: 5000,
      });

      console.log(data);

      setFormData({
        title: "",
        desc: "",
        writter: "",
        category: "",
        image: "",
        readingTime: "",
      });
    } catch (error) {
      console.error(error);

      Swal.fire({
        title: "مقاله ساخته نشد",
        icon: "error",
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false,
      });

      toast.error("Failed to create article", {
        position: "top-center",
        description: "Something went wrong while saving the article.",
        duration: 5000,
      });
    }
  };

  const formHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <NavBar />

      <div className="formContainer">
        <Form onSubmit={addArticleHandler}>
          <Form.Group className="mb-3">
            <Form.Label>عنوان مقاله</Form.Label>
            <Form.Control
              value={formData.title}
              name="title"
              onChange={formHandler}
              type="text"
              placeholder="عنوان مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>توضیح کوتاه</Form.Label>
            <Form.Control
              value={formData.desc}
              name="desc"
              onChange={formHandler}
              type="text"
              placeholder="یه توضیح کوتاه در مورد مقاله وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>نویسنده مقاله</Form.Label>
            <Form.Control
              value={formData.writter}
              name="writter"
              onChange={formHandler}
              type="text"
              placeholder="نام نویسنده مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>موضوع مقاله</Form.Label>
            <Form.Control
              value={formData.category}
              name="category"
              onChange={formHandler}
              type="text"
              placeholder="موضوع مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>عکس مقاله</Form.Label>
            <Form.Control
              value={formData.image}
              name="image"
              onChange={formHandler}
              type="text"
              placeholder="آدرس عکس مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>مدت زمان خواندن</Form.Label>
            <Form.Control
              value={formData.readingTime}
              name="readingTime"
              onChange={formHandler}
              type="number"
              placeholder="مثلاً 5"
            />
          </Form.Group>

          <Button variant="primary" type="button">
            ساخت مقاله
          </Button>
        </Form>
      </div>
    </>
  );
};

export default AddArticle;
