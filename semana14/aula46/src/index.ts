import { Request, Response } from "express";
import app from "./app";
import {
  getActorById,
  getActorByName,
  countActorByGender,
  updateSalaryById,
  deleteActorById,
  averageSalary,
} from "./endpoints/actor";
import { createMovie, getAllMovies, searchMovies } from "./endpoints/movie";

app.get("/actor/", async (req: Request, res: Response) => {
  try {
    const name: string = req.query.name as string;
    const result = await getActorByName(name);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.get("/actor", async (req: Request, res: Response) => {
  try {
    const gender: string = req.query.gender as string;
    const result = await countActorByGender(gender);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.put("/actor/salary/:id", async (req: Request, res: Response) => {
  try {
    const update = await updateSalaryById(req.params.id, req.body.salary);
    res.status(200).send("Salário atualizado!");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.delete("/actor/:id", async (req: Request, res: Response) => {
  try {
    await deleteActorById(req.params.id);
    res.status(200).send("Ator deletado com sucesso!");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.get(
  "/actor/average/salary/:gender",
  async (req: Request, res: Response) => {
    try {
      const gender: string = req.params.gender as string;
      const result = await averageSalary(gender);
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
);

app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id);
    res.status(200).send(actor);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.post("/movie/create", async (req: Request, res: Response) => {
  try {
    const {
      id,
      title,
      synopsis,
      release_date,
      rating,
      playing_limit_date,
    } = req.body;
    createMovie(id, title, synopsis, release_date, rating, playing_limit_date);

    res.status(200).send("Filme Cadastrado!");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.get("/movie/all", async (req: Request, res: Response) => {
  try {
    const result = await getAllMovies();

    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.get("/movie/search", async (req: Request, res: Response) => {
  try {
    const text: string = req.query.query as string;
    const result = await searchMovies(text);

    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
