
// 초기에 상태가 전달되어 온다면
export default function Nodes({ $app, initialState, onClick }){
    this.state = initialState
    this.$target = document.createElement('ul')
    $app.appendChild(this.$target);
    
    // 다음 값으로 넘어간다면 state를 업데이트하기 위해서 사용
    this.setState = (nextState) => {
        this.state = nextState;
        this.render()
    }

    // state 업데이트 할 때마다 $target에 해당 state의 node를 render
    this.render = () => {
        if (this.state.nodes) {
            const nodeTemplate = this.state.nodes.map(node => {
                const iconPath = node.type === 'FILE' ? './assets/file.png' : './assets/directory.png';
                return `
                <div class="Node" data-node-id="${node.id}">
                    <img src="${iconPath}" />
                    <div>${node.name}</div>
                </div>
                `
            }).join('')

            this.$target.innerHTML = !this.state.isRoot ? `<div class="Node"><img src="/assets/prev.png"></div>${nodeTemplate}` : nodeTemplate
        }

        this.onClick = onClick;

        this.$target.querySelectorAll('.Node').forEach($node => {
            $node.addEventListener('click', (e) => {
                const { nodeId } = e.target.parentElement.dataset
                const selectNode = this.state.nodes.find(node => node.id === nodeId)
                if (selectNode){
                    this.onClick(selectNode)
                }
            })
        })


    }




    this.render()



}