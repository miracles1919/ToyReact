import { ToyReact, Component } from './ToyReact'

class MyComponent extends Component {
	render() {
		return (
			<div>
				<span>
					!<span>{this.children}</span>
				</span>
				helloworld
			</div>
		)
	}
}

const b = <MyComponent name='aaa'>123</MyComponent>

ToyReact.render(b, document.body)
