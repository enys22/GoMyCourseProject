import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CoursesList from "./CoursesList";
import { Button } from "reactstrap";

export class Categories extends Component {
  state = {
    categoriesList: false,
    category: "",
  };

  handleCategory = (category) => {
    this.setState({
      ...this.state,
      category,
    });
  };

  componentDidUpdate() {
    if (!this.state.categoriesList) {
      let result = [];
      console.log("courses list : " + this.props.courses.courses);
      if (this.props.courses) {
        result = this.props.courses.courses.map((course) => course.category);
      }
      this.setState({
        ...this.state,
        categoriesList: result,
      });
      console.log(JSON.stringify(this.state.categoriesList));
    }
  }

  render() {
    return (
      <div>
        <h2>Choose your category</h2>
        {this.state.categoriesList
          ? this.state.categoriesList.map((category) => (
              <Button className="btn btn-info btn-icon-split m-1" onClick={()=>this.handleCategory(category)}>
                <span class="icon text-white-50">
                      <i class="fas fa-hashtag"></i>
                </span>
                <span class="text">{category}</span>
              </Button>
            ))
          : null}
        {this.state.category ? (
                <CoursesList category={this.props.category} />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  courses: state.courses,
});

export default connect(mapStateToProps)(Categories);
