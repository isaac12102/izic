
// Enable Bootstrap Tooltips
document.addEventListener('DOMContentLoaded', function () {
  const tooltipElements = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipElements.forEach(function (el) {
    new bootstrap.Tooltip(el);
  });
});
//javascript for toggle menu//
    <script>
        var navLinks = document.getElementById("navLinks")
        function showMenu()
        {
            navLinks.style.right = "0"
        }
        function hideMenu(){
            navLinks.style.right = "-200px"
        }
    </script>