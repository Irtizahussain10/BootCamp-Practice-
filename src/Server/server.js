import { createServer } from "miragejs";
import Books from '../JSON/books.json';

export function makeServer() {
  let server = createServer({
    routes() {
      this.namespace = "api"

      this.get("/Books", () => {
        return Books;
      })
      this.post("/add", (schema, req) => {
        const newBook = JSON.parse(req.requestBody);
        Books.push(newBook);
      })
    },

  })

  return server
}