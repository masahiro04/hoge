interface Division {
  division_id: string;
  children: Array<Division>;
}

const divisions: Division[] = [
  {
    division_id: "b5ce5c65-1a92-4f47-b1c3-bbf28135502c", //D1
    children: [
      {
        division_id: "7235be71-cb4e-46e9-bfaa-7989592997fa", //D2
        children: [
          {
            division_id: "828da2e9-a4ab-4897-945c-9f0218ee764b", //D2の下
            children: [],
          },
          {
            division_id: "5f8f60c1-6701-40f4-a387-9a269471ed65", //D2の下2
            children: [],
          },
        ],
      },
      {
        division_id: "230cca4e-1e35-41c6-b7ed-f580b876312a", //D1下
        children: [
          {
            division_id: "c7fe7581-9c8f-428e-8cab-5f42f16a058b", //サンプル
            children: [],
          },
        ],
      },
    ],
  },
];

// type Result = {
//   node: Division;
//   parent: Division;
// };
//
// const findDivision = (
//   parent: Division, arr: Array<Division>, divisionId: string,
// ): Result => {
//   // TODO(okubo): index取得でarrayの中の場所確認できる
//   // TODO(okubo): 親 or 子供
//   let newParent: Division = parent;
//   let newDivision: Division | null = null;
//
//   const result: Result = arr.map((division: Division) => {
//     if (division.division_id == divisionId) {
//       return { node: division, parent:  }
//     }
//   });
//
//   return findDivision(newParent, );
// };
//
// const getParent = (divisionId: string): Array<Division> => {};
//
// const getChildren = (divisionId: string): Array<Division> => {
//   const index: number = divisions.indexOf();
// };
//

const data: Array<Division> = [
  { division_id: "hoge1", children: [] },
  {
    division_id: "hoge2",
    children: [
      { division_id: "foo1", children: [] },
      { division_id: "foo2", children: [] },
      {
        division_id: "foo4",
        children: [
          { division_id: "fizz1", children: [] },
          { division_id: "fizz2", children: [] },
          { division_id: "fizz4", children: [] },
        ],
      },
      {
        division_id: "foo5",
        children: [
          { division_id: "fizz5", children: [] },
          { division_id: "fizz6", children: [] },
          {
            division_id: "fizz7",
            children: [
              { division_id: "aaa1", children: [] },
              { division_id: "aaa2", children: [] },
              { division_id: "aaa4", children: [] },
              { division_id: "aaa7", children: [] },
            ],
          },
        ],
      },
    ],
  },
  { division_id: "hoge3", children: [] },
  { division_id: "hoge4", children: [] },
  { division_id: "hoge5", children: [] },
  { division_id: "hoge8", children: [] },
  { division_id: "hoge6", children: [] },
];

function findById(data: Array<Division>, division_id: string): Division {
  let result: any;
  data.some(iter);
  function iter(a: Division): boolean {
    if (a.division_id === division_id) {
      result = a;
      return true;
    }
    return Array.isArray(a.children) && a.children.some(iter);
  }
  return result;
}

console.log(findById(data, 'fizz5'));
