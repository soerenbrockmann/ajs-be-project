const data = [
  { id: 123, state: "Open", type: "SPAM", message: "Hi there I am row 1" },
  { id: 124, state: "Closed", type: "SPAM", message: "Hi there I am row 2" },
  { id: 124, state: "Closed", type: "SPAM", message: "Hi there I am row 2" },
  { id: 124, state: "Closed", type: "SPAM", message: "Hi there I am row 2" },
  { id: 124, state: "Closed", type: "SPAM", message: "Hi there I am row 2" }
];

const getData = () => data;

const getOpenData = () => data.filter(res => res.state === "Open");

export { getOpenData };

export default getData;
