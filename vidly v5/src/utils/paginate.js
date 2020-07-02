import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  const length = items.length;
  return _(items).slice(startIndex, length).take(pageSize).value();
}
