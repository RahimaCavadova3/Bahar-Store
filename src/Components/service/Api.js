import axios from "axios"

async function getData() {
    const res = await axios.get('https://bahar-store-api.vercel.app/api/Product')
    return res.data
}
async function getCategory() {
    const res = await axios.get('https://bahar-store-api.vercel.app/api/Category')
    return res.data
}
export {getData, getCategory}