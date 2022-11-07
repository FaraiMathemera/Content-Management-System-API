import { body, param } from "express-validator";

class ArticleValidator {
  validateCreateUpdate() {
    return [
      body("id").optional().isNumeric().withMessage("Id should be a number"),
      body("title").notEmpty().withMessage("Title should not be empty."),
      body("authorName")
        .notEmpty()
        .withMessage("Author name should not be empty."),
      body("articleBody")
        .notEmpty()
        .withMessage("Article body should not be empty."),
      body("publishedOn").optional().isDate().withMessage("Date is invalid"),
      body("published")
        .optional()
        .isBoolean()
        .withMessage("Published should be a boolean value"),
    ];
  }

  validateId() {
    return [
      param("id")
        .notEmpty()
        .withMessage("Id should not be empty")
        .isNumeric()
        .withMessage("Id should be a number"),
    ];
  }

  validatePublish() {
    return [
      param("id")
        .notEmpty()
        .withMessage("Id should be not empty")
        .isNumeric()
        .withMessage("Id should be a number"),
      body("published")
        .notEmpty()
        .withMessage("Published state should not be empty")
        .isBoolean()
        .withMessage("Published should be boolean value"),
    ];
  }
}

export default new ArticleValidator();
