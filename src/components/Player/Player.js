import React from 'react';
import defaultAlbum from './assets/default_album.jpg';

export const Player = () => (
  <div className="audio-player bottom-bar">
    <div className="audio-player-core">
      <div className="play-btns">
        <a href="javascript:;" className="prv"
           title="上一首">
        </a>
        <a href="javascript:;"
           className={1 ? 'play-pas' : 'play-ply'}>
        </a>
        <a href="javascript:;" className="nxt"
           title="下一首"></a>
      </div>
      <div className="play-album">
        <a href="javascript:;">
          <img src={defaultAlbum} alt=""/>
        </a>
      </div>
      <div className="play-progress">
        <div className="pro-title">
          <a href="javascript:;" className="title" title="曲名"></a>
          <a href="javascript:;" className="singer" title="演绎者"></a>
        </div>
        <div className="pro-bar">
          <div className="barbg">
            <div className="rdy" style={{width: 30 + '%'}}></div>
            <div className="cur" draggable="true">
              <div className="cur-inner" style={{width: 20 + '%'}}>
										<span className="btn-cur">
											{1 && <i></i>}
										</span>
              </div>
            </div>
          </div>
							<span className="clock">
								<i>{'00:00'}</i>
								<span> / </span>
								<em>{'00:00'}</em>
							</span>
        </div>
      </div>
      <div className="play-ctrl">
        <div className={1?"vlm-bar show":"vlm-bar"}>
          <div className="barbg">
            <div className="cur" style={{height: 0.5 * 100 + '%'}}>
              <i className="btn-cur" draggable="true">
              </i>
            </div>
          </div>
        </div>
        <a href="javascript:;" className="icon-vol" title="音量"></a>
        <a href="javascript:;"
           className="">
        </a>
        <div className="">

        </div>
      </div>
    </div>
  </div>
);

export default Player;
