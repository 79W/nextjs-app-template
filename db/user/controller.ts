import userModel from "./model";

// 创建一个新用户
export const createUser = async (name: string, email: string) => {
  const user = await userModel.create({ name, email });
  console.log("创建用户: ", user.toJSON());
};

// 获取用户
export const getUser = async () => {
  const user = await userModel.findAll();
  console.log("获取用户: ", user);
  return user;
};

// 更新用户
export const updateUser = async (id: number, name: string, email: string) => {
  const user = await userModel.update({ name, email }, { where: { id } });
  console.log("更新用户: ", user);
};

// 删除用户
export const deleteUser = async (id: number) => {
  const user = await userModel.destroy({ where: { id } });
  console.log("删除用户: ", user);
};
