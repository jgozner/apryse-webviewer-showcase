import type { VercelRequest, VercelResponse } from '@vercel/node';
 
module.exports = (request: VercelRequest, response: VercelResponse) => {
  response
  .status(200)
  .send(`Hello!`);
}