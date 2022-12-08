import express from "express";

import authRouter from "./src/routes/auth.router.js";
import homeRouter from "./src/routes/home.router.js";
import profileRouter from "./src/routes/profile.router";
import submitRouter from "./src/routes/submit.router.js";
import visorRouter from "./src/routes/visor.router.js";


import { PORT } from "./src/configs/environment.js";
import connectDB from "./src/configs/mongo.js";


const app = express();

app.use(express.json());

app.use("/auth", authRouter);
app.use("/profile", profileRouter);
app.use("/submit", submitRouter);
app.use("/visor", visorRouter);
app.use("/", homeRouter);


async function startSever() {
	const isConnected = await connectDB();
	if (isConnected) {
		app.listen(PORT, () => {
			console.log(`Server started on ${PORT}`);
		});
	} else {
		process.exit();
	}
}

startSever();
