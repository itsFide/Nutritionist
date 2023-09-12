/*
=======================================================
ИМПОРТЫ ПЛАГИНОВ 
=======================================================
*/

import concat from "gulp-concat";
import uglify from "gulp-uglify";
import babel from "gulp-babel";
import gulpIf from "gulp-if";

/*
=======================================================
ВЫПОЛНЕНИЕ ЗАДАЧИ
=======================================================
*/
export const javascript = () => {
    return (
        app.gulp
            .src(app.path.src.js, { sourcemaps: true }) // Исходный путь
            .pipe(babel({ presets: ["@babel/preset-env"] }))
            .pipe(concat("index.js")) // Обьединение в файлов в один
            .pipe(gulpIf(app.isBuild, uglify())) // Минификация при --build
            .pipe(app.gulp.dest(app.path.build.js)) // Конечный путь
            /*
        =======================================================
        ОТДЕЛЬНЫЕ JAVASCRIPT ФАЙЛЫ
        =======================================================
        */
            .pipe(app.gulp.src(app.path.src.separateJS)) // Исходный путь
            .pipe(app.gulp.dest(app.path.build.js)) // Конечный путь
            .pipe(app.server.stream())
    ); // Проверка обновлений
};
