import axios from "axios"

async function getData() {
    const res = await axios.get('http://localhost:3000/api/Product')
    return res.data
}
async function getCategory() {
    const res = await axios.get('http://localhost:3000/api/Category')
    return res.data
}
export {getData, getCategory}