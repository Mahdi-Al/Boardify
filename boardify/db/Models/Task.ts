import { DataTypes, Model } from 'sequelize';
import sequelize from '@/lib/sequelize';

class Task extends Model {}

Task.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: 'Task',
    tableName: 'tasks', // Explicit table name
    timestamps: true, // Ensure createdAt/updatedAt are added
  }
);

export default Task;
