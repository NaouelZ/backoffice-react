import React, { useState } from "react";

import "./trello.css";

import List from "../../components/List/List";

const initialLists = [
  {
    title: "To Do",
    status: "todo",
  },
  {
    title: "Doing",
    status: "doing",
  },
  {
    title: "Done",
    status: "done",
  },
];

const initialData = {
  todo: [
    {
      id: "qwe1",
      title: "Card 1",
      status: "todo",
      order: 1,
      label: "UI Dev",
    },
    {
      id: "qwe3",
      title: "Card 3",
      status: "todo",
      order: 2,
      label: "UI Dev",
    },
    {
      id: "qwe5",
      title: "Card 5",
      status: "todo",
      order: 3,
      label: "Testing",
    },
  ],
  doing: [
    {
      id: "qwe2",
      title: "Card 2",
      status: "doing",
      order: 1,
      label: "API Integration",
    },
  ],
  done: [
    {
      id: "qwe4",
      title: "Card 4",
      status: "done",
      order: 1,
      label: "Bug Fix",
    },
  ],
};

export default function TaskManager() {
  const [lists, setLists] = useState(initialLists);
  const [data, setData] = useState(initialData);

  // Handle Lists
  // Handle Lists ends here

  // Handle Data
  const cardChangeHandler = (cardInfo, newStatus, targetCardId) => {
    const { id, status: oldStatus } = cardInfo;

    let dropCard = data[oldStatus].find((el) => el.id === id);
    let targetCard =
      targetCardId !== ""
        ? data[newStatus].find((el) => el.id === targetCardId)
        : null;

    let newListOrderValueMax = data[newStatus]
      .map((item) => item.order)
      .reduce((maxValue, a) => Math.max(maxValue, a), 0);

    // CASE 1: If same list, work only this if block then return;
    if (oldStatus === newStatus) {
      let temp = data[oldStatus]
        .map((item) => {
          if (item.id === dropCard.id)
            return {
              ...dropCard,
              order: targetCard
                ? targetCard.order - 1
                : newListOrderValueMax + 1,
            };
          return item;
        })
        .sort((a, b) => a.order - b.order)
        .map((item, i) => {
          return { ...item, order: i + 1 };
        });
      setData((d) => {
        return { ...d, [oldStatus]: temp };
      });

      return;
    }
    // CASE 1 ENDS HERE

    // CASE 2: Drag across multiple lists
    let tempGaveList = data[oldStatus]
      .filter((item) => item.id !== id)
      .sort((a, b) => a.order - b.order)
      .map((item, i) => {
        return { ...item, order: i + 1 };
      });

    let tempRecievedList = [
      ...data[newStatus],
      {
        ...dropCard,
        order: targetCard ? targetCard.order - 1 : newListOrderValueMax + 1,
      },
    ]
      .sort((a, b) => a.order - b.order)
      .map((item, i) => {
        return { ...item, order: i + 1 };
      });

    // At last, set state
    setData((d) => {
      return { ...d, [oldStatus]: tempGaveList, [newStatus]: tempRecievedList };
    });

    // CASE 2 ENDS HERE
  };
  // Handle Data ends here

  return (
    <div className="trello_page">
      <div className="app-content-area">
        {/* App Board */}
        <main className="app-board">
          {/* Board */}
          <section className="board-body">
            <div className="wrap-lists">
              {lists.map((l) => (
                <List
                  data={data[l.status]}
                  key={l.status}
                  title={l.title}
                  status={l.status}
                  onChange={cardChangeHandler}
                />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
