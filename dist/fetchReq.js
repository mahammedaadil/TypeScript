"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        if (!response.ok) {
            throw Error("Failed To Fetch");
        }
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        throw Error("failed to fetch");
    }
};
fetchData();
//# sourceMappingURL=fetchReq.js.map