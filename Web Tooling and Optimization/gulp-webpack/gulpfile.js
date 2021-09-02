const gulp = require("gulp");
const pug = require("gulp-pug");
const autoprefixer = require("gulp-autoprefixer");

gulp.task("compilePug", async () => {
	gulp.src("./src/*.pug")
		.pipe(
			pug({
				// Your options in here.
			})
		)
		.pipe(gulp.dest("./dist"));
});

gulp.task("autoPrefixCss", async () =>
	gulp
		.src("src/app.css")
		.pipe(
			autoprefixer({
				cascade: false,
			})
		)
		.pipe(gulp.dest("dist"))
);
