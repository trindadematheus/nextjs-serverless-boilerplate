import express from "express";
import swaggerUi from "swagger-ui-express";
import morgan from "morgan";
import cors from "cors";

const app = express();
const port = 3333;

app.use(express.static("public"));
app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());
app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    customCssUrl: "https://unpkg.com/swagger-ui-dist@3.52.5/swagger-ui.css",
    swaggerOptions: {
      url: "/swagger.json",
    },
  })
);

app.get("/", async (_, res) => {
  return res.json({ ok: true });
});

app.listen(port, () => {
  console.log(`🔥 app listening at http://localhost:${port}`);
});
