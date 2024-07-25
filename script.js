document.getElementById('homeBtn').addEventListener('click', function() {
    showDiv('home');
});

document.getElementById('aboutBtn').addEventListener('click', function() {
    showDiv('about');
});

document.getElementById('portfolioBtn').addEventListener('click', function() {
    showDiv('portfolio');
});

function showDiv(divId) {
    var contents = document.querySelectorAll('.content');
    contents.forEach(function(content) {
        content.classList.remove('active');
    });
    document.getElementById(divId).classList.add('active');
}

document.getElementById("hero").addEventListener(alert("clicked"));