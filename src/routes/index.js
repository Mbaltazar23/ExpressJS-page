import { Router } from "express";

const router = Router();

router.get("/", (req, res) =>
  res.render("index", { title: "Primera pagina de Node " })
);

router.get("/about", (req, res) =>
  res.render("about", { title: "Pagina en about" })
);
router.get("/contact", (req, res) =>
  res.render("contact", { title: "Pagina en contact" })
);

export default router;
