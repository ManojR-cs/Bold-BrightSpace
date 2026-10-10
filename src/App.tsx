import { useState, useEffect, useRef, type FormEvent } from 'react'
import {
  Menu,
  X,
  ArrowRight,
  Sparkles,
  Layers,
  Wrench,
  Compass,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Play
} from 'lucide-react'
import logoUrl from './assets/bbs-navbar-logo.png'
import heroPhotoUrl from './assets/stock-hero-interior.jpg'
import interiorServicesPhotoUrl from './assets/stock-services-interior.jpg'
import builtinsServicesPhotoUrl from './assets/stock-services-details.jpg'
import ceilingServicesPhotoUrl from './assets/stock-services-ceilings.jpg'
import fabricationServicesPhotoUrl from './assets/stock-services-interior.jpg'
import testimonialPhotoUrl from '../images&videos/854ee4c9-4803-40b6-9690-6f7acf05e852.JPG'

const projectAssetModules = import.meta.glob<string>('../images&videos/*.{JPG,jpg}', {
  eager: true,
  import: 'default',
  query: '?url',
})

type ProjectPhotoTheme = 'Ceilings & lighting' | 'Interiors & details'

const ceilingPhotoNames = new Set([
  '0f9a7cae-e1a7-4506-83fc-2643413db841.JPG',
  '11b99b0b-bb78-48cf-9d1c-0f41d5fb3a3c.JPG',
  '1f2a0c32-d524-458e-a6ee-2731cd345086.JPG',
  '20d15523-76a0-4f2c-b257-abfb79d48484.JPG',
  '25f048f2-5112-46b2-b7e5-e33c8ca6f900.JPG',
  '2ee8861e-f699-4f59-aaa7-d1509df38655.JPG',
  '32a06d63-40fb-4de3-8631-15da8f582409.JPG',
  '32f301db-ca05-4393-ae3f-cd2e654b2b1b.JPG',
  '3e85d99b-d8d4-480e-a500-564538f8ca90.JPG',
  '4356b7ca-872d-4647-bedb-7e03f350672a.JPG',
  '51c8f9b5-867e-4a70-a1e1-dee17f5c0990.JPG',
  '5598e9b3-fcc2-4cd1-901f-2ff54286856d.JPG',
  '5fa449ea-c0aa-4f89-8a5b-08b95a12c8c7.JPG',
  '687e5436-0d43-4b63-9cd0-d6b5dfc36e59.JPG',
  '6be32231-c408-40a2-ba2d-643cf7f4f335.JPG',
  '7391ebb9-e0a0-4383-87da-18f3f67f3190.JPG',
  '7f21c33b-db4e-4e32-9173-14ba08716409.JPG',
  '831bf8da-5c8f-433e-88eb-276835ea1f2b.JPG',
  '8606f9da-9786-4d95-a005-9c3762f7489a.JPG',
  '904e9a21-eea6-46a7-a3ef-20edabe24f10.JPG',
  '90c65adb-3a2f-4c04-bec7-3ac954dbb453.JPG',
  '9d46a523-1c2d-4662-8063-d10d57d0fda8.JPG',
  'ade33f37-88b2-4a82-8d81-55cbe5102727.JPG',
  'b0bbba24-e819-404d-a998-4096dba39b48.JPG',
  'b1a3dcd6-7fc5-4db6-b597-1a7cc69a9420.JPG',
  'B3AD53A9-7DD7-43A8-8E80-16B89BB5E3EE.JPG',
  'bb4e4e74-37e0-4c06-be94-66ba5de00041.JPG',
  'bd9d8d11-59fb-4f39-8467-6e171e29f452.JPG',
  'cdaf183d-46e8-4c0e-adb2-b5d986e6b7ee.JPG',
  'd81d4b72-58c7-4e2a-a8f4-d2ec2cc4946d.JPG',
  'fa64a7b3-dfb5-463f-9da0-44076aa4fd8d.JPG',
])

const projectAssets = Object.entries(projectAssetModules)
  .filter(([path]) => !path.includes('(2)') && !/logo/i.test(path))
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
  .map(([path, url]) => ({
    url,
    name: path.split(/[\\/]/).pop() ?? 'Project media',
    theme: ceilingPhotoNames.has(path.split(/[\\/]/).pop() ?? '') ? 'Ceilings & lighting' as const : 'Interiors & details' as const,
  }))
const currentYear = new Date().getFullYear()
const projectPhotoThemes: ProjectPhotoTheme[] = ['Ceilings & lighting', 'Interiors & details']

const googleReviews = [
  {
    business: 'GYP Decor interiors (POP Shop)',
    url: 'https://maps.app.goo.gl/xk869cryHqBvfVpm7',
    direction: 'up',
    entries: [
      { name: 'Siraj Pk', text: 'Awesome wholelsale shop with good services' },
      { name: 'AbSoLuTeLy StUd', text: 'All false ceiling material available at one space' },
      { name: 'Ayub Bike mechanic', text: 'Good wholesale shop' },
    ],
  },
  {
    business: 'Define Home Interiors',
    url: 'https://maps.app.goo.gl/LtvJaE7ztKMvtjS88?g_st=iw',
    direction: 'down',
    entries: [
      { name: 'Chetan Ckd', text: 'We had our home interiors done by define homes.   We had a very good experience especially the owner suhail he guided us with design material quality ....the workmanship was too good... Thank you' },
      { name: 'AbSoLuTeLy StUd', text: 'Work execution and handover was done on time really good team work' },
      { name: 'Sachitha', text: 'Nice work thank you ... we would also recommend others....' },
    ],
  },
]
const testimonialReelUrl = 'https://www.instagram.com/reel/DZhuvR8xC3y/'
const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Why Choose Us', href: '#why' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Instagram', href: '#instagram' },
  { label: 'Service Areas', href: '#service-areas' },
  { label: 'Contact', href: '#contact' },
]

function EnquiryForm({ idPrefix }: { idPrefix: string }) {
  const [whatsappFallback, setWhatsappFallback] = useState<{ url: string; message: string } | null>(null)
  const [submissionStatus, setSubmissionStatus] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return
    const details = new FormData(form)
    const message = [
      'Hello Bold & Bright Space,',
      `Name: ${details.get('name')}`,
      `Phone Number: ${details.get('phone')}`,
      `Location: ${details.get('location')}`,
      `Service Required: ${details.get('service')}`,
      `Project Details: ${details.get('details')}`,
    ].join('\n')
    const url = `https://wa.me/918722890061?text=${encodeURIComponent(message)}`
    const whatsappWindow = window.open(url, '_blank')

    if (whatsappWindow) {
      whatsappWindow.opener = null
      setWhatsappFallback(null)
      setSubmissionStatus('WhatsApp opened in a new tab. Review the prepared message and send it there to complete your enquiry.')
    } else {
      setSubmissionStatus('')
      setWhatsappFallback({ url, message })
    }
  }

  const inputClass = 'w-full rounded-lg border border-[#242732] bg-[#161922] px-3.5 py-2.5 text-sm text-white transition-colors placeholder:text-[#666666] focus:border-[#F5A623] focus:outline-none focus:ring-1 focus:ring-[#F5A623]'
  const labelClass = 'mb-1.5 block text-xs uppercase tracking-wider text-[#B0A090]'

  return (
    <form onSubmit={handleSubmit} onChange={() => { setWhatsappFallback(null); setSubmissionStatus('') }} className="enquiry-form space-y-4 text-left">
      <div className={`enquiry-fields${idPrefix === 'modal' ? ' enquiry-fields--stacked' : ''}`}>
      <div className="enquiry-field">
        <label htmlFor={`${idPrefix}-name`} className={labelClass}>Name</label>
        <input id={`${idPrefix}-name`} name="name" type="text" required minLength={2} maxLength={100} autoComplete="name" className={inputClass} />
      </div>
      <div className="enquiry-field">
        <label htmlFor={`${idPrefix}-phone`} className={labelClass}>Phone Number</label>
        <input id={`${idPrefix}-phone`} name="phone" type="tel" required minLength={8} maxLength={20} pattern="(?=.*[0-9])[0-9+() .-]{8,20}" title="Enter a phone number using 8 to 20 digits, spaces, or common phone punctuation." autoComplete="tel" className={inputClass} />
      </div>
      <div className="enquiry-field">
        <label htmlFor={`${idPrefix}-location`} className={labelClass}>Location</label>
        <input id={`${idPrefix}-location`} name="location" type="text" required minLength={2} maxLength={100} autoComplete="address-level2" className={inputClass} />
      </div>
      <div className="enquiry-field">
        <label htmlFor={`${idPrefix}-service`} className={labelClass}>Service Required</label>
        <select id={`${idPrefix}-service`} name="service" required defaultValue="" className={inputClass}>
          <option value="" disabled>Select a service</option>
          {[
            'Interior Design', 'False Ceilings', 'Gypsum Work', 'Furnished Homes',
            'Factory-Finished Interiors', 'Wardrobes', 'TV Walls', 'Kitchens',
            'Aluminium Cladding', 'Stainless Steel (SS) Works', 'Painting',
            'Glass Partitions', 'Aluminium Fabrication',
          ].map((service) => <option key={service} value={service}>{service}</option>)}
        </select>
      </div>
      </div>
      <div>
        <label htmlFor={`${idPrefix}-details`} className={labelClass}>Project Details</label>
        <textarea id={`${idPrefix}-details`} name="details" required minLength={10} maxLength={2000} rows={4} className={`${inputClass} resize-y`} />
      </div>
      <p className="text-xs leading-relaxed text-[#9D9286]">Your enquiry will open in WhatsApp with your details filled in. Please review and send the message to complete your enquiry.</p>
      <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#F5A623] to-[#D48911] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-black shadow-md transition-all hover:from-[#FFCA6B] hover:to-[#F5A623] hover:shadow-[#F5A623]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]">
        Enquire on WhatsApp <ArrowRight aria-hidden="true" className="h-4 w-4" />
      </button>
      <p role="status" aria-live="polite" className="text-xs leading-relaxed text-[#FFCA6B]">{submissionStatus}</p>
      {whatsappFallback && (
        <div role="alert" className="rounded-xl border border-[#F5A623]/45 bg-[#17140F] p-4 text-left">
          <p className="text-sm font-medium text-white">WhatsApp did not open.</p>
          <p className="mt-1 text-xs leading-relaxed text-[#B0A090]">Your details are still here. Try the link below, or copy the prepared message and paste it into WhatsApp.</p>
          <a href={whatsappFallback.url} target="_blank" rel="noreferrer" className="mt-3 inline-flex min-h-10 items-center gap-2 rounded-full border border-[#F5A623]/50 px-4 py-2 text-xs font-semibold text-[#FFCA6B] hover:bg-[#F5A623]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]">Open WhatsApp <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" /></a>
          <label htmlFor={`${idPrefix}-whatsapp-draft`} className="mb-1.5 mt-4 block text-xs uppercase tracking-wider text-[#B0A090]">Prepared message</label>
          <textarea id={`${idPrefix}-whatsapp-draft`} readOnly rows={5} value={whatsappFallback.message} className={`${inputClass} resize-y`} />
        </div>
      )}
    </form>
  )
}

export default function App() {
  const [introVisible, setIntroVisible] = useState(() => {
    // Check if intro has already been displayed during this session or if reduced motion is requested
    if (typeof window !== 'undefined') {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const alreadySeen = sessionStorage.getItem('bbs_intro_seen')
      if (prefersReduced || alreadySeen) {
        return false
      }
    }
    return true
  })
  const [introFading, setIntroFading] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeNavigationHref, setActiveNavigationHref] = useState<string | null>(null)
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null)
  const [photoFlipDirection, setPhotoFlipDirection] = useState<'next' | 'previous'>('next')
  const [selectedProjectTheme, setSelectedProjectTheme] = useState<'All' | ProjectPhotoTheme>('All')
  const [galleryOpener, setGalleryOpener] = useState<HTMLButtonElement | null>(null)
  const lightboxCloseRef = useRef<HTMLButtonElement>(null)
  const lightboxWasOpenRef = useRef(false)

  // Auto-dismiss branded intro
  useEffect(() => {
    if (!introVisible) return

    const fadeTimer = setTimeout(() => {
      setIntroFading(true)
    }, 1200)

    const removeTimer = setTimeout(() => {
      setIntroVisible(false)
      sessionStorage.setItem('bbs_intro_seen', 'true')
    }, 1700)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
    }
  }, [introVisible])

  // Reveal below-the-fold content only after an observer is ready. Without
  // JavaScript, IntersectionObserver, or when setup fails, content stays visible.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return

    const elements = Array.from(document.querySelectorAll<HTMLElement>('.section-reveal'))
    let observer: IntersectionObserver | undefined
    try {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const element = entry.target as HTMLElement
          element.classList.remove('reveal-pending')
          element.classList.add('reveal-entering')
          observer?.unobserve(element)
        })
      }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' })

      const readyObserver = observer
      elements.forEach((element) => {
        if (element.getBoundingClientRect().top > window.innerHeight) {
          element.classList.add('reveal-pending')
          readyObserver.observe(element)
        }
      })
    } catch {
      elements.forEach((element) => element.classList.remove('reveal-pending', 'reveal-entering'))
      observer?.disconnect()
      return
    }

    return () => {
      observer.disconnect()
      elements.forEach((element) => element.classList.remove('reveal-pending', 'reveal-entering'))
    }
  }, [])

  // Track scroll state for sticky header refinement
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Listen for Escape key to close modal
  useEffect(() => {
    if (!enquiryModalOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setEnquiryModalOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [enquiryModalOpen])

  // Let keyboard users dismiss the mobile navigation without moving focus.
  useEffect(() => {
    if (!mobileMenuOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen])

  useEffect(() => {
    if (activeProjectIndex === null) return
    const lightboxAssets = selectedProjectTheme === 'All'
      ? projectAssets
      : projectAssets.filter((asset) => asset.theme === selectedProjectTheme)
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveProjectIndex(null)
      if (event.key === 'ArrowLeft') {
        setPhotoFlipDirection('previous')
        setActiveProjectIndex((index) => index === null ? null : (index - 1 + lightboxAssets.length) % lightboxAssets.length)
      }
      if (event.key === 'ArrowRight') {
        setPhotoFlipDirection('next')
        setActiveProjectIndex((index) => index === null ? null : (index + 1) % lightboxAssets.length)
      }
      if (event.key === 'Tab') {
        const controls = Array.from(document.querySelectorAll<HTMLElement>('[data-lightbox-control], [data-lightbox-media]'))
        if (event.shiftKey && document.activeElement === controls[0]) {
          event.preventDefault()
          controls[controls.length - 1]?.focus()
        } else if (!event.shiftKey && document.activeElement === controls[controls.length - 1]) {
          event.preventDefault()
          controls[0]?.focus()
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeProjectIndex, selectedProjectTheme])

  useEffect(() => {
    if (activeProjectIndex !== null && !lightboxWasOpenRef.current) {
      lightboxCloseRef.current?.focus()
      lightboxWasOpenRef.current = true
    } else if (activeProjectIndex === null) {
      lightboxWasOpenRef.current = false
    }
  }, [activeProjectIndex])

  useEffect(() => {
    if (activeProjectIndex !== null) return
    galleryOpener?.focus()
  }, [activeProjectIndex, galleryOpener])

  const dismissIntroNow = () => {
    setIntroVisible(false)
    sessionStorage.setItem('bbs_intro_seen', 'true')
  }

  const displayedProjectAssets = selectedProjectTheme === 'All'
    ? projectAssets
    : projectAssets.filter((asset) => asset.theme === selectedProjectTheme)
  const activeProjectAssets = displayedProjectAssets

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('main section[id], footer[id]'))
    const updateActiveNavigation = () => {
      const marker = window.innerHeight * 0.38
      const currentSection = sections.find((section) => {
        const bounds = section.getBoundingClientRect()
        return bounds.top <= marker && bounds.bottom > marker
      })

      if (!currentSection) return
      if (currentSection.id === 'hero') {
        setActiveNavigationHref('#hero')
        return
      }
      if (currentSection.id === 'site-footer') {
        setActiveNavigationHref('#contact')
        return
      }

      const precedingLinks = navLinks
        .map((link) => ({ link, section: document.querySelector<HTMLElement>(link.href) }))
        .filter((item) => item.section !== null)
        .filter(({ section }) => section!.getBoundingClientRect().top <= marker)
        .sort((a, b) => (a.section!.getBoundingClientRect().top + window.scrollY) - (b.section!.getBoundingClientRect().top + window.scrollY))
      setActiveNavigationHref(precedingLinks.at(-1)?.link.href ?? null)
    }

    let frame = 0
    const scheduleUpdate = () => {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        frame = 0
        updateActiveNavigation()
      })
    }
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    updateActiveNavigation()
    return () => {
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  const servicePillars = [
    {
      icon: Compass,
      title: 'Interiors',
      desc: 'Thoughtful layouts and coordinated design choices tailored to the space and its intended use.',
    },
    {
      icon: Layers,
      title: 'False Ceilings',
      desc: 'Ceiling designs that bring structure, lighting integration, and a finished look to interiors.',
    },
    {
      icon: Wrench,
      title: 'Fabrication',
      desc: 'Aluminium fabrication tailored to the requirements of the project.',
    },
  ]

  const serviceGroups = [
    {
      number: '01',
      title: 'Interior spaces',
      image: interiorServicesPhotoUrl,
      imageAlt: 'Stock interior reference showing a furnished contemporary living space',
      services: [
        { name: 'Interior Design', description: 'Thoughtful layouts and coordinated design choices tailored to the space and its intended use.' },
        { name: 'Furnished Homes', description: 'Coordinated interior solutions that help make living spaces functional and complete.' },
        { name: 'Factory-Finished Interiors', description: 'Factory-finished interior components selected for a consistent and refined finish.' },
      ],
    },
    {
      number: '02',
      title: 'Built-in living',
      image: builtinsServicesPhotoUrl,
      imageAlt: 'Stock interior reference showing neutral furnishings and natural wood finishes',
      services: [
        { name: 'Wardrobes', description: 'Storage solutions planned around available space, accessibility, and everyday needs.' },
        { name: 'TV Walls', description: 'Feature walls designed to integrate the television, storage, and surrounding interior elements.' },
        { name: 'Kitchens', description: 'Kitchen layouts that balance workflow, storage, and visual appeal.' },
      ],
    },
    {
      number: '03',
      title: 'Ceilings & finishes',
      image: ceilingServicesPhotoUrl,
      imageAlt: 'Stock interior reference showing a bright living space and ceiling plane',
      services: [
        { name: 'False Ceilings', description: 'Ceiling designs that bring structure, lighting integration, and a finished look to interiors.' },
        { name: 'Gypsum Work', description: 'Gypsum installations and detailing for clean, practical interior finishes.' },
        { name: 'Painting', description: 'Paint finishes that complement the space, surfaces, and overall design.' },
      ],
    },
    {
      number: '04',
      title: 'Architectural fabrication',
      image: fabricationServicesPhotoUrl,
      imageAlt: 'Stock interior reference showing natural materials in a contemporary living area',
      services: [
        { name: 'Aluminium Cladding', description: 'Aluminium cladding solutions for suitable architectural and interior applications.' },
        { name: 'Stainless Steel (SS) Works', description: 'Stainless steel components and detailing for relevant project requirements.' },
        { name: 'Glass Partitions', description: 'Glass partition solutions that help define areas while maintaining a sense of openness.' },
        { name: 'Aluminium Fabrication', description: 'Aluminium fabrication tailored to the requirements of the project.' },
      ],
    },
  ]

  const handleCloseEnquiry = () => setEnquiryModalOpen(false)

  return (
    <div className="min-h-screen bg-[#080A0E] text-[#FFFFFF] flex flex-col selection:bg-[#F5A623] selection:text-black">
      {/* Branded Loading Intro Experience (Session-aware & Reduced-Motion Respectful) */}
      {introVisible && (
        <div
          role="status"
          aria-live="polite"
          aria-label="Loading Bold and Bright Space"
          className={`fixed inset-0 z-50 bg-[#080A0E] flex flex-col items-center justify-center p-6 transition-opacity duration-500 ease-out ${
            introFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          {/* Skip Intro button for instant accessibility */}
          <button
            type="button"
            onClick={dismissIntroNow}
            className="absolute top-6 right-6 text-[11px] font-mono uppercase tracking-[0.2em] text-[#666666] hover:text-[#B0A090] py-1.5 px-3.5 rounded-full border border-[#242732] hover:border-[#F5A623]/40 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]"
          >
            Skip Intro
          </button>

          <div className="flex flex-col items-center max-w-sm text-center">
            {/* Prominent intro logo presentation */}
            <div className="relative w-64 sm:w-72 aspect-[3.93/1] flex items-center justify-center gold-aura animate-scale-in">
              <img
                src={logoUrl}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>

            {/* Expanding gold progress shimmer rule */}
            <div className="w-36 sm:w-44 h-[2px] bg-[#242732] rounded-full overflow-hidden mt-6">
              <div className="h-full bg-gradient-to-r from-[#FFCA6B] via-[#F5A623] to-[#C27F00] animate-expand-line" />
            </div>

            {/* Tagline */}
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-[#B0A090] mt-3.5 font-medium animate-fade-in">
              Interiors · False Ceilings · Fabrication
            </p>
          </div>
        </div>
      )}

      {/* Refined Sticky Site Header */}
      <header
        className={`sticky top-3 z-40 mx-auto w-[calc(100%-1.5rem)] max-w-[88rem] border backdrop-blur-xl shadow-lg shadow-black/20 transition-all duration-300 ${mobileMenuOpen ? 'rounded-2xl' : 'rounded-full'} ${
          isScrolled
            ? 'border-[#242732] bg-[#080A0E]/90 shadow-xl shadow-black/35'
            : 'border-[#242732]/75 bg-[#080A0E]/75'
        }`}
      >
        <div
          className={`max-w-7xl 2xl:max-w-[84rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-7 flex items-center justify-between xl:justify-start xl:gap-7 transition-all duration-300 ${
            isScrolled ? 'h-20' : 'h-22 sm:h-24'
          }`}
        >
          {/* Natural, prominent logo integration */}
          <a
            href="#hero"
            className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623] rounded-lg p-1"
            aria-label="Bold & Bright Space Home"
          >
            <img
              src={logoUrl}
              alt=""
              className="h-10 w-auto object-contain transition-transform duration-300 ease-out group-hover:scale-[1.03] sm:h-12 md:h-14"
            />
          </a>

          {/* Desktop Navigation with Animated Underlines */}
          <nav className="hidden xl:flex min-w-0 flex-1 items-center justify-center gap-3 2xl:gap-4" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-current={activeNavigationHref === link.href ? 'location' : undefined}
                className={`whitespace-nowrap text-[10px] 2xl:text-[11px] uppercase tracking-[0.12em] font-medium transition-colors duration-300 relative py-2 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F5A623] rounded-sm ${activeNavigationHref === link.href ? 'text-[#FFCA6B]' : 'text-[#B0A090] hover:text-[#FFFFFF]'}`}
              >
                <span>{link.label}</span>
                <span className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#FFCA6B] to-[#F5A623] transition-all duration-300 ease-out group-hover:w-full group-focus-visible:w-full ${activeNavigationHref === link.href ? 'w-full' : 'w-0'}`} />
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden xl:flex shrink-0 items-center gap-4">
            <button
              type="button"
              onClick={() => setEnquiryModalOpen(true)}
              className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-[#F5A623] to-[#D48911] text-black hover:from-[#FFCA6B] hover:to-[#F5A623] transition-all duration-300 shadow-md hover:shadow-[#F5A623]/25 hover:shadow-lg active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080A0E]"
            >
              <span>Enquire on WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            className="xl:hidden p-2 text-[#B0A090] hover:text-white hover:bg-[#12141B] rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623] cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div id="mobile-navigation" className="xl:hidden border-t border-[#242732] bg-[#0E1017] px-4 pt-4 pb-6 space-y-4 shadow-2xl animate-fade-in">
            <nav className="flex flex-col space-y-2" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={activeNavigationHref === link.href ? 'location' : undefined}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#161922] transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623] ${activeNavigationHref === link.href ? 'text-[#FFCA6B]' : 'text-[#B0A090] hover:text-[#FFFFFF]'}`}
                >
                  <span>{link.label}</span>
                  <span className={`w-1.5 h-1.5 rounded-full bg-[#F5A623] transition-opacity ${activeNavigationHref === link.href ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                </a>
              ))}
            </nav>
            <div className="pt-2 border-t border-[#242732]/80">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false)
                  setEnquiryModalOpen(true)
                }}
                className="w-full flex items-center justify-center gap-2.5 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-[#F5A623] to-[#D48911] text-black hover:from-[#FFCA6B] hover:to-[#F5A623] transition-all cursor-pointer shadow-lg shadow-[#F5A623]/15"
              >
                <span>Enquire on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section
          id="hero"
          className="relative min-h-[calc(100vh-6rem)] flex items-center justify-center overflow-hidden py-10 md:py-16 lg:py-20"
        >
          {/* Controlled atmospheric background illumination */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#F5A623]/6 rounded-full blur-[150px] animate-gold-pulse" />
            <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#1A1D26]/60 rounded-full blur-[120px]" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
              {/* Left Column: Editorial & Value Proposition */}
              <div className="lg:col-span-7 flex flex-col justify-center space-y-7 text-left">
                {/* Brand Category Pill */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#12141B] border border-[#242732] w-fit animate-fade-in shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-[#F5A623]" />
                  <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#FFCA6B]">
                    Interiors · False Ceilings · Fabrication
                  </span>
                </div>

                {/* Main Headline */}
                <div className="space-y-4 animate-fade-up">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold tracking-tight text-white leading-[1.12]">
                    Thoughtfully Designed.{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFCA6B] via-[#F5A623] to-[#C27F00]">
                      Beautifully Built.
                    </span>
                  </h1>
                  <p className="text-base sm:text-lg text-[#B0A090] max-w-2xl leading-relaxed font-light">
                    Interior design and execution for homes and commercial spaces, combining functional planning, considered details, and quality-focused workmanship.
                  </p>
                </div>

                {/* Call to Actions */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1 animate-fade-up">
                  <a
                    href="#portfolio"
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-[#F5A623] to-[#D48911] text-black hover:from-[#FFCA6B] hover:to-[#F5A623] transition-all duration-300 shadow-lg shadow-[#F5A623]/20 hover:shadow-[#F5A623]/35 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]"
                  >
                    <span>Explore Our Work</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs font-medium tracking-wider uppercase text-white bg-[#12141B] hover:bg-[#1A1D26] border border-[#242732] hover:border-[#F5A623]/50 transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F5A623]"
                  >
                    <span>Discuss Your Project</span>
                  </a>
                </div>

                {/* Service Pillars Grid */}
                <div className="pt-6 border-t border-[#242732]/80 grid grid-cols-1 sm:grid-cols-3 gap-3.5 animate-fade-up">
                  {servicePillars.map((pillar) => {
                    const IconComponent = pillar.icon
                    return (
                      <div
                        key={pillar.title}
                        className="p-4 rounded-xl bg-[#101219]/80 border border-[#1E212B] hover:border-[#F5A623]/40 transition-colors duration-300 group"
                      >
                        <div className="flex items-center gap-2.5 mb-1.5">
                          <IconComponent className="w-4 h-4 text-[#F5A623] transition-transform duration-300 group-hover:scale-110" />
                          <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
                            {pillar.title}
                          </h3>
                        </div>
                        <p className="text-[12px] text-[#B0A090] leading-snug">
                          {pillar.desc}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Right Column: Illustrative interior reference */}
              <div className="lg:col-span-5 flex justify-center animate-scale-in">
                <div className="relative w-full max-w-md lg:max-w-none group">
                  {/* Subtle warm accent aura */}
                  <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-[#F5A623]/25 via-[#242732]/50 to-transparent blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Image Container Card */}
                  <div className="relative rounded-2xl overflow-hidden bg-[#12141B] border border-[#242732] shadow-2xl">
                    <div className="aspect-[4/3] w-full overflow-hidden bg-[#080A0E] relative">
                      <img
                        src={heroPhotoUrl}
                        alt="Stock reference image of a contemporary residential living room"
                        className="w-full h-full object-cover object-[center_55%] transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="eager"
                      />
                      {/* Gradient overlay for contrast and luxury mood */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080A0E] via-transparent to-transparent opacity-85" />

                      {/* Bottom Project Badge */}
                      <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#080A0E]/90 backdrop-blur-md border border-[#242732]">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#F5A623] block">
                              Design reference
                            </span>
                            <span className="text-sm font-medium text-white block mt-0.5 font-serif">
                              Residential interior
                            </span>
                          </div>
                          <span className="text-[11px] text-[#B0A090] font-mono border border-[#242732] px-2.5 py-1 rounded bg-[#12141B]">Reference</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section
          id="services"
          aria-labelledby="services-heading"
          className="relative overflow-hidden border-t border-[#242732]/80 bg-[#0B0D12] py-20 sm:py-24 lg:py-28"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(245,166,35,0.06),transparent_38%)]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="section-reveal mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#F5A623]">
                  Services
                </p>
                <h2
                  id="services-heading"
                  className="font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl"
                >
                  Interior Solutions, From Concept to Completion
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-[#B0A090] sm:text-right">
                Explore our interior design, finishing, and fabrication services for residential and commercial spaces.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
              {serviceGroups.map((group) => (
                <article
                  key={group.number}
                  className="section-reveal gold-sweep group overflow-hidden rounded-2xl border border-[#242732] bg-[#101219] transition duration-300 hover:-translate-y-1 hover:border-[#F5A623]/45 hover:shadow-xl hover:shadow-black/25 motion-reduce:transform-none motion-reduce:transition-none"
                >
                  <div className="relative aspect-[16/8.5] overflow-hidden bg-[#080A0E]">
                    <img
                      src={group.image}
                      alt={group.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transform-none motion-reduce:transition-none"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080A0E]/75 via-transparent to-transparent" />
                    <span className="absolute bottom-4 left-5 font-mono text-xs tracking-[0.18em] text-[#FFCA6B]">
                      {group.number}
                    </span>
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="mb-4 font-serif text-xl font-semibold text-white sm:text-2xl">
                      {group.title}
                    </h3>
                    <ul className="grid grid-cols-1 gap-x-5 gap-y-4 min-[420px]:grid-cols-2">
                      {group.services.map((service) => (
                        <li key={service.name} className="flex items-start gap-2.5 text-sm leading-snug text-[#B0A090]">
                          <span aria-hidden="true" className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-[#F5A623]" />
                          <span><span className="block text-sm font-medium text-white">{service.name}</span><span className="mt-1 block text-xs leading-relaxed text-[#9D9286]">{service.description}</span></span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Client project gallery — original media is kept exclusive to this section. */}
        <section id="portfolio" aria-labelledby="portfolio-heading" className="overflow-hidden border-t border-[#242732]/80 bg-[#080A0E] py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="section-reveal mb-7 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#F5A623]">Selected work</p>
                <h2 id="portfolio-heading" className="font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">A Closer Look at Our Work</h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-[#B0A090] sm:text-right">Explore selected project photographs showcasing interior details, finishes, and completed spaces.</p>
            </div>
            <div className="section-reveal mb-6 flex flex-wrap items-center gap-2" role="group" aria-label="Filter project photographs by visible theme">
              <span className="mr-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#9D9286]">View</span>
              {(['All photographs', ...projectPhotoThemes] as const).map((theme) => {
                const value = theme === 'All photographs' ? 'All' : theme
                const isSelected = selectedProjectTheme === value
                return (
                  <button
                    key={theme}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setSelectedProjectTheme(value)}
                    className={`min-h-10 rounded-full border px-4 py-2 text-[10px] font-medium tracking-[0.1em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623] ${isSelected ? 'border-[#F5A623]/70 bg-[#F5A623]/10 text-[#FFCA6B]' : 'border-[#242732] text-[#B0A090] hover:border-[#F5A623]/40 hover:text-white'}`}
                  >
                    {theme}
                  </button>
                )
              })}
            </div>
          </div>
          <div className="gallery-rows space-y-3" aria-label="Project gallery">
            {[0, 1, 2].map((rowIndex) => {
              const rowAssets = displayedProjectAssets.filter((_, index) => index % 3 === rowIndex)
              return (
                  <div key={rowIndex} role="group" className="gallery-row section-reveal" aria-label={`Gallery row ${rowIndex + 1}`}>
                  <div className={`gallery-track ${rowIndex === 1 ? 'gallery-track--reverse' : ''}`}>
                    {[0, 1].map((copy) => (
                      <div key={copy} className="gallery-set" aria-hidden={copy === 1}>
                        {rowAssets.map((asset) => {
                          const assetIndex = displayedProjectAssets.indexOf(asset)
                          return (
                            <button
                              key={`${asset.name}-${copy}`}
                              type="button"
                              tabIndex={copy === 1 ? -1 : 0}
                              onClick={(event) => {
                                setGalleryOpener(event.currentTarget)
                                setActiveProjectIndex(assetIndex)
                              }}
                              aria-label={`View Project Image ${assetIndex + 1}`}
                              className="gallery-card gold-sweep group relative shrink-0 overflow-hidden rounded-xl border border-[#242732] bg-[#12141B] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]"
                            >
                              <img src={asset.url} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                            </button>
                          )
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>
        <section id="about" aria-labelledby="about-heading" className="border-t border-[#242732]/80 bg-[#0B0D12] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="about-editorial">
              <div className="about-editorial__heading section-reveal">
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#F5A623]">About Bold &amp; Bright Space</p>
                <h2 id="about-heading" className="max-w-xl font-serif text-4xl font-medium leading-[0.98] text-white sm:text-5xl lg:text-7xl">Spaces <span className="italic text-[#FFCA6B]">designed</span><br />around you.</h2>
                <span aria-hidden="true" className="about-editorial__rule mt-7 block h-px w-20 bg-[#F5A623]" />
              </div>
              <div className="about-editorial__visual section-reveal">
                <div className="about-editorial__image about-editorial__image--main">
                  <img src={builtinsServicesPhotoUrl} alt="Interior reference with considered furniture, textures, and warm finishes" loading="lazy" decoding="async" />
                  <span className="about-editorial__image-label">Interior reference</span>
                </div>
                <div className="about-editorial__image about-editorial__image--detail">
                  <img src={ceilingServicesPhotoUrl} alt="Interior reference showing layered ceiling and lighting details" loading="lazy" decoding="async" />
                </div>
                <span aria-hidden="true" className="about-editorial__index">B<span>&</span>B</span>
              </div>
              <div className="about-editorial__copy section-reveal">
                <p className="about-editorial__lead">Every space has its own purpose, character, and possibilities.</p>
                <p>Bold &amp; Bright Space works across interior design and interior execution, helping bring ideas to life through considered layouts, practical solutions, and attention to detail.</p>
                <p>From individual interior elements to complete interior projects, our focus is on creating spaces that feel cohesive, work well for everyday use, and reflect the client&apos;s requirements.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="why" aria-labelledby="why-heading" className="border-t border-[#242732]/80 bg-[#080A0E] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="why-editorial">
              <div className="why-editorial__intro section-reveal">
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#F5A623]">The way we work</p>
                <h2 id="why-heading" className="font-serif text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-6xl">Considered at<br /><span className="italic text-[#FFCA6B]">every step.</span></h2>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-[#B0A090] sm:text-base">A thoughtful interior brings together how a space looks, how it works, and how its details come together.</p>
                <div className="why-editorial__image mt-8 overflow-hidden rounded-sm border border-[#242732]">
                  <img src={fabricationServicesPhotoUrl} alt="Interior reference with coordinated finishes and functional living space" loading="lazy" decoding="async" />
                  <span className="about-editorial__image-label">Interior reference</span>
                </div>
              </div>
              <div className="why-editorial__list" aria-label="Our approach">
                {[
                  { number: '01', title: 'Thoughtful design', text: 'Layouts and design choices shaped around the space and its intended use.' },
                  { number: '02', title: 'Practical planning', text: 'Storage, movement, and everyday needs considered as part of the plan.' },
                  { number: '03', title: 'Attention to detail', text: 'Finishes and interior elements brought together with care and consistency.' },
                  { number: '04', title: 'Execution in focus', text: 'Design decisions considered alongside the work required to bring them to life.' },
                ].map((item) => (
                  <article key={item.number} className="why-point section-reveal">
                    <span className="why-point__number">{item.number}</span>
                    <div>
                      <h3 className="font-serif text-2xl text-white sm:text-3xl">{item.title}</h3>
                      <p className="mt-2 max-w-lg text-sm leading-relaxed text-[#B0A090]">{item.text}</p>
                    </div>
                    <ArrowRight aria-hidden="true" className="why-point__arrow h-4 w-4 text-[#F5A623]" />
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="reviews" aria-labelledby="reviews-heading" className="border-t border-[#242732]/80 bg-[#0B0D12] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="reviews-editorial">
              <div className="reviews-editorial__intro section-reveal">
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#F5A623]">Google Reviews</p>
                <h2 id="reviews-heading" className="font-serif text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-6xl">Hear it from<br /><span className="italic text-[#FFCA6B]">Google.</span></h2>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-[#B0A090] sm:text-base">A selection of public reviews from the two Google listings. Visit Google for the latest information.</p>
                <div className="mt-8 flex items-center gap-3 border-t border-[#242732] pt-5 text-xs text-[#B0A090]">
                  <span aria-hidden="true" className="h-px w-8 bg-[#F5A623]" />
                  Checked October 10, 2026 · review details may change.
                </div>
              </div>
              <div className="review-columns" aria-label="Selected Google reviews">
                {googleReviews.map((listing) => (
                <section key={listing.business} className={`review-column review-column--${listing.direction} section-reveal`} aria-label={`Google reviews for ${listing.business}`}>
                    <h3 className="review-column__heading">{listing.business}<span>Google reviews</span></h3>
                    <div className="review-rail">
                      <div className="review-rail__track">
                        {[false, true].map((isClone) => (
                          <div key={isClone ? 'clone' : 'original'} className="review-rail__group" aria-hidden={isClone}>
                            {listing.entries.map((review, index) => (
                              <a key={`${review.name}-${index}`} href={listing.url} target="_blank" rel="noreferrer" tabIndex={isClone ? -1 : undefined} aria-label={`${review.name}, 5 stars. ${review.text} Read original Google review for ${listing.business}.`} className="google-review-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]">
                                <span className="google-review-card__top"><span className="google-review-card__reviewer">{review.name}</span><span className="google-review-card__stars" aria-label="5 out of 5 stars">★★★★★</span></span>
                                <span className="google-review-card__message">“{review.text}”</span>
                                <span className="google-review-card__source"><span><span className="google-review-card__g">G</span> Google</span><span>Read listing <ExternalLink aria-hidden="true" /></span></span>
                              </a>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                ))}
              </div>
            </div>

            <div className="testimonial-reel section-reveal">
              <a href={testimonialReelUrl} target="_blank" rel="noreferrer" aria-label="Watch the client-shared Instagram Reel. The preview image is a project photograph, not a video frame." className="testimonial-reel__visual focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]" style={{ backgroundImage: `url(${testimonialPhotoUrl})` }}>
                <span className="testimonial-reel__play"><Play aria-hidden="true" fill="currentColor" className="h-5 w-5" /></span>
              </a>
              <div className="testimonial-reel__copy">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#F5A623]">Client-shared Reel</p>
                <h3 className="mt-3 font-serif text-3xl text-white sm:text-4xl">Watch Client Testimonial</h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#B0A090]">Opens the supplied Instagram Reel. The preview is a project photograph, not a frame from the video. Playback is visitor-initiated.</p>
                <a href={testimonialReelUrl} target="_blank" rel="noreferrer" className="testimonial-reel__link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]">Open Reel <ArrowRight aria-hidden="true" /></a>
              </div>
            </div>

            <div id="instagram" className="instagram-feature section-reveal">
              <div className="instagram-feature__mark" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.5"><rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.6" cy="6.6" r=".8" fill="currentColor" stroke="none" /></svg></div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#F5A623]">Instagram</p>
                <h3 className="mt-1 font-serif text-2xl text-white sm:text-3xl">Follow <span className="italic text-[#FFCA6B]">@bold_bright_space</span></h3>
                <p className="mt-2 text-xs leading-relaxed text-[#B0A090] sm:text-sm">Visit the supplied profile to see its current posts and reels.</p>
              </div>
              <a href="https://www.instagram.com/bold_bright_space?stkn=MXB2NG9tcnVobjBrOQ%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" aria-label="Visit Bold & Bright Space on Instagram" className="instagram-feature__link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]">
                <span>Visit profile</span><ExternalLink aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <section id="service-areas" aria-labelledby="service-areas-heading" className="service-areas-section border-t border-[#242732]/80 bg-[#080A0E] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="service-areas-editorial">
              <div className="service-areas-intro section-reveal">
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#F5A623]">Service areas</p>
                <h2 id="service-areas-heading" className="font-serif text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-6xl">Rooted in the<br /><span className="italic text-[#FFCA6B]">region.</span></h2>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-[#B0A090] sm:text-base">Bold &amp; Bright Space serves projects across the following cities and states.</p>
              </div>
              <div className="service-areas-panel section-reveal">
                <div className="service-area-group">
                  <div className="service-area-label"><span className="service-area-label__line" /><span>Named cities</span></div>
                  <ul className="service-city-list" aria-label="Cities served">
                    {['Bengaluru', 'Tumakuru', 'Hassan', 'Ramanagara'].map((city, index) => (
                      <li key={city} className="service-city-item"><span className="service-city-item__index">0{index + 1}</span><span>{city}</span><span aria-hidden="true" className="service-city-item__dot" /></li>
                    ))}
                  </ul>
                </div>
                <div className="service-area-group service-area-group--states">
                  <div className="service-area-label"><span className="service-area-label__line" /><span>Broader state-level coverage</span></div>
                  <ul className="service-state-list" aria-label="States covered">
                    {['Karnataka', 'Tamil Nadu', 'Andhra Pradesh', 'Kerala', 'Telangana'].map((state) => <li key={state}>{state}</li>)}
                  </ul>
                  <p className="mt-4 text-xs leading-relaxed text-[#81786F]">Service coverage across these regions does not indicate a physical office in each location.</p>
                </div>
              </div>
              <div className="contact-listings service-areas-maps section-reveal">
                <div className="contact-maps-heading">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9D9286]">Google Maps locations</p>
                  <span aria-hidden="true" className="h-px w-10 bg-[#F5A623]/70" />
                </div>
                <div className="contact-map-grid">
                  <article className="contact-map-panel">
                    <div className="contact-map-panel__heading"><div><h3>Yedehalli</h3><p>GYP Decor interiors (POP Shop)</p></div><span>01</span></div>
                    <iframe title="Google Maps preview for GYP Decor interiors (POP Shop), Yedehalli" src="https://www.google.com/maps?q=GYP+Decor+interiors+%28POP+Shop%29%2C+Yedehalli%2C+Karnataka&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
                    <a href="https://maps.app.goo.gl/xk869cryHqBvfVpm7" target="_blank" rel="noreferrer" className="contact-map-panel__link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]">Open listing in Google Maps <ExternalLink aria-hidden="true" /></a>
                  </article>
                  <article className="contact-map-panel">
                    <div className="contact-map-panel__heading"><div><h3>Bengaluru</h3><p>Define Home Interiors</p></div><span>02</span></div>
                    <iframe title="Google Maps preview for Define Home Interiors, Bengaluru" src="https://www.google.com/maps?q=Define+Home+Interiors%2C+Bengaluru%2C+Karnataka&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
                    <a href="https://maps.app.goo.gl/LtvJaE7ztKMvtjS88?g_st=iw" target="_blank" rel="noreferrer" className="contact-map-panel__link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]">Open listing in Google Maps <ExternalLink aria-hidden="true" /></a>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-heading" className="contact-section border-t border-[#242732]/80 bg-[#0B0D12] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="contact-editorial">
              <div className="contact-intro section-reveal">
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#F5A623]">Contact</p>
                <h2 id="contact-heading" className="font-serif text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-6xl">Let&apos;s discuss<br /><span className="italic text-[#FFCA6B]">your space.</span></h2>
                <p className="mt-5 max-w-lg text-sm leading-relaxed text-[#B0A090] sm:text-base">Planning a new interior or looking to upgrade an existing space? Share a few details about your project, and let&apos;s discuss your requirements.</p>
                <a href="tel:+918722890061" className="contact-call-link mt-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]">
                  <span className="contact-call-link__label">Call or WhatsApp</span>
                  <span className="contact-call-link__number">+91 87228 90061</span>
                  <ArrowRight aria-hidden="true" className="h-4 w-4 text-[#F5A623]" />
                </a>
                <a href="https://wa.me/918722890061" target="_blank" rel="noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-full border border-[#F5A623]/45 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FFCA6B] transition-colors hover:bg-[#F5A623]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]">Open WhatsApp <ExternalLink aria-hidden="true" className="h-4 w-4" /></a>

              </div>

              <div className="contact-form-panel section-reveal">
                <div className="contact-form-panel__heading">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#F5A623]">Project enquiry</span>
                  <p className="mt-2 font-serif text-2xl text-white sm:text-3xl">Tell us a little about it.</p>
                </div>
                <EnquiryForm idPrefix="contact" />
              </div>

            </div>
          </div>
        </section>
      </main>

      {activeProjectIndex !== null && activeProjectAssets[activeProjectIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="gallery-lightbox-title"
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-3 backdrop-blur-md sm:p-6"
          onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveProjectIndex(null) }}
        >
          <div className="lightbox-panel relative flex max-h-[94vh] w-full max-w-6xl flex-col items-center gap-3 rounded-2xl border border-[#242732] bg-[#101219] p-3 shadow-2xl sm:gap-4 sm:p-5">
            <div className="flex w-full items-center justify-between gap-4">
              <div>
                <h2 id="gallery-lightbox-title" className="font-serif text-lg text-white">Project gallery</h2>
                <p className="text-xs text-[#B0A090]">{activeProjectIndex + 1} of {activeProjectAssets.length}</p>
              </div>
              <button ref={lightboxCloseRef} data-lightbox-control type="button" onClick={() => setActiveProjectIndex(null)} aria-label="Close project gallery" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#242732] text-[#B0A090] transition-colors hover:border-[#F5A623]/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]"><X aria-hidden="true" /></button>
            </div>
            <div className="lightbox-stage relative flex min-h-0 w-full flex-1 items-center justify-center">
              <button data-lightbox-control type="button" onClick={() => { setPhotoFlipDirection('previous'); setActiveProjectIndex((activeProjectIndex - 1 + activeProjectAssets.length) % activeProjectAssets.length) }} aria-label="Previous project item" className="absolute left-1 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[#F5A623]/40 bg-black/70 text-[#FFCA6B] transition-colors hover:bg-[#F5A623]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623] sm:left-3"><ChevronLeft aria-hidden="true" /></button>
              <img key={activeProjectAssets[activeProjectIndex].url} src={activeProjectAssets[activeProjectIndex].url} alt={`Client project photograph ${activeProjectIndex + 1}`} className={`lightbox-image ${photoFlipDirection === 'previous' ? 'lightbox-image--previous' : ''}`} />
              <button data-lightbox-control type="button" onClick={() => { setPhotoFlipDirection('next'); setActiveProjectIndex((activeProjectIndex + 1) % activeProjectAssets.length) }} aria-label="Next project item" className="absolute right-1 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[#F5A623]/40 bg-black/70 text-[#FFCA6B] transition-colors hover:bg-[#F5A623]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623] sm:right-3"><ChevronRight aria-hidden="true" /></button>
            </div>
          </div>
        </div>
      )}

      {/* Accessible Consultation Enquiry Modal */}
      {enquiryModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
        >
          <div className="relative w-full max-w-md rounded-2xl bg-[#101219] border border-[#242732] p-6 sm:p-7 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-[#242732]">
              <div>
                <h2 id="modal-title" className="text-lg font-serif font-semibold text-white">
                  Let&apos;s Discuss Your Space
                </h2>
                <p className="text-xs text-[#B0A090] mt-0.5">
                  Planning a new interior or looking to upgrade an existing space? Share a few details about your project, and let&apos;s discuss your requirements.
                </p>
              </div>
              <button
                type="button"
                onClick={handleCloseEnquiry}
                aria-label="Close dialog"
                className="p-2 text-[#B0A090] hover:text-white rounded-lg hover:bg-[#1A1D26] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-5 max-h-[68vh] overflow-y-auto pr-1">
              <EnquiryForm idPrefix="modal" />
            </div>
          </div>
        </div>
      )}

      <footer id="site-footer" className="site-footer section-reveal border-t border-[#242732] bg-[#080A0E] px-4 sm:px-6 lg:px-8">
        <div className="site-footer__main mx-auto max-w-7xl">
          <div className="site-footer__brand">
            <a href="#hero" aria-label="Bold & Bright Space home" className="site-footer__identity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]">
              <img src={logoUrl} alt="" width="172" height="44" loading="lazy" decoding="async" />
            </a>
            <p className="site-footer__tagline">Where Design Meets Detail.</p>
            <p className="site-footer__description">Interior design and execution for residential and commercial spaces.</p>
          </div>

          <nav aria-label="Footer navigation" className="site-footer__navigation">
            {[
              { label: 'Home', href: '#hero' },
              { label: 'About', href: '#about' },
              { label: 'Why Choose Us', href: '#why' },
              { label: 'Services', href: '#services' },
              { label: 'Projects', href: '#portfolio' },
              { label: 'Reviews', href: '#reviews' },
              { label: 'Instagram', href: '#instagram' },
              { label: 'Service Areas', href: '#service-areas' },
              { label: 'Contact', href: '#contact' },
            ].map((link) => <a key={link.label} href={link.href} className="site-footer__link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]">{link.label}</a>)}
          </nav>

          <div className="site-footer__connect">
            <p className="site-footer__eyebrow">Connect</p>
            <a href="tel:+918722890061" className="site-footer__phone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]">+91 87228 90061</a>
            <a href="https://maps.app.goo.gl/xk869cryHqBvfVpm7" target="_blank" rel="noreferrer" className="site-footer__external focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]">Yedehalli · Google Maps <ExternalLink aria-hidden="true" /></a>
            <a href="https://maps.app.goo.gl/LtvJaE7ztKMvtjS88?g_st=iw" target="_blank" rel="noreferrer" className="site-footer__external focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]">Bengaluru · Google Maps <ExternalLink aria-hidden="true" /></a>
            <a href="https://www.instagram.com/bold_bright_space?stkn=MXB2NG9tcnVobjBrOQ%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className="site-footer__external focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]">Instagram <ExternalLink aria-hidden="true" /></a>
          </div>
        </div>
        <div className="site-footer__bottom mx-auto max-w-7xl">
          <p>© {currentYear} Bold &amp; Bright Space</p>
          <a href="#hero" className="site-footer__top focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]">Back to top <ArrowRight aria-hidden="true" /></a>
        </div>
      </footer>
    </div>
  )
}
