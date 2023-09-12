/*
=======================================================
ИМПОРТЫ ПЛАГИНОВ 
=======================================================
*/

import dartSass from "sass";
import gulpSass from "gulp-sass";
import autoPrefixer from "gulp-autoprefixer";
import minify from "gulp-css-minify";
import gulpIf from "gulp-if";
const sass = gulpSass(dartSass);

/*
=======================================================
ВЫПОЛНЕНИЕ ЗАДАЧИ
=======================================================
*/
export const style = () => {
    return app.gulp
        .src(app.path.src.scss, { sourcemaps: true })
        .pipe(sass().on("error", sass.logError))
        .pipe(autoPrefixer()) // Расстановка префиксов
        // .pipe(gulpIf(app.isBuild, minify())) // Минификация при --build
        .pipe(app.gulp.dest(app.path.build.css)) // Вывод
        .pipe(app.server.stream()); // Проверка на обновления
};
