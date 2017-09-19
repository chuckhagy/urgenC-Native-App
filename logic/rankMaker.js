import moment from "moment";

let data = [
  {
    body: "Tell boss I want $400,000 per month",
    completed: undefined,
    createddate: "2017-09-08T02:27:04.000Z",
    duedate: "2017-09-20",
    id: "recqsWsI0o2GCuGGf",
    priority: "4",
    success: undefined,
    title: "Get a Raise"
  },
  {
    body: "Go to beach",
    completed: undefined,
    createddate: "2017-09-08T02:27:04.000Z",
    duedate: "2017-09-19",
    id: "secqsWsI0o2GCuGGf",
    priority: "3",
    success: undefined,
    title: "Get a Raise"
  },
  {
    body: "LoseWeight",
    completed: undefined,
    createddate: "2017-09-08T02:27:04.000Z",
    duedate: "2017-06-19",
    id: "tecqsWsI0o2GCuGGf",
    priority: "1",
    success: undefined,
    title: "Get a Raise"
  }
];

export default function rankMaker() {
  let startDate = moment([data[0].createddate]);
  let dueDate = moment([data[0].duedate]);
  let currentDate = Date.now(0);
  let totalTime = dueDate.diff(startDate, "days");
  let timeRemaining = "x";
  // let Score = ((1-(TimeRemaining/TotalTime)) * .5) + ((a.priority / 5) * .5)
  return currentDate;
}
