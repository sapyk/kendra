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
        // Hide it initially
        topBtn.style.display = "none";
        
        window.onscroll = function() {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                topBtn.style.display = "flex";
            } else {
                topBtn.style.display = "none";
            }
        };

        topBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 3. Populate Config Data
    if (typeof siteConfig !== 'undefined') {
        // Populate phone numbers
        document.querySelectorAll('.config-phone').forEach(el => {
            if (el.tagName === 'A') {
                el.href = `tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`;
            }
            el.textContent = siteConfig.contact.phone;
        });
        
        // Populate emails
        document.querySelectorAll('.config-email').forEach(el => {
            if (el.tagName === 'A') {
                el.href = `mailto:${siteConfig.contact.email}`;
            }
            el.textContent = siteConfig.contact.email;
        });

        // Populate address
        document.querySelectorAll('.config-address').forEach(el => {
            el.textContent = siteConfig.contact.address;
        });

        // Populate Programs if container exists
        const programsContainer = document.getElementById('programs-container');
        if (programsContainer && siteConfig.programs) {
            programsContainer.innerHTML = ''; // Clear existing
            siteConfig.programs.forEach(program => {
                const card = document.createElement('div');
                card.className = 'bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:-translate-y-1';
                card.innerHTML = `
                    <img src="${program.image}" alt="${program.title}" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-gray-900 mb-2">${program.title}</h3>
                        <p class="text-gray-600 mb-4">${program.description}</p>
                        <div class="flex items-center justify-between">
                            <span class="text-sm font-medium text-orange-600">${program.duration}</span>
                            <a href="register.html" class="text-orange-600 hover:text-orange-700 font-semibold">Enroll Now &rarr;</a>
                        </div>
                    </div>
                `;
                programsContainer.appendChild(card);
            });
        }
    }
});
