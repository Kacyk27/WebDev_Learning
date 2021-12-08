const removeTask = (e) => {
    // // e.target.parentNode.remove();
    // e.target.parentNode.style.textDecoration = 'line-through';
    // e.target.remove();


    //sposób II, niekoniecznie lepszy, bazuje na datasetach
    const index = e.target.dataset.key;
    document.querySelector(`[data-key = "${index}"]`).remove()
}



document.querySelectorAll('li').forEach(item => item.addEventListener('click', removeTask));
