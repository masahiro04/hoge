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

// const divisionData: Array<HogeNode> = [
//   { division_id: "hoge1", children: [] },
//   {
//     division_id: "hoge2",
//     children: [
//       { division_id: "foo1", children: [] },
//       { division_id: "foo2", children: [] },
//       {
//         division_id: "foo4",
//         children: [
//           { division_id: "fizz1", children: [] },
//           { division_id: "fizz2", children: [] },
//           {
//             division_id: "fizz4",
//             children: [{ division_id: "fizz7", children: [] }],
//           },
//         ],
//       },
//       {
//         division_id: "foo5",
//         children: [
//           { division_id: "fizz5", children: [] },
//           { division_id: "fizz6", children: [] },
//           {
//             division_id: "fizz7",
//             children: [
//               { division_id: "aaa1", children: [] },
//               { division_id: "aaa2", children: [] },
//               { division_id: "aaa4", children: [] },
//               { division_id: "aaa7", children: [] },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   { division_id: "hoge3", children: [] },
//   { division_id: "hoge4", children: [] },
//   { division_id: "hoge5", children: [] },
//   { division_id: "hoge8", children: [] },
//   { division_id: "hoge6", children: [] },
// ];

function findById(data: Array<Division>, division_id: string): Division {
  // TODO(okubo): 可能なら肩入れる
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

console.log(findById(divisions, "230cca4e-1e35-41c6-b7ed-f580b876312"));

// type HogeNode = {
//   division_id: string;
//   children: Array<HogeNode>;
// };
// var hogeNodes: Array<HogeNode> = [
//   {
//     division_id: "name1",
//     children: [
//       { division_id: "name2", children: [] },
//       { division_id: "name3", children: [] },
//       {
//         division_id: "name4",
//         children: [
//           { division_id: "name5", children: [] },
//           { division_id: "name6", children: [] },
//         ],
//       },
//       {
//         division_id: "name7",
//         children: [
//           { division_id: "name10", children: [] },
//           { division_id: "name11", children: [] },
//         ],
//       },
//     ],
//   },
//   {
//     division_id: "name8",
//     children: [{ division_id: "name9", children: [] }],
//   },
//   {
//     division_id: "name20",
//     children: [
//       {
//         division_id: "name21",
//         children: [
//           { division_id: "name22", children: [] },
//           { division_id: "name23", children: [] },
//           { division_id: "name24", children: [] },
//         ],
//       },
//     ],
//   },
// ];
//
// NOTE(okubo): 参考：https://stackoverflow.com/questions/53277219/javascript-find-all-parents-for-element-in-tree-recursive
// https://stackoverflow.com/questions/69824540/how-to-find-parent-on-recursive-array
function findParent(node: Division, division_id: any): Array<Division> {
  if (node.division_id === division_id) {
    return [];
  }
  for (var child of node.children) {
    const childResult = findParent(child, division_id);
    if (Array.isArray(childResult)) {
      console.log("------------");
      console.log(childResult);
      console.log("------------");
      return [child].concat(childResult);
    }
  }

  return [];
}

function handleFindParent(
  nodes: Array<Division>,
  target: string
): Array<Division> | null {
  let searchedParentNode: any;
  for (let node of nodes) {
    const _searchedParent = findParent(node, target);
    if (_searchedParent !== undefined || _searchedParent !== null) {
      searchedParentNode = _searchedParent;
    }
  }
  return searchedParentNode;
}

console.log(handleFindParent(divisions, "c7fe7581-9c8f-428e-8cab-5f42f16a058b"));
