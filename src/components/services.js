function fatchImage(searchName, pages) {
  const key = `22330478-3bd9f5a2d8db4972b1e40fa44`;
  return fetch(
    `https://pixabay.com/api/?q=${searchName}&page=${pages}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`no images on request`));
  });
}
const api = { fatchImage };
export default api;
