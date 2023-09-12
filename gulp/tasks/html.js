/*
=======================================================
ИМПОРТЫ ПЛАГИНОВ 
=======================================================
*/

import fileinclude from "gulp-file-include";

/*
=======================================================
ВЫПОЛНЕНИЕ ЗАДАЧИ
=======================================================
*/
export const html = () => {
    return app.gulp
        .src(app.path.src.html) // Исходный путь
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        })) // Импорт html в один файл
        .pipe(app.gulp.dest(app.path.build.html)) // Конечный путь
        .pipe(app.server.stream()); // Обновление сервера
};

/*
=======================================================
ДЛЯ ОТДЕЛЬНЫХ СТРАНИЦ 
=======================================================
*/
export const pages = () => {
    return app.gulp
        .src(app.path.src.pages) // Исходный путь
        .pipe(app.gulp.dest(app.path.build.pages)); // Конечный путь
};
