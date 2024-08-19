// Inicializar el localStorage con un docente de ejemplo
if (!localStorage.getItem('docente')) {
    localStorage.setItem('docente', JSON.stringify({
        docente: 'Lic Juan Pérez',
        correo: 'juan.perez@gmail.com',
        usuario: 'juanperez',
        contrasena: 'contrasena123',
        clases: ['Programacion', 'Base de Datos','Matematicas']
    }));
}




// Ejemplo para agregar estudiantes al localStorage
localStorage.setItem('estudiantes', JSON.stringify([
    { id: 1, nombre: 'Ana Gómez' },
    { id: 2, nombre: 'Luis Martínez' },
    { id: 3, nombre: 'Carlos Pérez' },
    { id: 4, nombre: 'Carlos Chacon' }
]));


// Ejemplo de cómo agregar las clases a localStorage
const clases = [
    { id: 'clase1', nombre: 'Programacion' },
    { id: 'clase2', nombre: 'Base de Datos' },
    { id: 'clase3', nombre: 'Historia' }
];

localStorage.setItem('clases', JSON.stringify(clases));

