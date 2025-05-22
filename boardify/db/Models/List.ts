import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '@/lib/sequelize';

// import Board from './Board';
interface ListAttributes {
  id: string;
  title: string;
  order: number;
  boardId: string;
  createdAt?: Date;
  updatedAt?: Date;
}

type ListCreationAttributes = Optional<ListAttributes, 'id'>;
class List extends Model<ListAttributes, ListCreationAttributes> {}

List.init(
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
    order: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    boardId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'List',
    tableName: 'lists',
    timestamps: true,
  }
);

export default List;
