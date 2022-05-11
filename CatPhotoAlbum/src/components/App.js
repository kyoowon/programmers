import Nodes from './Node.js'

// $ - 예약어를 피하기 위해 선택자로 전달된 변수를 명시하기 위해서 사용
export default function App($app) {

    // 초기에 시작되었을 때 상태를 확인 - test 예시 값으로 확인.
    const initialState = {
        nodes : [
            {
                  "id": "1",
                  "name": "노란고양이",
                  "type": "DIRECTORY",
                  "filePath": null,
                  "parent": null
              },
              {
                  "id": "3",
                  "name": "까만고양이",
                  "type": "DIRECTORY",
                  "filePath": null,
                  "parent": null
              },
          ]
    }

    // 이를 node라고 칭하고 이를 관리하기 위해 Nodes compoenent를 둠
    const node = new Nodes({
        $app,
        initialState
    })

}