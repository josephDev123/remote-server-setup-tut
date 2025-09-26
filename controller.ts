import { type Request, type Response } from "express";
import { connectDB } from "./db.js";

export class Controller {
  index(req: Request, res: Response) {
    res.status(200).json({ data: ["index"], msg: "index of life" });
    return;
  }

  async create(req: Request, res: Response) {
    try {
      const dbClient = await connectDB();
      const { title, description } = req.body;

      const result = await dbClient.query(
        "INSERT INTO posts(title, description) VALUES($1, $2) RETURNING *",
        [title, description]
      );

      res.json({ data: result.rows[0], msg: "data created" });
    } catch (err) {
      console.error("Error inserting data:", err);
      res.status(500).json({ msg: "Internal server error" });
    }
  }

  async find(req: Request, res: Response) {
    const dbClient = await connectDB();
    const query = await dbClient.query("SELECT * FROM posts");
    res.json({ data: query.rows, msg: "post fetch  successfully" });
    return;
  }
  delete(req: Request, res: Response) {
    res.json({ data: ["find data"], msg: "data is life" });
    return;
  }
}
