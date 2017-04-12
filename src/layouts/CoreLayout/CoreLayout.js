import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Player from '../../components/Player'
import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({
	children
}) => (
	<div className='container-fluid'>
    <Header />
    <div className='core-layout__viewport'>
      {children}
    </div>
    <Footer/>
    <Player/>
  </div>
);

CoreLayout.propTypes = {
	children: React.PropTypes.element.isRequired
};

export default CoreLayout
