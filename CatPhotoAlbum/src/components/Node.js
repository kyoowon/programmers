
// 초기에 상태가 전달되어 온다면
export default function Nodes({ $app, initialState }){
    this.state = initialState
    this.$target = document.createElement('ul')
    $app.appendChild(this.$target);
    
    // 다음 값으로 넘어간다면 state를 업데이트하기 위해서 사용
    this.setState = (nextState) => {
        this.state = nextState;
        this.render()
    }

    // state 업데이트 할 때마다 $target에 해당 state의 node를 그림
    this.render = () => {
        this.$target.innerHTML = this.state.nodes.map((node) =>
            `<li>${node.name}</li>`
        )
    }
    this.render()
}