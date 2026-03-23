import type { Variants, Transition } from 'framer-motion'

/**
 * Liquid Animation System
 * Reusable animation variants and presets for Likwiid website
 * All animations respect prefers-reduced-motion via globals.css
 */

// ============================================================================
// EASING FUNCTIONS
// ============================================================================

export const easings = {
  easeOutCubic: [0.33, 1, 0.68, 1] as const,
  easeInOutCubic: [0.65, 0, 0.35, 1] as const,
  easeOutQuart: [0.25, 1, 0.5, 1] as const,
  easeInOutQuart: [0.76, 0, 0.24, 1] as const,
  liquid: [0.22, 1, 0.36, 1] as const, // Custom liquid easing - smooth and fluid
}

// ============================================================================
// SPRING PRESETS
// ============================================================================

export const springs = {
  gentle: { type: 'spring' as const, stiffness: 120, damping: 14 },
  snappy: { type: 'spring' as const, stiffness: 300, damping: 20 },
  bouncy: { type: 'spring' as const, stiffness: 400, damping: 10 },
  smooth: { type: 'spring' as const, stiffness: 200, damping: 25 },
}

// ============================================================================
// FADE VARIANTS
// ============================================================================

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easings.liquid },
  },
}

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easings.liquid },
  },
}

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: easings.liquid },
  },
}

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: easings.liquid },
  },
}

// ============================================================================
// SCALE VARIANTS
// ============================================================================

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: easings.easeOutQuart },
  },
}

export const scaleInSubtle: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easings.liquid },
  },
}

// ============================================================================
// LIQUID REVEAL VARIANTS
// ============================================================================

/**
 * Signature liquid reveal - combines fade, scale, and blur
 * Perfect for page transitions and major content reveals
 */
export const liquidReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.96,
    filter: 'blur(4px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: easings.liquid,
    },
  },
}

/**
 * Liquid slide - horizontal reveal with opacity
 */
export const liquidSlide: Variants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: easings.liquid },
  },
}

/**
 * Liquid 3D - adds subtle 3D tilt for depth
 */
export const liquid3D: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.96,
    rotateX: -8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.5,
      ease: easings.liquid,
    },
  },
}

// ============================================================================
// STAGGER CONTAINERS
// ============================================================================

/**
 * Creates a stagger container with configurable timing
 */
export const staggerContainer = (
  staggerChildren = 0.1,
  delayChildren = 0
): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
})

/**
 * Fast stagger for small items (badges, tags)
 */
export const staggerFast = staggerContainer(0.04, 0.1)

/**
 * Medium stagger for cards and sections
 */
export const staggerMedium = staggerContainer(0.1, 0.1)

/**
 * Slow stagger for large content blocks
 */
export const staggerSlow = staggerContainer(0.15, 0.2)

// ============================================================================
// HOVER ANIMATIONS
// ============================================================================

/**
 * Simple scale hover
 */
export const hoverScale = (scale = 1.02): Transition => ({
  scale,
  transition: springs.snappy,
})

/**
 * Lift hover - combines scale and vertical movement
 */
export const hoverLift = (y = -4, scale = 1.02): Transition => ({
  y,
  scale,
  transition: springs.snappy,
})

/**
 * Subtle hover - minimal movement for professional feel
 */
export const hoverSubtle: Transition = {
  scale: 1.01,
  y: -2,
  transition: springs.smooth,
}

/**
 * Card hover - standard for all card components
 */
export const hoverCard: Transition = {
  scale: 1.03,
  y: -4,
  transition: springs.snappy,
}

// ============================================================================
// TAP/PRESS ANIMATIONS
// ============================================================================

export const tapScale: Transition = {
  scale: 0.98,
}

export const tapScaleSubtle: Transition = {
  scale: 0.99,
}

// ============================================================================
// SPECIALIZED ANIMATIONS
// ============================================================================

/**
 * Page transition - used in PageTransition component
 */
export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    y: 20,
    filter: 'blur(4px)',
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
  },
  exit: {
    opacity: 0,
    y: -20,
    filter: 'blur(4px)',
  },
}

/**
 * Modal/overlay animations
 */
export const overlayFade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
}

export const modalSlideUp: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      damping: 20,
      stiffness: 300,
    },
  },
  exit: {
    opacity: 0,
    y: 50,
    scale: 0.95,
    transition: { duration: 0.2 },
  },
}

// ============================================================================
// BADGE/CHIP ANIMATIONS
// ============================================================================

export const badgeVariant: Variants = {
  hidden: {
    opacity: 0,
    y: -12,
    scale: 0.85,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: springs.gentle,
  },
}

export const badgeHover: Transition = {
  y: -2,
  scale: 1.05,
  transition: springs.bouncy,
}

// ============================================================================
// STAT/NUMBER ANIMATIONS
// ============================================================================

export const statReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: springs.gentle,
  },
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Create custom stagger timing for specific number of items
 */
export const createStagger = (
  itemCount: number,
  totalDuration: number,
  delayChildren = 0
): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: totalDuration / itemCount,
      delayChildren,
    },
  },
})

/**
 * Create custom transition with liquid easing
 */
export const liquidTransition = (duration = 0.5, delay = 0): Transition => ({
  duration,
  delay,
  ease: easings.liquid,
})

/**
 * Create spring transition with custom config
 */
export const springTransition = (
  stiffness = 300,
  damping = 20,
  delay = 0
): Transition => ({
  type: 'spring',
  stiffness,
  damping,
  delay,
})
