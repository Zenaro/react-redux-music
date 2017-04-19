import React from 'react';
import './Home.scss';
import IMG_HOT1 from '../assets/banner-1.jpg';
import IMG_HOT2 from '../assets/banner-2.jpg';
import IMG_HOT3 from '../assets/banner-3.jpg';
import IMG_CREATE from '../assets/musicCreate.jpg';
import IMG_NEW from '../assets/musicNew.jpg';
import IMG_UP from '../assets/musicUp.jpg';
const HOT_INTO = [{
  img: IMG_HOT1
}, {
  img: IMG_HOT2
}, {
  img: IMG_HOT3
}];
const RANK_INFO = [{
  img: IMG_CREATE,
  text: '流行榜'
}, {
  img: IMG_UP,
  text: '新歌榜'
}, {
  img: IMG_NEW,
  text: '原创榜'
}];

export const Home = (props) => (
  <div onLoad={props.rankListInit}>
    <div className="wrap">
    	<div className="cloumn main-top">
      </div>
      <div className="column main-hot">
        <div className="section">
          <h3>热门歌单<span>PLAYLIST</span></h3>
          <ul className="hot-list" id="hot-list">
          	{HOT_INTO.map((value, index) => {
          		return (
								<li key={index}>
                  <img src={value.img} alt=""/>
                </li>
	          	);
          	})}
          </ul>
        </div>
      </div>

      <div className="column main-rank">
        <div className="section">
            <h3>排行榜<span>RANKLIST</span></h3>
            <div className="rank">
            	{RANK_INFO.map((value, index)=> {
          			return (
									<dl className="rank-blk" key={index}>
	                  <dt className="top">
	                    <a href="javascript:;" className="dt-img">
	                    	<img src={value.img} alt=""/>
	                    </a>
	                    <div className="dt-txt">
	                      <a href="javascript:;" className="title">{value.text}</a>
	                      <a href="javascript:;" className="icon icon-play" data-type={index}></a>
	                      <a href="javascript:;" className="icon icon-store" data-type={index}></a>
	                    </div>
	                  </dt>
                    {props.rankList[index].map((val, ind) => {
                      let className = ind % 2 == 0 ? 'even' : 'odd';
                      return (
                        <dd data-id={val.music_id} key={ind} className={className}>
                          <span>{ind + 1}</span>
                          <a href="javascript:;" className="title">{val.name}</a>
                          <div className="dd-oper">
                            <a href="javascript:;" className="icon-play"></a>
                            <a href="javascript:;" className="icon-add"></a>
                            <a href="javascript:;" className="icon-store"></a>
                          </div>
                        </dd>
                      );
                    })}
		              </dl>
          			);
          		})}
            </div>
        </div>
      </div>
	  </div>
  </div>
)

Home.propTypes = {
  rankList: React.PropTypes.array.isRequired,
  rankListInit: React.PropTypes.func.isRequired
};
export default Home;