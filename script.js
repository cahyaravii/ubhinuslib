//Data Buku
const books = [
    { 
        title: "Dasar Pemrograman Python", 
        link: "https://drive.google.com/file/d/1R1HLJrrW5B6YOegFDQTejZ20SFIedPfN/view?usp=sharing", 
        thumbnail: "img/dasarpemrogramanpython.jpg"
    },
    { 
        title: "Computer Graphics", 
        link: "https://drive.google.com/file/d/1pMHf74OUJv_0RAiLtqUlLUNVWejZm0kj/view?usp=sharing", 
        thumbnail: "img/Computergraphics.jpg"
    },
    { 
        title: "Belajar MS WOrd 2012", 
        link: "https://drive.google.com/file/d/1zWj3C3gSXtyy15IAo3W3vxQdZFpDWuxj/view?usp=sharing", 
        thumbnail: "img/belajarmsword2010.jpg"
    },
    { 
        title: "Panduan Merakit Komputer", 
        link: "https://drive.google.com/file/d/1N12HOhNo5RLlBff6VH8n6q2Z0A6sXqLM/view?usp=sharing", 
        thumbnail: "img/bukumerakitkomputer.jpg"
    },
    { 
        title: "Analysis and Design Using MATLAB", 
        link: "https://drive.google.com/file/d/16-wrtZjN27V0Taqvjg6xGG8PIIB4twKh/view?usp=sharing", 
        thumbnail: "img/designmatlab.jpg"
    },
    { 
        title: "Bikin Game Anti Ribet", 
        link: "https://drive.google.com/file/d/1XgRaa5lz68DpDLtHaaOJxuYEL4__69f-/view?usp=sharing", 
        thumbnail: "img/bikingameantiribet.jpg"
    },
    { 
        title: "Linux Fundamentals", 
        link: "https://drive.google.com/file/d/1d5K8jpTe4glHV__QU9VIcBlUaCsHWupy/view?usp=sharing", 
        thumbnail: "img/linuxfundamental.jpg"
    },
    { 
        title: "Mikrotik Kungfu Kitab 1", 
        link: "https://drive.google.com/file/d/177WNgCcn7Rd2VdEUN4iXiyPyIdk-CQq5/view?usp=sharing", 
        thumbnail: "img/mikrokitkungfu.jpg"
    },
    { 
        title: "Object Oriented Programming Using C#", 
        link: "https://drive.google.com/file/d/1YMSd_Tde6NY1Nfd1Yb9IRNzmLezLLKbM/view?usp=sharing", 
        thumbnail: "img/oopc.jpg"
    },
    { 
        title: "Peran Teknologi Dalam Pembangunan", 
        link: "https://drive.google.com/file/d/1nPJjOSB89XAw2PuHRe8hOf3VgXTkxI9d/view?usp=sharing", 
        thumbnail: "img/teknologimembangun.jpg"
    },
    { 
        title: "Dasar Pemrograman Rust", 
        link: "https://drive.google.com/file/d/1MJbtAVxZlcM4x_56GbzOH-4RZUxUvpdO/view?usp=sharing", 
        thumbnail: "img/dasarpemrogramanrust.jpg"
    },
    { 
        title: "Software Development, Design and Coding", 
        link: "https://drive.google.com/file/d/1W7-WexYbWpVFo1_gc9hsCJKbVu3aw4XH/view?usp=sharing", 
        thumbnail: "img/softwareandcoding.jpg"
    },
    { 
        title: "Deep Learning for Natural Language Processing", 
        link: "https://drive.google.com/file/d/1XxGvYDxf-092Ag1C0Y81nFsjLJyLAddz/view?usp=sharing", 
        thumbnail: "img/Deepnlp.jpg"
    },
    { 
        title: "Practical Machine Learning and Image Processing", 
        link: "https://drive.google.com/file/d/1tiD7P9QxNxZswRvjOxmBY8SpCpvSsTKD/view?usp=sharing", 
        thumbnail: "img/pmlandip.jpg"
    },
    { 
        title: "Java Server Pages Tutorial", 
        link: "https://drive.google.com/file/d/1e_N-YdX8P4maiqZa03fQUmKSdXorspNq/view?usp=sharing", 
        thumbnail: "img/javaservertutor.jpg"
    },
    { 
        title: "Cryptography", 
        link: "https://drive.google.com/file/d/1KMw-uepxSgQmvraS9AIHV0jY0o_BKukj/view?usp=sharing", 
        thumbnail: "img/cryptography.jpg"
    },
    { 
        title: "Boundary Values and Convolution in Ultradistribution Spaces", 
        link: "https://drive.google.com/file/d/1w3UixZfePjrzDwAA5ldtTyjYA4hO9ox2/view?usp=sharing", 
        thumbnail: "img/boundaryvalues.jpg"
    },
    { 
        title: "Islam dan Teknologi", 
        link: "https://drive.google.com/file/d/1mNXI0tOn_AcEELy7ua_wyUc34L_V4X8z/view?usp=sharing", 
        thumbnail: "img/islamteknologi.jpg"
    },
    { 
        title: " Linear Algebra", 
        link: "https://drive.google.com/file/d/1TmgkBO_hnHOXvGrVfBHiDvnNwXMyhetM/view?usp=sharing", 
        thumbnail: "img/algebra.jpg"
    },
    { 
        title: "Problems Based Course in Advanced Calculus", 
        link: "https://drive.google.com/file/d/1iG9oAcQwV99QH_aIOOcebrxTd5TGLVE4/view?usp=sharing", 
        thumbnail: "img/calculus.jpg"
    }

    
];

//fungsi tampilan buku
function renderBooks(booksToRender) {
    const container = document.getElementById("book-container");
    container.innerHTML = ""; // Bersihkan dulu

    if (booksToRender.length === 0) {
        container.innerHTML = `<p style="grid-column: 1 / -1; text-align: center; font-size: 18px; color: #555;">
            Maaf, buku belum tersedia.
        </p>`;
        return;
    }

    booksToRender.forEach(book => {
        const card = document.createElement("div");
        card.classList.add("book-card");
        card.innerHTML = `
            <a href="${book.link}" >
                <img src="${book.thumbnail}" alt="${book.title}">
            </a>
            <h3>${book.title}</h3>
        `;
        container.appendChild(card);
    });
}

// Fungsi Pencarian
function setupSearch() {
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        const filteredBooks = books.filter(book => book.title.toLowerCase().includes(query));
        renderBooks(filteredBooks);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderBooks(books);
    setupSearch();
});
