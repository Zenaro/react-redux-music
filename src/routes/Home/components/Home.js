import React from 'react'
// import DuckImage from '../assets/Duck.jpg'
import './Home.scss'

export const Home = (props) => (
  <div>
    <div className="wrap">
    	<div className="cloumn main-top">
      </div>
      <div className="column main-hot">
        <div className="section">
          <h3>热门歌单<span>PLAYLIST</span></h3>
          <span>a{props.counter}</span>
          <ul className="hot-list" id="hot-list">
          	{[1, 2, 3].map((index, value) => {
          		return (
								<li key={index}>{value}</li>
	          	);
          	})}
          </ul>
        </div>
      </div>

      <div className="column main-rank">
        <div className="section">
            <h3>排行榜<span>RANKLIST</span></h3>
            <div className="rank">
            	{
            		[1, 2, 3].map((index, value)=> {
            			return (
										<dl className="rank-blk" key={index}>
		                  <dt className="top">
		                    <a href="javascript:;" className="dt-img">
		                    	<img src="item.logo" alt=""/>
		                    </a>
		                    <div className="dt-txt">
		                      <a href="javascript:;" className="title" data-text="item.title"></a>
		                      <a href="javascript:;" className="icon icon-play"></a>
		                      <a href="javascript:;" className="icon icon-store" data-type="item.dataType"></a>
		                    </div>
		                  </dt>
			              </dl>
            			);
            		})
            	}
            </div>
        </div>
      </div>
	  </div>
  </div>
)

// ############################------
// Home.propTypes = {
//   counter: React.PropTypes.number.isRequired,
//   doubleAsync: React.PropTypes.func.isRequired,
//   increment: React.PropTypes.func.isRequired
// }

export default Home