import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";
const options = {
  params: {
    hl: "en",
    gl: "US",
  },
  headers: {
    "X-RapidAPI-Key": "78f08db682msh91eac6a0e82a1f5p1ab3d7jsn6a3d5c6a8ce5",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

//you can use your api


// fe2edb2be9msh3699fd936bb35dcp19192djsn75bbdad437ed
// cfc7aca2e4msh4fc6f6fe59e78b7p1ffd7ejsn25fe87157b3c
// 6dc83ec43dmshc1e33a736cc7fcfp13d061jsn535c6f4efa23