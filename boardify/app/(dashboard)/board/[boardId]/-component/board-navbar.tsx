import Board from '@/db/Models/Board';
import { BoardTitleForm } from './board-title-form';
import { BoardOptions } from './board-options';
import { InferAttributes } from 'sequelize';
interface BoardNavbarProps {
  data: InferAttributes<Board>; // Type-safe plain object shape of the Board model
}

export const BoardNavbar = async ({ data }: BoardNavbarProps) => {
  return (
    <div className="w-full h-14 z-[40] bg-black/50 fixed top-14 flex items-center px-6 gap-x-4 text-white">
      <BoardTitleForm data={data} />
      <div className="ml-auto">
        <BoardOptions id={data.id} />
      </div>
    </div>
  );
};
