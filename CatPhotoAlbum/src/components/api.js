const API_END_POINT = 'https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev'

const request = (nodeId) => {
    fetch(`${API_END_POINT}/${nodeId ? nodeId : ''}`).then(
        (response) => {
            if (!response.ok){
                throw new Error('서버의 상태가 이상합니다.')
            }
            return response.json()
        }).catch((e) => {
            throw new Error(`오류가 발생했습니다. ${e.message}`)
        })
}