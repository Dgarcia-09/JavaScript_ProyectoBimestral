import { config } from "dotenv";
import { initServer } from "./configs/server.js";
import createAdmin from "./configs/createAdmin.js";

config();
initServer();
createAdmin();


