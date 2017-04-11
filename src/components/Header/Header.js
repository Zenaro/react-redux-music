import React from 'react'
import {
  IndexLink,
  Link
} from 'react-router'
import './Header.scss'

export const Header = () => (
  <div className="header">
    {/*<IndexLink to='/' activeClassName='route--active'>
      Home
    </IndexLink>
    <Link to='/counter' activeClassName='route--active'>
      Counter
    </Link>*/}
    <div className="header-banner center">
      <h1>
          <Link to="/">Kono tone</Link>
      </h1>
      <ul className="nav">
          <li><IndexLink to="/" className="active">发现音乐</IndexLink></li>
          <li><Link to="/login">我的音乐</Link></li>
          <li>
            <a href="http://7xstax.com1.z0.glb.clouddn.com/Music-Effect.zip" 
              download="http://7xstax.com1.z0.glb.clouddn.com/Music-Effect.zip">
              下载客户端
            </a>
          </li>
      </ul>
      <div className="top-tool">
          <div className="top-search">
              <i className="icn-search"></i>
              <input type="text" placeholder="单曲/歌手/专辑/歌单/用户"/>
              <ul className="dropdown-search">
                <li>test -- tesatst</li>
              </ul>
          </div>
          <div className="top-user">
              <Link to="/login" className="btn btn-success">登录</Link>
              <Link to="/reg" className="btn btn-default">注册</Link>
              <div className="user-memb">
                  <h4>用户</h4>
                  <ul className="slide-down">
                      <li><Link to="/my">我的主页</Link></li>
                      <li><Link to="/my">资料设置</Link></li>
                      <li><a href="javascript:;" className="logout">退出</a></li>
                  </ul>
              </div>
          </div>
      </div>
    </div>
    <div className="sub-banner">
        <div className="center">
            <ul className="sub-nav">
                <li><a className="active" href="javascript:;">推荐</a></li>
                <li><a href="javascript:;">排行榜</a></li>
                <li><a href="javascript:;">歌单</a></li>
                <li><a href="javascript:;">主播电台</a></li>
                <li><a href="javascript:;">歌手</a></li>
                <li><a href="javascript:;">新碟上架</a></li>
            </ul>
        </div>
    </div>
  </div>
)

export default Header