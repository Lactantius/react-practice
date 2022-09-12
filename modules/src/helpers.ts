function choice(items: any[]): any {
  const idx = Math.floor(Math.random() * items.length);
  return items[idx];
}

function remove(items: any[], item: any): any {
  const idx = items.findIndex((el) => el === item);
  return items.splice(idx, 1);
}

export { choice, remove };
