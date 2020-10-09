// Dependencies
import Head from '../Head'
import Footer from '../Footer';

const Wrapper = props => (
    <div>
		<Head />
		{props.children}
		<Footer />
	</div>
)

export default Wrapper
