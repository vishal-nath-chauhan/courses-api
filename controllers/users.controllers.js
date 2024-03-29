import * as usersService from './../services/users.services.js';
import catchAsync from './../utils/catch-async.utils.js';

export const createUser = catchAsync(async (req, res) => {
  const data = req.body;
  const user = await usersService.createNewUser(data);

  res.status(201).json({
    success: true,
    items: user,
  });
});

export const getAllUsers = catchAsync(async (req, res) => {
  const data = req.query;
  const users = await usersService.getAllCategories(data);

  res.status(201).json({
    success: true,
    items: users,
  });
});
