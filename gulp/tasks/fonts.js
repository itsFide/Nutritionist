/*
=======================================================
ВЫПОЛНЕНИЕ ЗАДАЧИ
=======================================================
*/

export const fonts = () => {
    return app.gulp
        .src(app.path.src.fonts) // Исходный путь
        .pipe(app.gulp.dest(app.path.build.fonts)); // Вывод
};
