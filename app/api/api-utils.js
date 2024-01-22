export const getData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

export const normalizeData = (data) => {
    return data.map((item) => {
      return {
        ...item,
        category: item.categories,
        users: item.users_permissions_users,
      };
    });
};

export const getNormalizedData = async (url) => {
    const data = await getData(url);
    return normalizeData(data);
}