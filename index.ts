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

const divisionData: Array<Division> = [
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
  // TODO(okubo): 可能なら肩入れる
  let result: any;
  let parent: any;
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

console.log(findById(divisionData, "fizz5"));

// const data: any = {
//   "uuid": "707a5ffd-68e2-4dbd-b539-128512ba3a0a",
//   "type": "page",
//   "items": [
//     {
//       "uuid": "9d823429-cc24-444d-a21c-a81357305851",
//       "title": "1",
//       "type": "question",
//     },
//     {
//       "type": "section",
//       "title": "2",
//       "uuid": "346dec94-124c-4932-bd40-af9dc68f1d27",
//       "items": [
//         {
//           "uuid": "bf0a9ab9-99cc-4833-b3d3-84a97072e85f",
//           "title": "2.1",
//           "type": "question",
//         }
//       ],
//     },
//     {
//       "type": "section",
//       "title": "3",
//       "uuid": "4964096d-0de9-4ab1-ace5-e42516d6b866",
//       "items": [
//         {
//           "uuid": "b2170580-1e2e-4fb4-a7b9-a56b79db21b3",
//           "title": "3.1",
//           "type": "question",
//         }
//       ],
//     }
//   ],
//   "params": {
//     "collapsed": false
//   }
// };

// const findItemParent = (root: Division, division_id: string, parent = null): any => {
//   if (root.division_id === division_id) return parent;
//   if ("children" in root) {
//     for (const i of root.children) {
//       const r = findItemParent(i, division_id, root);
//       if (r) return r;
//     }
//   }
//   return null;
// };
//
// const p = findItemParent(divisionData, "b2170580-1e2e-4fb4-a7b9-a56b79db21b3");
//
// if (p) console.log(p.title, p.type, p.uuid);

//
type HogeNode = {
  name: string;
  tree: Array<HogeNode>;
};
var hogeNodes: Array<HogeNode> = [
  {
    name: "name1",
    tree: [
      { name: "name2", tree: [] },
      { name: "name3", tree: [] },
      {
        name: "name4",
        tree: [
          { name: "name5", tree: [] },
          { name: "name6", tree: [] },
        ],
      },
      {
        name: "name7",
        tree: [
          { name: "name10", tree: [] },
          { name: "name11", tree: [] },
        ],
      },
    ],
  },
  {
    name: "name8",
    tree: [{ name: "name9", tree: [] }],
  },
  {
    name: "name20",
    tree: [
      {
        name: "name21",
        tree: [
          { name: "name22", tree: [] },
          { name: "name23", tree: [] },
          { name: "name24", tree: [] },
        ],
      },
    ],
  },
];

function findParent(node: HogeNode, searchForName: any): any {
  if (node.name === searchForName) {
    return [];
  }

  for (var treeNode of node.tree) {
    const childResult = findParent(treeNode, searchForName);

    if (Array.isArray(childResult)) {
      console.log("------------");
      console.log(childResult);
      console.log("------------");
      return [treeNode.name].concat(childResult);
    }
  }
}

function handleFindParent(nodes: Array<HogeNode>, target: string): HogeNode|null {
  // loopの必要あり
  let searchedParentNode: HogeNode | null = null;

  for (let node of hogeNodes) {
    console.log();
    const _searchedParent = findParent(node,target);
    if (_searchedParent !== undefined || _searchedParent !== null) {
      searchedParentNode = _searchedParent;
    }
  }
  return searchedParentNode;
}

console.log(handleFindParent(hogeNodes, 'name22'));
