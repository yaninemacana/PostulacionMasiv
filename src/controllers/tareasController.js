const controller = {};

controller.tareas = (req, res) => {
    req.getConnection((error,conn) => {
        conn.query('SELECT * FROM Tareas', (err,tareas) => {
            if(err){
                res.json(err);
            }
            res.render('tareas',{
                data: tareas        
            });
        });
    });
};

controller.guardar = (req, res) =>{
    const data = req.body;

    req.getConnection((err, conn)=>{
        conn.query('INSERT INTO Tareas set ? ', [data], (err, tareas)=>{
            res.redirect('/');
        })
    })
};

controller.editar = (req, res) =>{
    const {id} = req.params;

    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM Tareas WHERE Id = ?' [Id], (err, tarea) => {
            res.render('tareaEditar', {
                data: tarea[0]
            });
        });
    });
};

controller.guardarEdicion = (req, res) =>{
    const {id} = req.params;
    const tareaEditar = req.body;

    req.getConnection((err, conn)=>{
        conn.query('UPDATE Tareas set ? WHERE id = ?', [tareaEditar, Id],(err, tarea) => {
            res.redirect('/');
        });
    });
};

module.exports = controller;