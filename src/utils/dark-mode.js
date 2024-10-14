const darkmode = () => {
    const themeToggleBtns = document.querySelectorAll('#theme-toggle');
    
    themeToggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            localStorage.setItem('theme', 'light-mode')
        });
    });
}

export default darkmode;
