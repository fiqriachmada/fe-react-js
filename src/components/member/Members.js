import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router';
import MemberDetail from './MemberDetail';
import MemberForm from './MemberForm';
import MemberList from './MemberList';

const Members = ({match}) => {
  let { path, url } = useRouteMatch;

  console.log(path);

  return (
    <Switch>
      <Route exact path={path} component={MemberList}></Route>
      <Route exact path={`${path}/add`} component={MemberForm}></Route>
      <Route exact path={`${path}/:id`} component={MemberDetail}></Route>
    </Switch>
  )
}

export default Members
