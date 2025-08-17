// Tìm kiếm phim
document.getElementById("search").addEventListener("input", function () {
  const keyword = this.value.toLowerCase();
  const movies = document.querySelectorAll(".movie");

  movies.forEach((movie) => {
    const name = movie.dataset.name.toLowerCase();
    movie.style.display = name.includes(keyword) ? "block" : "none";
  });
});
