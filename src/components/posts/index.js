import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "../../redux/action";

function Cards(props) {
  console.log(props);
  useEffect(() => {
    props.fetchData();
    // eslint-disable-next-line
  }, []);

  if (!props.ShowData.data) {
    return null;
  }

  let listpost = props.ShowData.data;
  return (
    <>
      {listpost.map((item) => {
        return (
          <div key={item.id}>
            <div className="card">
              <h5 className="card-header">{item.userId}</h5>
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.body}</p>
              </div>
            </div>
            <br />
          </div>
        );
      })}
    </>
  );
}

const stateToProps = (state) => {
  console.log(state);
  return { ShowData: state.ShowDataReducer };
};

export default connect(stateToProps, { fetchData })(Cards);
