function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}
  
const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};
  
const Element = `<h1>Hello, { formatName(user) } </h1>`;



  ReactDOM.render(formatName("pk"), document.getElementById("root"))