import Nodes from './Node.js';
import BreadCrumb from './BreadCrumb.js';
import {
    request
} from './Api.js';

// $ - 예약어를 피하기 위해 선택자로 전달된 변수를 명시하기 위해서 사용
export default function App($app) {
    this.state = {
        isRoot: false,
        nodes: [],
        depth: []
    }

    const breadCrumb = new BreadCrumb({
        $app,
        initialState: this.state.depth
    });


    // 이를 nodes라고 칭하고 이를 관리하기 위해 Nodes compoenent를 둠
    const nodes = new Nodes({
        $app,
        initialState: [],
        onClick: async (node) => {
            try {
                if (node.type === 'DIRECTORY') {
                    const nextNodes = await request(node.id)
                    this.setState({
                        ...this.state,
                        depth: [...this.state.depth, node],
                        nodes: nextNodes
                    })
                } else if (node.type === 'FILE') {

                }
            } catch (e) {
                throw new Error("에러가 발생했습니다. ", e)
            }
        }
    });

    this.setState = (nextState) => {
        this.state = nextState
        breadCrumb.setState(this.state.depth)
        nodes.setState({
            isRoot: this.state.isRoot,
            nodes: this.state.nodes
        })
    }

    const init = async () => {
        try {
            const rootNodes = await request()
            console.log(rootNodes)
            this.setState({
                ...this.state,
                isRoot: true,
                nodes: rootNodes
            })
        } catch (e) {
            throw new Error("오류가 발생했습니다.", e)
        }
    }
    init()
}