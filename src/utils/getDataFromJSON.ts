function getDataFromJSON<Type>(json: { [title: string]: any }): Type[] {
  const titles = Object.keys(json);
  return titles.map(title => json[title]);
}

export default getDataFromJSON;