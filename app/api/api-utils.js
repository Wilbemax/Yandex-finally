export const getData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

const normalizeDataObject = (obj) => {
  return {
    ...obj,
    category: obj.categories,
    users: obj.users_permissions_users,
  };
};

export const normalizeData = (data) => {
    return data.map((item) => {
      return normalizeDataObject(item);
    });
};

export const getNormalizedData = async (url) => {
    const data = await getData(url);
    return normalizeData(data);
}