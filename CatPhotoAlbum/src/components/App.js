import Nodes from './Node.js';
import BreadCrumb from './BreadCrumb.js';

// $ - 예약어를 피하기 위해 선택자로 전달된 변수를 명시하기 위해서 사용
export default function App($app) {
    this.state = {
        isRoot : false,
        nodes : [
            {
                  "id": "1",
                  "name": "노란고양이",
                  "type": "FILE",
                  "filePath": null,
                  "parent": null
              },
              {
                  "id": "3",
                  "name": "까만고양이",
                  "type": "FILE",
                  "filePath": null,
                  "parent": null
              }
          ],
        depth : []
    }

    // const breadCrumb = new BreadCrumb({
    //     $app,
    //     initialState: this.state.depth
    // });


    // 이를 node라고 칭하고 이를 관리하기 위해 Nodes compoenent를 둠
    const node = new Nodes({
        $app,
        initialState: {
            isRoot : this.state.isRoot,
            nodes : this.state.nodes
        },
        onClick : (node) =>{
            if (node.type === 'DIRECTORY') {

            } else if (node.type === 'FILE') {

            }
        }
    });
}