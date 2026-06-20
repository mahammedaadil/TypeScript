interface UserData {
  userId: string;
  id: number;
  title: string;
  completed: boolean;
}

const fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!response.ok) {
      throw Error("Failed To Fetch");
    }
    const data: UserData = await response.json();
    console.log(data);
  } catch (error) {

    throw Error("failed to fetch")
  }
};
fetchData()