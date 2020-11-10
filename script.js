document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('.open').addEventListener('click', () => {
        document.querySelector('body').classList.toggle('toggled')
    })
})