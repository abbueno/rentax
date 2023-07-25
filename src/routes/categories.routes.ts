import { Router, response } from "express";

import { Category } from "../model/Category";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    return response.status(201).json({ Category });
});

export { categoriesRoutes };

