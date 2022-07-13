alert("Open your << console.log >>")
let num = 1;
let todos = [
    { id: num++, name: "work", isDoing: false },
    { id: num++, name: "study", isDoing: false },
    { id: num++, name: "sleep", isDoing: false },
    { id: num++, name: "sport", isDoing: false }
  ];

  let userMenu = prompt('choose one of them : \n 1. Add Todo \n 2. remove Todo \n 3. do Todo ');
  if (userMenu === '1') {
    let addUser = prompt('1. Write the name you want to add to your to-do list : \n Any name to be entered is optional');
    let newTodoName = {
      id: todos.length + 1,
      name: addUser,
      isDoing: false
    };
    todos.push(newTodoName);
    console.log(todos);
  } else if (userMenu === '2') {
    let removeUser = prompt('2. Write the name you want to remove from your to-do list : \n Enter one of these options: \n work, study, sleep, sport');
    let removeTodo_Index = todos.findIndex((todo) => {
      return todo.name === removeUser;
    });
    todos.splice(removeTodo_Index, 1);
    console.log(todos);
  } else if (userMenu === '3') {
    let editUser = prompt('3. Type the name you want to set the status to done : \n Enter one of these options: \n work, study, sleep, sport');
    todos.forEach((todo) => {
      if (todo.name === editUser) {
        todo.isDoing = true;
      }
    });
    console.log(todos);
  } else {
    alert("Just enter the requested options '1 2 3'");
  }