import authAxios from "./request"

export const fetchItemDetails = async (id, dob) => {
    const response = await authAxios().get(`${id}`).then((res) => res.data).catch((err) => err);
    return response;
}

export const fetchUserLoginDetails = async (id) => {
    const res = await authAxios().get(`${id}`).then((res)=> res.data).catch((err)=> err);
    return res;
}

export const fetchCheckStatusDetails = async (passportNumber, dob) => {
    const response = await authAxios().post("/checkstatus", {passportNumber, dob}).then((res)=> res.data).catch((err)=> err);
    return response;
}