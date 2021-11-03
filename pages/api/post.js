import DBService from '../../services/mongodb.js';
import { only } from '../../utils.js';

export default async function handlePost({ body, method }, response) {
  only(method, 'POST', response);

  const snippetPost = await DBService.newSnippet(body.snippet);

  response.status(200).json(snippetPost);
}
