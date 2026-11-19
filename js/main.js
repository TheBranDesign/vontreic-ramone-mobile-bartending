/**
 * VONTREIC RAMONE — PREMIUM MOBILE BARTENDING
 * Interactive Application Scripts
 * Designed by The Brand Design
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --- 1. STICKY NAVIGATION & SCROLL LISTENER ---
  const header = document.querySelector('.site-header');
  const backToTopBtn = document.querySelector('.back-to-top-btn');

  const handleScroll = () => {
    const scrollPos = window.scrollY;
    if (scrollPos > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    if (scrollPos > 450) {
      backToTopBtn?.classList.add('visible');
    } else {
      backToTopBtn?.classList.remove('visible');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // --- 2. MOBILE NAVIGATION DRAWER ---
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const mobileDrawer = document.querySelector('.mobile-nav-drawer');
  const mobileBackdrop = document.querySelector('.mobile-backdrop');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link, .mobile-drawer-close');

  const toggleMobileNav = (open) => {
    const isOpen = open !== undefined ? open : !mobileDrawer?.classList.contains('open');
    if (isOpen) {
      mobileDrawer?.classList.add('open');
      mobileBackdrop?.classList.add('open');
      hamburgerBtn?.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    } else {
      mobileDrawer?.classList.remove('open');
      mobileBackdrop?.classList.remove('open');
      hamburgerBtn?.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  };

  hamburgerBtn?.addEventListener('click', () => toggleMobileNav());
  mobileBackdrop?.addEventListener('click', () => toggleMobileNav(false));

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleMobileNav(false);
    });
  });

  // Close mobile drawer on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer?.classList.contains('open')) {
      toggleMobileNav(false);
    }
  });

  // --- 3. ACTIVE NAV LINK HIGHLIGHTING ---
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.nav-link');

  const highlightNav = () => {
    const scrollPosition = window.scrollY + 120;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollPosition >= top && scrollPosition < top + height) {
        desktopNavLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightNav, { passive: true });

  // --- 4. COCKTAIL MENU DATA & DYNAMIC TABS ---
  const cocktailData = {
    classic: [
      {
        name: 'Margarita',
        tag: 'Agave & Citrus',
        profile: 'Crisp, Tart & Refreshing',
        ingredients: 'Premium Blanco Tequila, Cointreau or Orange Liqueur, Fresh Lime Juice, Agave Nectar, Salt Rim',
        image: 'assets/images/cocktail-margarita.jpg'
      },
      {
        name: 'Mojito',
        tag: 'Cuban Mint Classic',
        profile: 'Bright, Herbal & Fizzy',
        ingredients: 'White Rum, Fresh Mint Leaves, Fresh Lime Juice, Pure Cane Sugar, Sparkling Soda Water',
        image: 'assets/images/cocktail-mojito.jpg'
      },
      {
        name: 'Old Fashioned',
        tag: 'Timeless Spirit',
        profile: 'Rich, Aromatic & Bold',
        ingredients: 'Bourbon or Rye Whiskey, Angostura & Orange Bitters, Demerara Sugar Cube, Luxardo Cherry, Orange Peel',
        image: 'assets/images/cocktail-old-fashioned.jpg'
      },
      {
        name: 'Espresso Martini',
        tag: 'Modern Icon',
        profile: 'Velvety, Roasted & Sophisticated',
        ingredients: 'Artisan Vodka, Freshly Pulled Espresso, Coffee Liqueur, Madagascar Vanilla, Whole Coffee Bean Garnish',
        image: 'assets/images/cocktail-espresso-martini.jpg'
      },
      {
        name: 'Whiskey Sour',
        tag: 'Silky Citrus',
        profile: 'Balanced, Tart & Smooth',
        ingredients: 'Kentucky Bourbon, Fresh Lemon Juice, Rich Simple Syrup, Angostura Bitters Foam, Lemon Wheel',
        image: 'assets/images/cocktail-whiskey-sour.jpg'
      },
      {
        name: 'French 75',
        tag: 'Sparkling Elegance',
        profile: 'Effervescent, Botanical & Celebratory',
        ingredients: 'London Dry Gin, Fresh Lemon Juice, Simple Syrup, Chilled Brut Champagne or Prosecco, Lemon Twist',
        image: 'assets/images/cocktail-french-75.jpg'
      }
    ],
    signature: [
      {
        name: 'Berry Smash',
        tag: 'Signature Creation',
        profile: 'Muddled Fresh Berries & Herbaceous Mint',
        ingredients: 'Bourbon or Vodka, Muddled Blackberries & Strawberries, Fresh Lemon, Wild Mint, Touch of Blossom Honey',
        image: 'assets/images/cocktail-berry-smash.jpg'
      },
      {
        name: 'Peach Spritz',
        tag: 'Signature Creation',
        profile: 'Sparkling, Stone-Fruit & Aromatic',
        ingredients: 'Aperitivo Liqueur, Orchard Peach Purée, Crisp Prosecco, Splash of Club Soda, Fresh Thyme Sprig',
        image: 'assets/images/cocktail-peach-spritz.jpg'
      },
      {
        name: 'Pineapple Mule',
        tag: 'Signature Creation',
        profile: 'Tropical Warmth & Spicy Ginger',
        ingredients: 'Vodka or Dark Rum, Fresh Pressed Pineapple Juice, Fiery Ginger Beer, Fresh Lime, Charred Pineapple Wedge',
        image: 'assets/images/cocktail-pineapple-mule.jpg'
      },
      {
        name: 'Watermelon Fizz',
        tag: 'Signature Creation',
        profile: 'Sweet Summer Crisp & Cooling',
        ingredients: 'Silver Tequila or Gin, Cold-Pressed Watermelon Juice, Fresh Lime, Basil Cordial, Sparkling Mineral Water',
        image: 'assets/images/cocktail-watermelon-fizz.jpg'
      },
      {
        name: 'Cucumber Cooler',
        tag: 'Signature Creation',
        profile: 'Ultra-Crisp, Botanic & Hydrating',
        ingredients: 'Botanical Gin or Vodka, Muddled English Cucumber, St. Germain Elderflower, Fresh Lime, Tonic Mist',
        image: 'assets/images/cocktail-cucumber-cooler.jpg'
      }
    ],
    zeroproof: [
      {
        name: 'Citrus Garden',
        tag: 'Zero-Proof Mocktail',
        profile: 'Botanical, Tart & Bright',
        ingredients: 'Seedlip Grove or Distilled Botanical Water, Blood Orange, Meyer Lemon, Rosemary Syrup, Club Soda',
        image: 'assets/images/cocktail-citrus-garden.jpg'
      },
      {
        name: 'Berry Nojito',
        tag: 'Zero-Proof Mocktail',
        profile: 'Fizzy, Fruity & Herbaceous',
        ingredients: 'Fresh Raspberries, Crushed Garden Mint, Fresh Key Lime Juice, Agave Nectar, Sparkling Soda',
        image: 'assets/images/cocktail-berry-nojito.jpg'
      },
      {
        name: 'Ginger Peach Fizz',
        tag: 'Zero-Proof Mocktail',
        profile: 'Spiced Stone Fruit & Effervescence',
        ingredients: 'White Peach Nectar, Artisanal Ginger Brew, Fresh Lemon Juice, Honey Float, Candied Ginger Garnish',
        image: 'assets/images/cocktail-ginger-peach.jpg'
      },
      {
        name: 'Cucumber Limeade',
        tag: 'Zero-Proof Mocktail',
        profile: 'Cooling, Refreshing & Crisp',
        ingredients: 'Fresh Pressed Cucumber Water, Fresh Lime Juice, Organic Cane Sugar, Mint Ribbon, Sea Salt Pinch',
        image: 'assets/images/cocktail-cucumber-limeade.jpg'
      }
    ]
  };

  const menuGrid = document.getElementById('cocktailMenuGrid');
  const menuTabBtns = document.querySelectorAll('.menu-tab-btn');

  const renderCocktails = (category) => {
    if (!menuGrid) return;
    const drinks = cocktailData[category] || [];

    // Fade effect
    menuGrid.style.opacity = '0';
    setTimeout(() => {
      menuGrid.innerHTML = drinks.map(drink => `
        <article class="cocktail-card">
          <div class="cocktail-img-wrap">
            <img src="${drink.image}" alt="${drink.name}" class="cocktail-img" loading="lazy" />
            <span class="cocktail-tag">${drink.tag}</span>
          </div>
          <div class="cocktail-content">
            <h3 class="cocktail-name">${drink.name}</h3>
            <p class="cocktail-profile">${drink.profile}</p>
            <p class="cocktail-ingredients">${drink.ingredients}</p>
            <button type="button" class="cocktail-request-btn" data-drink="${drink.name}">
              <span>+ Add to Event Consultation</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>
        </article>
      `).join('');

      menuGrid.style.opacity = '1';

      // Attach event listeners to new "+ Add to Consultation" buttons
      document.querySelectorAll('.cocktail-request-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const drinkName = e.currentTarget.getAttribute('data-drink');
          addDrinkToInquiry(drinkName);
        });
      });
    }, 180);
  };

  menuTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      menuTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-category');
      renderCocktails(category);
    });
  });

  // Render initial classics
  renderCocktails('classic');

  // Helper to append a selected drink to the booking form's additional details
  const addDrinkToInquiry = (drinkName) => {
    const detailsField = document.getElementById('eventDetails');
    if (detailsField) {
      const current = detailsField.value.trim();
      const prefix = 'Requested Drink Idea: ';
      if (!current.includes(drinkName)) {
        detailsField.value = current ? `${current}\n${prefix}${drinkName}` : `${prefix}${drinkName}`;
      }
      
      // Temporary button feedback
      showToast(`Added "${drinkName}" to your event inquiry details.`);

      // Smooth scroll to booking
      const bookingSec = document.getElementById('booking');
      bookingSec?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Toast notification helper
  const showToast = (message) => {
    let toast = document.getElementById('siteToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'siteToast';
      toast.style.position = 'fixed';
      toast.style.bottom = '2rem';
      toast.style.left = '50%';
      toast.style.transform = 'translateX(-50%) translateY(100px)';
      toast.style.background = '#181822';
      toast.style.border = '1px solid #D4AF37';
      toast.style.color = '#F8FAFC';
      toast.style.padding = '0.8rem 1.6rem';
      toast.style.borderRadius = '9999px';
      toast.style.fontSize = '0.88rem';
      toast.style.boxShadow = '0 10px 30px rgba(0,0,0,0.8), 0 0 15px rgba(212,175,55,0.2)';
      toast.style.zIndex = '3000';
      toast.style.transition = 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease';
      toast.style.opacity = '0';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';

    clearTimeout(window._toastTimer);
    window._toastTimer = setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(100px)';
    }, 3200);
  };

  // --- 5. INTERACTIVE DRINK CALCULATOR TOOL ---
  const guestSlider = document.getElementById('calcGuests');
  const hoursSlider = document.getElementById('calcHours');
  const guestDisplay = document.getElementById('calcGuestsVal');
  const hoursDisplay = document.getElementById('calcHoursVal');
  const totalDrinksDisplay = document.getElementById('calcTotalDrinks');
  const wineDisplay = document.getElementById('calcWine');
  const beerDisplay = document.getElementById('calcBeer');
  const liquorDisplay = document.getElementById('calcLiquor');
  const copyCalcBtn = document.getElementById('copyCalcToInquiry');

  const updateCalculator = () => {
    if (!guestSlider || !hoursSlider) return;
    const guests = parseInt(guestSlider.value, 10);
    const hours = parseInt(hoursSlider.value, 10);

    if (guestDisplay) guestDisplay.textContent = `${guests} Guests`;
    if (hoursDisplay) hoursDisplay.textContent = `${hours} Hours`;

    // Hospitality beverage standard: 2 drinks first hour, 1 drink every subsequent hour
    const drinksPerPerson = 2 + Math.max(0, hours - 1);
    const totalDrinks = guests * drinksPerPerson;

    // Typical event breakdown: ~45% Wine, ~30% Beer, ~25% Cocktails/Spirits
    const wineDrinks = Math.round(totalDrinks * 0.45);
    const wineBottles = Math.ceil(wineDrinks / 5); // 5 glasses per 750ml bottle
    const beerCans = Math.round(totalDrinks * 0.30);
    const cocktailServings = Math.round(totalDrinks * 0.25);

    if (totalDrinksDisplay) totalDrinksDisplay.textContent = totalDrinks.toLocaleString();
    if (wineDisplay) wineDisplay.textContent = `${wineBottles} Bottles`;
    if (beerDisplay) beerDisplay.textContent = `${beerCans} Cans/Bottles`;
    if (liquorDisplay) liquorDisplay.textContent = `${cocktailServings} Servings`;
  };

  guestSlider?.addEventListener('input', updateCalculator);
  hoursSlider?.addEventListener('input', updateCalculator);
  updateCalculator();

  copyCalcBtn?.addEventListener('click', () => {
    const guests = guestSlider?.value || '50';
    const hours = hoursSlider?.value || '4';
    const total = totalDrinksDisplay?.textContent || '';
    const wine = wineDisplay?.textContent || '';
    const beer = beerDisplay?.textContent || '';
    const liquor = liquorDisplay?.textContent || '';

    const textToInsert = `[Beverage Estimation]\nGuests: ${guests} | Duration: ${hours} hrs | Approx. Total Drinks: ${total}\nBreakdown: Wine: ${wine}, Beer: ${beer}, Cocktails: ${liquor}`;

    const detailsField = document.getElementById('eventDetails');
    const guestField = document.getElementById('guestCount');

    if (guestField) guestField.value = guests;
    if (detailsField) {
      detailsField.value = detailsField.value ? `${detailsField.value}\n\n${textToInsert}` : textToInsert;
    }

    showToast('Calculated beverage estimate copied to your inquiry form!');
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  });

  // --- 6. SERVICES & PACKAGES PRE-SELECTION CLICKS ---
  // When a user clicks "Inquire Now" on a service card, scroll to #booking and preselect event type
  const serviceActionLinks = document.querySelectorAll('[data-service-select]');
  serviceActionLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceName = link.getAttribute('data-service-select');
      const eventTypeSelect = document.getElementById('eventType');
      if (eventTypeSelect) {
        for (let i = 0; i < eventTypeSelect.options.length; i++) {
          if (eventTypeSelect.options[i].value.toLowerCase().includes(serviceName.toLowerCase()) ||
              eventTypeSelect.options[i].text.toLowerCase().includes(serviceName.toLowerCase())) {
            eventTypeSelect.selectedIndex = i;
            break;
          }
        }
      }
      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
      showToast(`Selected event category: "${serviceName}"`);
    });
  });

  // When a user clicks "Request This Package", scroll to #booking and preselect package
  const packageActionBtns = document.querySelectorAll('[data-package-select]');
  packageActionBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const pkgName = btn.getAttribute('data-package-select');
      const packageSelect = document.getElementById('preferredPackage');
      if (packageSelect) {
        for (let i = 0; i < packageSelect.options.length; i++) {
          if (packageSelect.options[i].value.toLowerCase().includes(pkgName.toLowerCase()) ||
              packageSelect.options[i].text.toLowerCase().includes(pkgName.toLowerCase())) {
            packageSelect.selectedIndex = i;
            break;
          }
        }
      }
      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
      showToast(`Selected package: "${pkgName}"`);
    });
  });

  // --- 7. GALLERY LIGHTBOX ---
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightboxModal = document.getElementById('galleryLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxCounter = document.getElementById('lightboxCounter');
  const lightboxCloseBtn = document.getElementById('lightboxClose');
  const lightboxPrevBtn = document.getElementById('lightboxPrev');
  const lightboxNextBtn = document.getElementById('lightboxNext');

  let currentGalleryIndex = 0;
  const galleryData = Array.from(galleryItems).map(item => ({
    src: item.querySelector('.gallery-img')?.getAttribute('src') || '',
    title: item.querySelector('.gallery-title')?.textContent || '',
    category: item.querySelector('.gallery-category')?.textContent || ''
  }));

  const openLightbox = (index) => {
    if (!lightboxModal || !galleryData[index]) return;
    currentGalleryIndex = index;
    const item = galleryData[currentGalleryIndex];
    if (lightboxImg) lightboxImg.src = item.src;
    if (lightboxCaption) lightboxCaption.textContent = `${item.title} — ${item.category}`;
    if (lightboxCounter) lightboxCounter.textContent = `${currentGalleryIndex + 1} / ${galleryData.length}`;

    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  };

  const showNextLightbox = () => {
    currentGalleryIndex = (currentGalleryIndex + 1) % galleryData.length;
    openLightbox(currentGalleryIndex);
  };

  const showPrevLightbox = () => {
    currentGalleryIndex = (currentGalleryIndex - 1 + galleryData.length) % galleryData.length;
    openLightbox(currentGalleryIndex);
  };

  galleryItems.forEach((item, idx) => {
    item.addEventListener('click', () => openLightbox(idx));
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(idx);
      }
    });
  });

  lightboxCloseBtn?.addEventListener('click', closeLightbox);
  lightboxPrevBtn?.addEventListener('click', showPrevLightbox);
  lightboxNextBtn?.addEventListener('click', showNextLightbox);

  lightboxModal?.addEventListener('click', (e) => {
    if (e.target === lightboxModal) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (!lightboxModal?.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNextLightbox();
    if (e.key === 'ArrowLeft') showPrevLightbox();
  });

  // Touch swipe support for lightbox
  let touchStartX = 0;
  let touchEndX = 0;
  lightboxModal?.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  lightboxModal?.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) showNextLightbox();
    if (touchEndX - touchStartX > 50) showPrevLightbox();
  }, { passive: true });

  // --- 8. TESTIMONIAL SLIDER ---
  const slides = document.querySelectorAll('.testimonial-slide');
  const prevSlideBtn = document.getElementById('testPrevBtn');
  const nextSlideBtn = document.getElementById('testNextBtn');
  const dotsContainer = document.getElementById('testimonialDots');

  let currentSlideIndex = 0;
  let slideInterval = null;

  // Generate dots
  if (dotsContainer && slides.length > 0) {
    dotsContainer.innerHTML = '';
    slides.forEach((_, idx) => {
      const dot = document.createElement('div');
      dot.className = `testimonial-dot ${idx === 0 ? 'active' : ''}`;
      dot.setAttribute('role', 'button');
      dot.setAttribute('aria-label', `Go to testimonial slide ${idx + 1}`);
      dot.addEventListener('click', () => goToSlide(idx));
      dotsContainer.appendChild(dot);
    });
  }

  const goToSlide = (index) => {
    slides.forEach((s, idx) => {
      s.classList.toggle('active', idx === index);
    });
    const dots = dotsContainer?.querySelectorAll('.testimonial-dot');
    dots?.forEach((d, idx) => {
      d.classList.toggle('active', idx === index);
    });
    currentSlideIndex = index;
  };

  const nextSlide = () => {
    const nextIdx = (currentSlideIndex + 1) % slides.length;
    goToSlide(nextIdx);
  };

  const prevSlide = () => {
    const prevIdx = (currentSlideIndex - 1 + slides.length) % slides.length;
    goToSlide(prevIdx);
  };

  nextSlideBtn?.addEventListener('click', () => {
    nextSlide();
    resetSlideTimer();
  });

  prevSlideBtn?.addEventListener('click', () => {
    prevSlide();
    resetSlideTimer();
  });

  const startSlideTimer = () => {
    slideInterval = setInterval(nextSlide, 7000);
  };

  const resetSlideTimer = () => {
    if (slideInterval) clearInterval(slideInterval);
    startSlideTimer();
  };

  const sliderTrack = document.querySelector('.testimonial-slide-track');
  sliderTrack?.addEventListener('mouseenter', () => clearInterval(slideInterval));
  sliderTrack?.addEventListener('mouseleave', startSlideTimer);

  startSlideTimer();

  // --- 9. FAQ ACCORDION ---
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    btn?.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      // Close other open items
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
          other.querySelector('.faq-question-btn')?.setAttribute('aria-expanded', 'false');
        }
      });
      // Toggle current
      if (isActive) {
        item.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // --- 10. BOOKING FORM VALIDATION & MAILTO SUBMISSION ---
  const bookingForm = document.getElementById('bookingForm');
  const modalOverlay = document.getElementById('confirmationModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalCopyBtn = document.getElementById('modalCopyBtn');
  const modalDetailsBox = document.getElementById('modalDetailsBox');

  // Clear errors on user input & enforce min date
  const eventDateField = document.getElementById('eventDate');
  if (eventDateField) {
    const today = new Date().toISOString().split('T')[0];
    eventDateField.min = today;
  }

  bookingForm?.querySelectorAll('input, select, textarea').forEach(el => {
    el.addEventListener('input', () => {
      el.classList.remove('error');
      el.closest('.form-group')?.classList.remove('has-error');
    });
    el.addEventListener('change', () => {
      el.classList.remove('error');
      el.closest('.form-group')?.classList.remove('has-error');
    });
  });

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone) => {
    return /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(phone.trim());
  };

  bookingForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    const requiredInputs = bookingForm.querySelectorAll('[required]');

    // Reset previous error classes
    bookingForm.querySelectorAll('.form-group').forEach(grp => grp.classList.remove('has-error'));
    bookingForm.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(el => el.classList.remove('error'));

    requiredInputs.forEach(input => {
      const val = input.value.trim();
      const parent = input.closest('.form-group');

      if (!val) {
        isValid = false;
        parent?.classList.add('has-error');
        input.classList.add('error');
      } else if (input.type === 'email' && !validateEmail(val)) {
        isValid = false;
        parent?.classList.add('has-error');
        input.classList.add('error');
      } else if (input.id === 'phone' && !validatePhone(val)) {
        isValid = false;
        parent?.classList.add('has-error');
        input.classList.add('error');
      }
    });

    if (!isValid) {
      const firstError = bookingForm.querySelector('.has-error');
      firstError?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      firstError?.querySelector('input, select, textarea')?.focus();
      return;
    }

    // Collect data
    const fullName = document.getElementById('fullName')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const phone = document.getElementById('phone')?.value.trim();
    const eventType = document.getElementById('eventType')?.value;
    const eventDate = document.getElementById('eventDate')?.value;
    const eventLocation = document.getElementById('eventLocation')?.value.trim();
    const guestCount = document.getElementById('guestCount')?.value.trim();
    const preferredPackage = document.getElementById('preferredPackage')?.value;
    const eventDetails = document.getElementById('eventDetails')?.value.trim();

    // Format email body
    const emailSubject = `Event Quote Request: ${fullName} - ${eventType} (${eventDate || 'Date TBD'})`;
    const emailBody = 
`Hello Vontreic,

I would like to request a custom mobile bartending quote for my upcoming event. Here are my event details:

--------------------------------------------------
EVENT INQUIRY DETAILS
--------------------------------------------------
• Client Name: ${fullName}
• Email: ${email}
• Phone: ${phone}
• Event Type: ${eventType}
• Event Date: ${eventDate || 'Not specified yet'}
• Event Location: ${eventLocation || 'Not specified'}
• Estimated Guest Count: ${guestCount} guests
• Preferred Bartending Package: ${preferredPackage}

ADDITIONAL EVENT DETAILS & NOTES:
${eventDetails ? eventDetails : 'None provided.'}

--------------------------------------------------
Inquiry prepared via Vontreic Ramone Mobile Bartending Website
Demonstration Platform by The Brand Design
--------------------------------------------------`;

    // Construct mailto link
    const mailtoUrl = `mailto:vontreicec28@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    // Populate modal summary preview
    if (modalDetailsBox) {
      modalDetailsBox.innerHTML = `
        <div style="line-height: 1.6;">
          <strong>Client:</strong> ${escapeHtml(fullName)}<br>
          <strong>Email:</strong> ${escapeHtml(email)}<br>
          <strong>Phone:</strong> ${escapeHtml(phone)}<br>
          <strong>Event:</strong> ${escapeHtml(eventType)} on ${escapeHtml(eventDate || 'Date TBD')}<br>
          <strong>Location:</strong> ${escapeHtml(eventLocation || 'TBD')}<br>
          <strong>Guests:</strong> ${escapeHtml(guestCount)} guests<br>
          <strong>Package:</strong> ${escapeHtml(preferredPackage)}<br>
          ${eventDetails ? `<strong>Notes:</strong> ${escapeHtml(eventDetails)}` : ''}
        </div>
      `;
    }

    // Trigger mailto open
    window.location.href = mailtoUrl;

    // Show confirmation modal
    if (modalOverlay) {
      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  });

  const escapeHtml = (str) => {
    if (!str) return '';
    return str.replace(/[&<>"']/g, function(m) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m];
    });
  };

  modalCloseBtn?.addEventListener('click', () => {
    modalOverlay?.classList.remove('active');
    document.body.style.overflow = '';
  });

  modalCopyBtn?.addEventListener('click', () => {
    if (modalDetailsBox) {
      navigator.clipboard.writeText(modalDetailsBox.innerText)
        .then(() => showToast('Inquiry details copied to clipboard!'))
        .catch(() => showToast('Unable to copy details.'));
    }
  });

  modalOverlay?.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // --- 11. DYNAMIC COPYRIGHT YEAR ---
  const copyrightYear = document.getElementById('currentYear');
  if (copyrightYear) {
    copyrightYear.textContent = new Date().getFullYear();
  }
});
