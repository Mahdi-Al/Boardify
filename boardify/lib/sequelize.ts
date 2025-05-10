// lib/sequelize.ts
import { Sequelize } from 'sequelize';
import pg from 'pg';
import { initAuditLogModel } from '@/db/Models/audit-log';
const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined in environment variables');
}

const sequelize = new Sequelize(DATABASE_URL, {
  host: 'localhost',
  dialect: 'postgres',
  dialectModule: pg,
  logging: false, // Enable logging for debugging
  retry: {
    max: 3,
    timeout: 5000,
    match: [/database ".*" does not exist/],
  },
});
initAuditLogModel(sequelize);
// Test connection
// In your sequelize.ts or initialization file
sequelize
  .sync({ alter: true })
  .then(() => console.log('All models synchronized'))
  .catch(console.error);
export default sequelize;
