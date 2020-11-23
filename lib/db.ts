import mysql from 'serverless-mysql';

const db = mysql({
  config: {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
});

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  query: async (query) => {
    try {
      const results = await db.query(query);
      await db.end();
      return results;
    } catch (error) {
      return { error };
    }
  },
};
