function getDataFromJSON<Type>(json: { [title: string]: any }): Type[] {
  const titles = Object.keys(json);
  const data: Type[] = [];
  titles.forEach(title => {
    data.push(json[title])
  });
  return data;
}

export default getDataFromJSON;