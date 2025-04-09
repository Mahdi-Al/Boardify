'use server';
import { InputType, ReturnType } from './types';
import { auth } from '@clerk/nextjs/server';
import Board from '@/db/Models/Board';
import { revalidatePath } from 'next/cache';
import { createSafeAction } from '@/lib/createSafeAction';
import { CreateBoard } from './schema';

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId } = await auth();
  if (!userId) {
    return {
      error: 'Unauthorized',
      fieldErrors: {
        title: ['You must be logged in to create a board'],
      },
    };
  }

  const { title } = data;

  try {
    const board = await Board.create({ title });
    const plainBoard = board.get({ plain: true });
    revalidatePath(`/board/${plainBoard.id}`);
    return { data: plainBoard };
  } catch (error) {
    console.error(error);
    return {
      error: 'Failed to create board',
      fieldErrors: {
        title: ['Database error occurred'],
      },
    };
  }
};

export const createBoard = createSafeAction(CreateBoard, handler);
