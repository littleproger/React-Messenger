import React from "react";
import PropTypes from 'prop-types';

function helper(text,cls){
  return (
        <div className="flex flex-horCntr pad-t_30px">
          <div className={`flex flex-centered ${cls}`}>
            <h3>{text}</h3>
          </div>
        </div>
      );
}

export default function Time(props) {
  const today = new Date().toLocaleDateString();
  const timeMessage = new Date(props.data.createdAt).toLocaleDateString();
  let [todayDay, todayMonth, todayYear] = new Date()
    .toLocaleDateString()
    .split(".");
  let [dateNmb, monthNmb, yearNmb] = new Date(props.data.createdAt)
    .toLocaleDateString()
    .split(".");
  let [date, month, year] = new Date(props.data.createdAt)
    .toDateString()
    .split(" ");
  if (props.prevDate !== timeMessage) {
    if (timeMessage === today) {
      return helper("Today",props.cls)
    }
    if( todayYear !== yearNmb ){
      return helper(`${dateNmb} ${monthNmb} ${yearNmb}`, props.cls)
    }
    if( todayMonth !== monthNmb){
      return helper(`${date} ${month}`, props.cls)
    }else{ return null; }
  } else {
    return null;
  }
}

Time.propTypes = {
  prevDate: PropTypes.string,
  cls: PropTypes.string,
  data: PropTypes.object
};