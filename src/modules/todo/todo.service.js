import prisma from "../../helper/prisma.js";

const getTodo = async (user, todoId) => {
  const result = await prisma.todo.findFirst({
    where: {
      AND: [
        {
          userId: {
            equals: user.id,
          },
        },
        {
          id: {
            equals: todoId,
          },
        },
      ],
    },
  });

  if (!result) {
    throw new Error("Unauthorized");
  }
  return result;
};

const getAllTodo = async (user) => {
  const result = await prisma.todo.findMany({
    where: {
      userId: user.id,
    },
  });
  return result;
};

const createTodo = async (user, todo) => {
  const result = await prisma.todo.create({
    data: {
      userId: user.id,
      ...todo,
    },
  });
  return result;
};

const updateTodo = async (user, todoId, todo) => {
  const userTodo = await prisma.todo.findFirst({
    where: {
      AND: [
        {
          userId: {
            equals: user.id,
          },
        },
        {
          id: {
            equals: todoId,
          },
        },
      ],
    },
  });
  if (!userTodo) {
    throw new Error("Unauthorized");
  }
  const updatedTodo = await prisma.todo.update({
    where: {
      id: userTodo.id,
    },
    data: {
      ...todo,
    },
  });
  return updatedTodo;
};

const deleteTodo = async (user, todoId) => {
  const userTodo = await prisma.todo.findFirst({
    where: {
      AND: [
        {
          userId: {
            equals: user.id,
          },
        },
        {
          id: {
            equals: todoId,
          },
        },
      ],
    },
  });
  if (!userTodo) {
    throw new Error("Unauthorized");
  }
  const result = await prisma.todo.delete({
    where: {
      id: userTodo.id,
    },
  });
  return { success: true, message: "Todo Deleted" };
};
export const todoService = {
  getTodo,
  createTodo,
  getAllTodo,
  updateTodo,
  deleteTodo,
};
