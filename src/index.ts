#!/usr/bin/env node
import { server } from './intercom-server';

const main = () => {
  const port = process.env.PORT || 4567;
  server.start({ port }).then(() => {
    console.log(`🚀 Listening on http://localhost:${port} `);
  });
};

if (require.main === module) {
  main();
}
