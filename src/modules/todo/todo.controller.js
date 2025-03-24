import catchAsync from "../../helper/catchAsync.js";
import { todoService } from "./todo.service.js";

const getTodo = catchAsync(async (req, res, next) => {
  const result = await todoService.getTodo(req.user, req.params.id);
  res.send(result);
});

const getAllTodo = catchAsync(async (req, res, next) => {
  const result = await todoService.getAllTodo(req.user);
  res.send(result);
});

const createTodo = catchAsync(async (req, res, next) => {
  const result = await todoService.createTodo(req.user, req.body);
  res.send(result);
});

const updateTodo = catchAsync(async (req, res, next) => {
  const result = await todoService.updateTodo(
    req.user,
    req.params.id,
    req.body,
  );
  res.send(result);
});
const deleteTodo = catchAsync(async (req, res, next) => {
  const result = await todoService.deleteTodo(req.user, req.params.id);
  res.send(result);
});
export const todoController = {
  getTodo,
  createTodo,
  getAllTodo,
  updateTodo,
  deleteTodo,
};
