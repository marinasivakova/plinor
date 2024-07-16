export interface Element {
  name: string;
  children?: Array<Element>;
}

export const data: Array<Element> = [
  {
    name: "Элемент 1",
    children: [
      {
        name: "Элемент 1.1",
        children: [
          {
            name: "Элемент 1.1.1",
            children: [
              {
                name: "Элемент 1.1.1.1",
              },
              {
                name: "Элемент 1.1.1.2",
              },
            ],
          },
          {
            name: "Элемент 1.1.2",
          },
        ],
      },
      {
        name: "Элемент 1.2",
      },
    ],
  },
  {
    name: "Элемент 2",
  },
];
