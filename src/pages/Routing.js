import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Navigation from "./templates/Navigation";
import Home from "./Home";
import Footer from "./templates/Footer";

import BookList from "../components/book/BookList";
import BookForm from "../components/book/BookForm";

import BookDetail from "../components/book/BookDetail";
import MemberList from "../components/member/MemberList";
import MemberForm from "../components/member/MemberForm";
import MemberDetail from "../components/member/MemberDetail";

const Routing = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <section className="py-5 container mt-5">
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/books" exact component={BookList} />
          <Route path="/books/add" exact component={BookForm} />
          <Route path="/books/:id" exact component={BookDetail} />
          <Route path="/books/edit/:id" exact component={BookForm} />

          <Route path="/members" exact component={MemberList} />
          <Route path="/members/add"  component={MemberForm} />
          <Route path="/members/:id" exact component={MemberDetail} />
          <Route path="/members/edit/:id" exact component={MemberForm} />
          {/* <Route path="/404" exact component={NotFound} />
          <Redirect from="*" to="/404"/> */}
        </Switch>
      </section>
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
