import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '@/lib/sequelize';

interface BoardAttributes {
  id: string;
  orgId: string | null;
  title: string;
  imageId: string | null;
  imageThumbUrl: string | null;
  imageFullUrl: string | null;
  imageUserName: string | null;
  imageLinkHTML: string | null;
  createdAt?: Date;
  updatedAt?: Date;
}

type BoardCreationAttributes = Optional<
  BoardAttributes,
  'id' | 'orgId' | 'imageId' | 'imageThumbUrl' | 'imageFullUrl' | 'imageUserName' | 'imageLinkHTML'
>;

class Board extends Model<BoardAttributes, BoardCreationAttributes> {}

Board.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    orgId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    imageId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    imageThumbUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    imageFullUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    imageUserName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    imageLinkHTML: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Board',
    tableName: 'boards',
    timestamps: true,
  }
);

export default Board;
