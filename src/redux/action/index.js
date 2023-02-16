import API from "../../config/api"

// action creator
export const fetchData = () => async dispatch => {
    const data  = await API.get("/posts")

    dispatch({
        type: "SHOW_DATA",
        data: data
    })
}
