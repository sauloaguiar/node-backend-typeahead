import express, { Express, Request, Response } from 'express';
import { Trie } from './trie';

const app: Express = express();
const port = process.env.PORT || 3000;

const trie = new Trie<number>();
trie.insert('apple', 1);
trie.insert('tax', 2);

app.get('/typeahead', (req: Request, res: Response) => {
  const { q } = req.query;
  console.log('q', q);
  const answer = trie.possibilities(q as string);
  res.json({ possibilies: answer });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
