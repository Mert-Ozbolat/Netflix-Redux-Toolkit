import Client from "./instance";

export async function getRequest(URL, params) {
    const responce = await Client.get(URL, { params: params })
    return responce;
}

export async function postRequest(URL, payload) {
    const responce = await Client.post(URL, payload)
    return responce;
}

export async function patchRequest(URL, payload) {
    const responce = await Client.patch(URL, payload)
    return responce;
}

export async function putRequest(URL, payload) {
    const responce = await Client.put(URL, payload)
    return responce;
}

export async function deleteRequest(URL, payload) {
    const responce = await Client.delete(URL, payload)
    return responce;
}
