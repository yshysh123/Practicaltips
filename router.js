import React from 'react'
// import { Redirect } from 'react-router'
import { Route } from 'react-router-dom'
import Loadable from 'react-loadable'
import App from 'components/App'
import NoMatch from 'components/NoMatch'
import AutoPricingGroupItems from 'pages/AutoPricingPool/GroupItems'

const loading = () => {
  return <div>Loading ... </div>
}

// 默认路由页面
const Main = Loadable({
  loader: () => import('./pages/Main'),
  loading,
})

// 自动加载所有pages文件夹的一级目录或文件为路由页面
const routerRequire = require.context('./pages', true, /^\.\/[^/.]+$/)
const routerPaths = routerRequire.keys()
const routers = routerPaths.map(key => {
  const path = key.slice(1)
  return <Route path={path} key={key} component={routerRequire(key).default} />
})

// 这些单独配置的路由必须用unshift
// 以排在自动加载的路由前面
routers.unshift(
  <Route
    key="autoPricingGroupItems"
    component={AutoPricingGroupItems}
    path="/AutoPricingPool/:id/groupItems"
  />,
)

routers.push(
  <Route exact path="/" key="root" component={Main} />,
  <Route key="noMatch" component={NoMatch} />,
)

const routes = <App>{routers}</App>

export default routes
