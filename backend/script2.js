// const res = await fetch("http://localhost:3000/comment",{
//     method: "POST",
//     body: JSON.stringify({ comment: "This is a comment" }),
//     headers: {
//         "Content-Type": "application/json",
//     },
// });
// const data = await res.json();
// console.log(data);

import axios from "axios";

// const res = await axios("http://localhost:3000/comment");
// console.log(res.data);

// const res = await axios.post("http://localhost:3000/comment", {
//     comment: "This is a another comment",});

// const res = await axios.put("http://localhost:3000/comment/19", {
//     comment: "This is a modify comment",});

// const res = await axios.delete("http://localhost:3000/comment/18");
// console.log(res.data);

const res = await fetch("http://localhost:3000/comment");
const data = await res.json();
console.log(data);