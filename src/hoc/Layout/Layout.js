import React, {Component} from 'react'
import classes from './Layout.module.css'
import Header from '../../components/Elements/Header/Header'
import Footer from '../../components/Elements/Footer/Footer'

class Layout extends Component {
	render() {
		return(
			<div className={classes.Layout}>

				<main>
          <Header />
					{this.props.children}
          <Footer />
				</main>

			</div>
		)
	}
}

export default Layout
