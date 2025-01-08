const lcstorage = window.localStorage;
// 设置
const set = (key, value) => {
  // {
  //   username: "alex"
  // }
  lcstorage.setItem(key, JSON.stringify(value));
};

// 获取
const get = (key) => {
  return JSON.parse(lcstorage.getItem(key));
};

// 删除
const remove = (key) => {
  lcstorage.removeItem(key);
};

// 清空
const clear = () => {
  lcstorage.clear();
};

// 暴露函数
export {set, get, remove, clear};