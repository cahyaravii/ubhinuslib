const books = [
    { 
        title: "Jaringan Komputer", 
        link: "https://online.fliphtml5.com/hnjik/kbvf/", 
        thumbnail: "img/jaringankomputer.jpg"
    },
    { 
        title: "Computer Graphics", 
        link: "https://online.fliphtml5.com/hnjik/ukoz/", 
        thumbnail: "img/computergraphics.jpg"
    },
    { 
        title: "Belajar MS WOrd 2012", 
        link: "https://online.fliphtml5.com/hnjik/oypd/", 
        thumbnail: "img/belajarmsword2010.jpg"
    },
    { 
        title: "Panduan Merakit Komputer", 
        link: "https://online.fliphtml5.com/hnjik/sdrz/", 
        thumbnail: "img/bukumerakitkomputer.jpg"
    },
    { 
        title: "Analysis and Design Using MATLAB", 
        link: "https://online.fliphtml5.com/hnjik/cpzu/", 
        thumbnail: "img/designmatlab.jpg"
    },
    { 
        title: "Bikin Game Anti Ribet", 
        link: "https://online.fliphtml5.com/zliik/uwhu/", 
        thumbnail: "img/bikingameantiribet.jpg"
    },
    { 
        title: "Linux Fundamentals", 
        link: "https://online.fliphtml5.com/zliik/xvbi/", 
        thumbnail: "img/linuxfundamental.jpg"
    },
    { 
        title: "Mikrotik Kungfu Kitab 1", 
        link: "https://online.fliphtml5.com/zliik/lozg/", 
        thumbnail: "img/mikrokitkungfu.jpg"
    },
    { 
        title: "Object Oriented Programming Using C#", 
        link: "https://online.fliphtml5.com/zliik/uhxa/", 
        thumbnail: "img/oopc.jpg"
    },
    { 
        title: "Peran Teknologi Dalam Pembangunan", 
        link: "https://online.fliphtml5.com/zliik/fgjs/", 
        thumbnail: "img/teknologimembangun.jpg"
    },
    { 
        title: "Islam dan Teknologi", 
        link: "https://online.fliphtml5.com/zauwuy/ulsg/", 
        thumbnail: "img/islamteknologi.jpg"
    },
    { 
        title: "Software Development, Design and Coding", 
        link: "https://online.fliphtml5.com/zauwuy/zkxh/", 
        thumbnail: "img/softwareandcoding.jpg"
    },
    { 
        title: "Deep Learning for Natural Language Processing", 
        link: "https://online.fliphtml5.com/zauwuy/itnd/", 
        thumbnail: "img/deepnlp.jpg"
    },
    { 
        title: "Practical Machine Learning and Image Processing", 
        link: "https://online.fliphtml5.com/zauwuy/itot/", 
        thumbnail: "img/pmlandip.jpg"
    },
    { 
        title: "Java Server Pages Tutorial", 
        link: "https://online.fliphtml5.com/zauwuy/xyie/", 
        thumbnail: "img/javaservertutor.jpg"
    },
    { 
        title: "Cryptography", 
        link: "https://online.fliphtml5.com/yxhvk/ymni/", 
        thumbnail: "img/cryptography.jpg"
    },
    { 
        title: "Boundary Values and Convolution in Ultradistribution Spaces", 
        link: "https://online.fliphtml5.com/yxhvk/whru/", 
        thumbnail: "img/boundaryvalues.jpg"
    },
    { 
        title: "Asymptotic Analysis and Boundary Layers", 
        link: "https://online.fliphtml5.com/yxhvk/uspt/", 
        thumbnail: "img/asymptotic.jpg"
    },
    { 
        title: " Linear Algebra", 
        link: "https://online.fliphtml5.com/yxhvk/hmqu/", 
        thumbnail: "img/algebra.jpg"
    },
    { 
        title: "Problems Based Course in Advanced Calculus", 
        link: "https://online.fliphtml5.com/yxhvk/nyde/", 
        thumbnail: "img/calculus.jpg"
    }

    
];

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
