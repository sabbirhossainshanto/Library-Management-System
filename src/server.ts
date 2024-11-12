import { Server } from "http";
import app from "./app";
const port = 3000;

async function main() {
  try {
    const server: Server = app.listen(port, () => {
      console.log(`Library management app running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
