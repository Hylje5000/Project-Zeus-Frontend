import axios from 'axios'

import INFO from 'constants'

export const changeAccess = (channelId, bool) => (dispatch, getState) => {
    const { token } = getState().main
    return axios.post(`${INFO.backendUrl}/api/`, {
        channelId,
        bool,
        token
    })
}
