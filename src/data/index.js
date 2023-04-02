import moment from "moment/moment";

export const cardsData = [
  {
    title: "Revenue",
    change: 24,
    amount: 42056,
    color: "rgba(241,214,155,0.2)",
    image: "augmentation.svg"
  },
  {
    title: "Orders",
    change: -14,
    amount: 52125,
    color: "rgb(247, 242, 245)",
    image: "credit-card.svg"
  },
  {
    title: "Profit",
    change: 12,
    amount: 10125.0,
    color: "rgb(241,250,246)",
    image: "bill.svg"
  },
];

export const ordersData = [
  {
    name: "Book",
    change: 290,
    isPaid: true,
  },
  {
    name: "Book",
    change: 72,
    isPaid: false,
  },
  {
    name: "book",
    change: 70,
    isPaid: false,
  },
  {
    name: "Robot",
    change: 15,
    isPaid: true,
  },
  {
    name: "Robot",
    change: 12,
    isPaid: true,
  },
  {
    name: "Robot",
    change: 21,
    isPaid: false,
  },
  {
    name: "Robot",
    change: 24,
    isPaid: true,
  },
  {
    name: "Robot",
    change: 54,
    isPaid: false,
  }
]


//* get the value in group number format
export const groupNumber = (number) => {
  return parseFloat(number.toFixed(2)).toLocaleString("en", {
    useGrouping: true,
  });
};


//* calendar Events
let eventGuid = 0
let todayStr = moment().format("YYYY-MM-DD")  // YYYY-MM-DD of today
export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'Lunch Pary',
    start: todayStr + 'T09:00:00',

  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: moment(todayStr).add(1, "days").format("YYYY-MM-DD") + 'T16:00:00'
  },
  {
    id: createEventId(),
    title: "Head Meetup",
    start: moment(todayStr).add(2, "days").format("YYYY-MM-DD") + 'T20:00:00'
  },
  {
    id: createEventId(),
    title: "VC Meeting",
    start: moment(todayStr).add(3, "days").format("YYYY-MM-DD") + 'T09:00:00'
  },
  {
    id: createEventId(),
    title: "Payment Shedules",
    start: moment(todayStr).add(5, "days").format("YYYY-MM-DD") + 'T13:00:00'
  },
  {
    id: createEventId(),
    title: "VC Meeting",
    start: moment(todayStr).add(6, "days").format("YYYY-MM-DD") + 'T13:00:00'
  },
]

export function createEventId() {
  return String(eventGuid++)
}

export const boardData = {
  columns: [
    {
      id: 1,
      title: "New Requests",
      cards: [
        {
          id: 1,
          title: "Respond to Information Requests",
          description: "Answer inquiries about products or services"
        },
        {
          id: 2,
          title: "Process Technical Support Requests",
          description: "Resolve technical issues reported by customers"
        },
      ]
    },
    {
      id: 2,
      title: "Requests in Progress",
      cards: [
        {
          id: 9,
          title: "Track Requests in Progress",
          description: "Ensure requests are being handled within designated time frames",
        }
      ]
    },
    {
      id: 3,
      title: "Resolved Requests",
      cards: [
        {
          id: 10,
          title: "Obtain Feedback from Customers",
          description: "Request feedback from customers on their service experience"
        },
        {
          id: 11,
          title: "Analyze Request Trends",
          description: "Analyze support request trends to improve processes"
        }
      ]
    }
  ]
}
