let modalTemplate = '';
let templateLoaded = false;
window.modalOpen = false; 

fetch('/components/modal.html')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
    })
    .then(html => {
        modalTemplate = html;
        templateLoaded = true;
    })
    .catch(error => console.error('Error loading modal template:', error));

function createModal(id, content) {
    if (!templateLoaded) {
        return;
    }

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = modalTemplate;
    
    const overlay = tempDiv.querySelector('.modal-overlay');
    const modal = tempDiv.querySelector('.modal-triveinvest');
    modal.id = id;
    
    const modalContent = modal.querySelector('#modalContent');
    modalContent.innerHTML = content;

    document.body.appendChild(overlay);
    document.body.appendChild(modal);

    const closeBtn = modal.querySelector('.close');
    closeBtn.addEventListener('click', function(event) {
        event.stopPropagation();
        closeModal();
    });

    overlay.addEventListener('click', closeModal);

    // Prevent clicks on the modal from closing it
    modal.addEventListener('click', function(event) {
        event.stopPropagation();
    });
}

function showModal(modalId) {
    const modal = document.getElementById(modalId);
    const overlay = document.querySelector('.modal-overlay');
    if (modal && overlay) {
        overlay.style.display = "block"; 
        document.body.classList.add('modal-open');

        // window.onbeforeunload = function() {
        //     return 'You have unsaved changes!';
        // }

        // Mencegah penutupan tab hanya jika modal terbuka
        // if (!window.modalOpen) {
        //     console.log('Opening modal');
        //     window.modalOpen = true; // Menandai bahwa modal terbuka
        //     window.addEventListener('beforeunload', preventTabClose); // Tambahkan event listener
        // }
    } 
}

function closeModal() {
    const modal = document.querySelector('.modal-triveinvest');
    const overlay = document.querySelector('.modal-overlay');
    if (modal && overlay) {
        modal.style.display = "none";
        overlay.style.display = "none";
        document.body.classList.remove('modal-open');

        // Mengizinkan penutupan tab setelah modal ditutup
        // if (window.modalOpen) {
        //     console.log('Closing modal');
        //     window.modalOpen = false; // Menandai bahwa modal sudah ditutup
        //     window.removeEventListener('beforeunload', preventTabClose); // Hapus event listener
        // }
    }
}

// function preventTabClose(event) {
//     event.preventDefault();
//     event.returnValue = 'Anda yakin ingin menutup tab?'; 
// }

function initModal(id, content) {
    if (templateLoaded) {
        createModal(id, content);
        showModal(id);
    } else {
        console.log('Template not loaded yet, retrying in 100ms');
        setTimeout(() => initModal(id, content), 100);
    }
}

export { initModal };