const fs = require("fs");

const requestHandler = function (req, res) {
const url = req.url;
const method = req.method;

if (url === "/") {
    res.setHeader("Content-type", "text/html");
    res.write(`
    <!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" rel="stylesheet">
    <title>Home</title>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</head>

<body class="p-3 m-0 border-0 bd-example m-0 border-0">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">Inicio</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/valores">Valores</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/skills">Skill</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/proyectos">Proyectos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/contacto">Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <main class="container-fluid mt-5">
        <div class="row">
            <div class="col-12 col-sm-12 col-md-4 offset-md-4">
                <div class="card">
                    <div class="card-header text-center">
                        <h5>Resumen Personal</h5>
                    </div>
                    <div class="card-body">
                        <p class="card-text">Felipe José Solórzano Michel es un estudiante de Tecnología en Desarrollo
                            de Software en el ITLA.
                            Apasionado por el baloncesto y la programación, Felipe se destaca por su solidaridad y su
                            constante deseo de aprender.
                            Su enfoque analítico lo impulsa a resolver problemas de manera creativa y eficiente.</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</body>

</html>
    `);
    res.end();
  } else if (url === "/skills" && method === "GET") {
    res.setHeader("Content-type", "text/html");
    res.write(`
<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" rel="stylesheet">
    <title>Skills</title>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</head>

<body class="p-3 m-0 border-0 bd-example m-0 border-0">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">Inicio</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/valores">Valores</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/skills">Skill</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/proyectos">Proyectos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/contacto">Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <main class="container-fluid mt-5">
        <div class="row">
            <div class="col-12 col-sm-12 col-md-4 offset-md-4">
                <div class="card">
                    <div class="card-header text-center">
                        <h5>Skills</h5>
                    </div>
                    <div class="card-body">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Lenguaje de Programación</th>
                                    <th scope="col">Valoración Personal</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">C#</th>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <th scope="row">Java</th>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <th scope="row">JavaScript</th>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <th scope="row">SQL</th>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <th scope="row">Python</th>
                                    <td>2</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </main>
</body>

</html>
    `);
    res.end();
}  else if (url === "/valores" && method === "GET") {
    res.setHeader("Content-type", "text/html");
    res.write(`
<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" rel="stylesheet">
    <title>Valores</title>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</head>

<body class="p-3 m-0 border-0 bd-example m-0 border-0">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">Inicio</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/valores">Valores</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/skills">Skill</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/proyectos">Proyectos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/contacto">Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <main class="container-fluid mt-5">
        <div class="row">
            <div class="col-12 col-sm-12 col-md-4 offset-md-4">
                <div class="card">
                    <div class="card-header text-center">
                        <h5>Valores</h5>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-numbered">
                            <li class="list-group-item">Honestidad</li>
                            <li class="list-group-item">Responsabilidad</li>
                            <li class="list-group-item">Solidaridad</li>
                            <li class="list-group-item">Respeto</li>
                            <li class="list-group-item">Empatía</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </main>
</body>

</html>
    `);
    res.end();
  }  else if (url === "/proyectos" && method === "GET") {
    res.setHeader("Content-type", "text/html");
    res.write(`
<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" rel="stylesheet">
    <title>Proyectos</title>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</head>

<body class="p-3 m-0 border-0 bd-example m-0 border-0">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">Inicio</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/valores">Valores</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/skills">Skill</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/proyectos">Proyectos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/contacto">Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <main class="container-fluid mt-5">
        <div class="row">
            <div class="col-12 col-sm-12 col-md-8 offset-md-2">
                <div class="card-group">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Sistema de Facturación</h5>
                            <hr>
                            <p class="card-text">Este proyecto consistió en desarrollar un sistema de inventario y facturación para una tienda ficticia de tenis.
                                Su objetivo principal fue gestionar el inventario de productos y automatizar el proceso de facturación.
                                Las tecnologías utilizadas incluyeron Java como lenguaje de programación y Eclipse como entorno de desarrollo.
                                El sistema permitió registrar productos, gestionar clientes y generar facturas automáticas con validaciones para garantizar
                                la integridad de los datos. El proyecto reforzó conocimientos en programación orientada a objetos y en Java, resultando
                                en una calificación satisfactoria.</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Sistema de Gestión de Eventos</h5>
                            <hr>
                            <p class="card-text">El proyecto consistió en crear una aplicación para administrar eventos como conferencias o reuniones, utilizando Java
                                y una base de datos SQL. Las principales funcionalidades incluyeron el registro, edición, eliminación y búsqueda de
                                eventos, además de reflejar cancelaciones. Se implementaron validaciones y medidas de seguridad para proteger los
                                datos. El proyecto reforzó conocimientos en programación orientada a objetos y bases de datos SQL, además de mejorar
                                las habilidades en diseño y desarrollo de sistemas de gestión de eventos.</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Aplicación Web</h5>
                            <hr>
                            <p class="card-text">El objetivo del proyecto es diseñar y desarrollar una aplicación monolítica para gestionar una tienda, enfocándose en la creación,
                                edición y visualización de entidades de la base de datos. Se utiliza .NET 8.0, Visual Studio 2019, SQL y Entity Framework,
                                siguiendo el patrón de diseño MVC. Las principales funcionalidades incluyen la gestión de productos, clientes y pedidos.
                                El resultado del proyecto fue un refuerzo en programación orientada a objetos y arquitectura de software, además de aprender
                                a usar .NET, Visual Studio y Entity Framework, lo que brinda una base sólida para proyectos futuros.
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</body>

</html>
    `);
    res.end();
  }  else if (url === "/contacto" && method === "GET") {
    res.setHeader("Content-type", "text/html");
    res.write(`
<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" rel="stylesheet">
    <title>Contacto</title>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</head>

<body class="p-3 m-0 border-0 bd-example m-0 border-0">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">Inicio</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/valores">Valores</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/skills">Skill</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/proyectos">Proyectos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/contacto">Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <main class="container-fluid mt-5">
        <div class="row">
            <div class="col-12 col-sm-12 col-md-4 offset-md-4">
                <form action="/contacto" method="POST">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" name="Correo" id="exampleInputEmail1">
                    </div>
                    <div class="mb-3">
                        <label for="InputName" class="form-label">Name</label>
                        <input type="text" class="form-control" name="Nombre" id="InputName">
                    </div>
                    <div class="mb-3">
                        <label for="InputLastName" class="form-label">Last Name</label>
                        <input type="text" class="form-control" name="Apellido" id="InputLastName">
                    </div>
                    <div class="mb-3">
                        <label for="typeService" class="form-label">Type of Service</label>
                        <textarea class="form-control" name="Servicio" placeholder="Leave a comment here" id="typeService"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </main>
</body>

</html>
    `);
    res.end();
} else if (url === "/contacto" && method === "POST") {
    res.statusCode = 302;
    res.setHeader("Location", "/contacto");
    return res.end();
  } else {
    res.setHeader("Content-type", "text/html");
    res.write(`
<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" rel="stylesheet">
    <title>Not found</title>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</head>

<body class="p-3 m-0 border-0 bd-example m-0 border-0">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">Inicio</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/valores">Valores</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/skills">Skill</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/proyectos">Proyectos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/contacto">Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <main class="container-fluid mt-5">
        <div class="row">
            <div class="col-12 col-sm-12 col-md-4 offset-md-4">
                <div class="card">
                    <div class="card-body">
                        <p class="fs-1">Page not Found</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</body>

</html>
    `);
    res.end();
    }
};

module.exports = requestHandler;
