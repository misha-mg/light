const Alert = (props) => {
  let type = props.type;

  const alertsTexts = {
    handsError: {
      title: "two hands",
      text: "only one hand can be in the frame",
    },
    serverError: {
      title: "sending error",
      text: "an error occurred while sending a screenshot",
    },
    successTakeMessage: {
      title: "success",
      text: "screenshot taken successfully",
    },
    successPostMessage: {
      title: "success",
      text: "screenshot posted successfully",
    },
  };

  return (
    <div
      className={`alert-wrapper ${
        props.alertExistence === true ? "active" : ""
      }`}
    >
      <div className={`alert alert-${type}`}>
        <div className="alert-title">{alertsTexts[props.type]?.title}</div>
        <div className="alert-text">{alertsTexts[props.type]?.text}</div>
      </div>
    </div>
  );
};

export default Alert;
