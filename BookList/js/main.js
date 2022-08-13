const title = document.getElementById('book_name');
const author = document.getElementById('author');
const year = document.getElementById('year');
const btn = document.getElementById('btn');
const table = document.getElementById('table');

btn.onclick = (e) => {
    e.preventDefault();
    
    if(title.value == '' && author.value == '' && year.value == ''){
        alert('kiso akta den')
    } else {
        const newRow = document.createElement('tr');

        const newTitle = document.createElement('th');
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);

        const newAuthor = document.createElement('th');
        newAuthor.innerHTML = author.value;
        newRow.append(newAuthor);

        const newYear = document.createElement('th');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);

        table.appendChild(newRow);

        title.value = '';
        author.value = '';
        year.value = '';
    }
}