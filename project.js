document.querySelectorAll('.show-more').forEach(showMoreText => {
    showMoreText.addEventListener('click', () => {
        const project = showMoreText.closest('.project');
        const expandDetails = project.querySelector('.expand-details');
        
        if (expandDetails.style.display === 'none' || expandDetails.style.display === '') {
            expandDetails.style.display = 'block';
            showMoreText.textContent = 'Show Less';
        } else {
            expandDetails.style.display = 'none';
            showMoreText.textContent = 'Show More';
        }
    });
});