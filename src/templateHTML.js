const createTeam = team => {

    const createManager = manager => {
      return `
      <div class="card col-lg-3 m-2 shadow">
              <h1 class="card-header bg-info">${manager.getName()}</h1>
              <p class="card-text"><i class="fas fa-mug-hot mr-2"></i> ${manager.getRole()}</p>
          <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${manager.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
              <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
          </ul>
      </div>`;
  };

  const createEngineer = engineer => {
      return `
      <div class="card col-lg-3 m-2 shadow">
              <h1 class="card-header bg-info">${engineer.getName()}</h1>
              <p class="card-text"><i class="fas fa-glasses mr-2"></i> ${engineer.getRole()}</p>
          <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${engineer.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
              <li class="list-group-item">Github: <a href="https://github.com/${engineer.getGitHub()}"target="_blank" rel="noopener noreferrer">${engineer.getGitHub()}</a></li>
          </ul>
      </div>`;
  };

  const createIntern = intern => {
      return `
      <div class="card col-lg-3 m-2 shadow">
              <h1 class="card-header bg-info">${intern.getName()}</h1>
              <p class="card-text"><i class="fas fa-user-graduate mr-2"></i> ${intern.getRole()}</p>
          <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${intern.getId()}</li>
              <li class="list-group-item">Email:  <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
              <li class="list-group-item">School: ${intern.getSchool()}</li>
          </ul>
      </div>`;
  };

  const html = [];

  html.push(team
      .filter(employee => employee.getRole() === "Manager")
      .map(manager => createManager(manager))
  );
  html.push(team
      .filter(employee => employee.getRole() === "Engineer")
      .map(engineer => createEngineer(engineer))
      .join("")
  );
  html.push(team
      .filter(employee => employee.getRole() === "Intern")
      .map(intern => createIntern(intern))
      .join("")
  );

  return html.join("");
};

module.exports = team => {

  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
  <script src="https://kit.fontawesome.com/c502137733.js"></script>
  <link rel="stylesheet" href="./style.css">
  <title>Team Profile Generator</title>
</head>
<body class="text-center">
    <nav class="navbar navbar-light bg-danger"><h1 class="mx-auto">My Team</h1></nav>
      <div class="container">
        <div class="my-2 d-flex flex-row flex-wrap">
            ${createTeam(team)}
        </div>
      </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" 
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>`;
};



