export const getAllstarships = async () => {
  try {
    const response = await fetch(
      ` https://swapi.dev/api/starships/?format=json`
    );
    console.log(response);

    const data = await response.json();
    console.log(data);

    return data;
  } catch (e) {
    console.error(e);
  }
};
