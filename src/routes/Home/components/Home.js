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
  text: '流行'
}, {
  img: IMG_UP,
  text: '新歌'
}, {
  img: IMG_NEW,
  text: '欧美'
}];
const urlPrefix = "http://localhost/NewWorld/sql-CloudMusic/FEBE-mysql-old/BackEnd/index.php/Home/";

export const Home = (props) => (
  <div>
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
            <h3 onClick={props.rankListAdd}>排行榜<span>RANKLIST</span></h3>
            <div className="rank">
              <span>{props.rankList}</span>
            	{/*props.rankList.map((value, index)=> {
          			return (
									<dl className="rank-blk" key={index}>
	                  <dt className="top">
	                    <a href="javascript:;" className="dt-img">
	                    	<img src={RANK_INFO[index].img} alt=""/>
	                    </a>
	                    <div className="dt-txt">
	                      <a href="javascript:;" className="title">{RANK_INFO[index].text}</a>
	                      <a href="javascript:;" className="icon icon-play"></a>
	                      <a href="javascript:;" className="icon icon-store" data-type="item.dataType"></a>
	                    </div>
	                  </dt>
                    {value.map((val, ind) => {
                      return (
                        <dd data-id={val.id} key={ind}>
                          <span>{ind + 1}</span>
                          <a href="javascript:;" className="title">{val.title}</a>
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
          		})*/}
            </div>
        </div>
      </div>
	  </div>
  </div>
)

// ############################------
Home.propTypes = {
  rankList: React.PropTypes.number.isRequired,
  rankListInit: React.PropTypes.func.isRequired
};
export default Home