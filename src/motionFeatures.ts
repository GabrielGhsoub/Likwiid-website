// Animation features for LazyMotion (App.tsx). Kept in its own module so the dynamic import
// gets a separate chunk that loads after the first render, not on the critical path.
export { domMax } from 'framer-motion'
