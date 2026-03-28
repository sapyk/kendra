document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const btn = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');
    
    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }

    // 2. Go To Top Button
    const topBtn = document.getElementById("goToTopBtn");
    if (topBtn) {
        topBtn.style.display = "none";
        window.onscroll = function() {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                topBtn.style.display = "flex";
            } else {
                topBtn.style.display = "none";
            }
        };
        topBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 3. Populate Config Data
    if (typeof siteConfig !== 'undefined') {
        
        // Helper to get nested object properties by string path (e.g., "contact.phone")
        const getNestedValue = (obj, path) => {
            return path.split('.').reduce((acc, part) => acc && acc[part], obj);
        };

        // Populate text
        document.querySelectorAll('[data-config-text]').forEach(el => {
            const key = el.getAttribute('data-config-text');
            const value = getNestedValue(siteConfig, key);
            if (value) el.textContent = value;
        });

        // Populate images
        document.querySelectorAll('[data-config-image]').forEach(el => {
            const key = el.getAttribute('data-config-image');
            const value = getNestedValue(siteConfig, key);
            if (value) {
                if (el.tagName === 'IMG') {
                    el.src = value;
                } else {
                    el.style.backgroundImage = `url('${value}')`;
                }
            }
        });

        // Populate links
        document.querySelectorAll('[data-config-link]').forEach(el => {
            const key = el.getAttribute('data-config-link');
            if (key === 'whatsapp') {
                el.href = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`;
                el.target = '_blank';
                el.rel = 'noopener noreferrer';
            } else if (key === 'phone') {
                el.href = `tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`;
            } else if (key === 'email') {
                el.href = `mailto:${siteConfig.contact.email}`;
            } else {
                const value = getNestedValue(siteConfig, key);
                if (value) {
                    el.href = value;
                    el.style.display = ''; // Ensure visible if it was hidden
                    if (value.startsWith('http')) {
                        el.target = '_blank';
                        el.rel = 'noopener noreferrer';
                    }
                } else {
                    el.style.display = 'none'; // Hide if no link provided
                }
            }
        });

        // Populate Programs
        const programsContainer = document.getElementById('programs-container');
        if (programsContainer && siteConfig.programs) {
            programsContainer.innerHTML = ''; 
            siteConfig.programs.forEach(program => {
                const imgUrl = program.image || siteConfig.images.program;
                const detailsLink = program.detailsLink || "#";
                const card = document.createElement('div');
                card.className = 'bg-white rounded-lg shadow-sm overflow-hidden transition-transform transform hover:-translate-y-1 border border-gray-100 flex flex-col';
                card.innerHTML = `
                    <img src="${imgUrl}" alt="${program.title}" class="w-full h-48 object-cover object-center">
                    <div class="p-6 flex flex-col flex-grow">
                        <div class="flex justify-between items-start mb-2">
                            <h3 class="text-xl font-bold text-gray-900">${program.title}</h3>
                            <span class="text-sm font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded whitespace-nowrap ml-2">${program.price}</span>
                        </div>
                        <p class="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">${program.description}</p>
                        <div class="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
                            <a href="${detailsLink}" class="text-gray-500 hover:text-orange-600 font-medium text-sm transition-colors">More Details</a>
                            <a href="register.html" class="bg-orange-50 text-orange-600 hover:bg-orange-600 hover:text-white px-4 py-2 rounded text-sm font-semibold transition-colors">Enroll Now &rarr;</a>
                        </div>
                    </div>
                `;
                programsContainer.appendChild(card);
            });
        }

        // Populate Gallery
        const galleryContainer = document.getElementById('gallery-container');
        if (galleryContainer && siteConfig.images.gallery) {
            galleryContainer.innerHTML = '';
            siteConfig.images.gallery.forEach(imgSrc => {
                const div = document.createElement('div');
                div.className = 'overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300';
                div.innerHTML = `<img src="${imgSrc}" alt="Gallery Image" class="w-full h-64 object-cover hover:scale-105 transition-transform duration-500">`;
                galleryContainer.appendChild(div);
            });
        }
    }
});
